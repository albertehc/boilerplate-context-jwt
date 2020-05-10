import React, { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "./styles";
import { Email } from "../../components/Auth/Email";
import { Username } from "../../components/Auth/Username";
import { Password } from "../../components/Auth/Password";
import { RepeatPassword } from "../../components/Auth/RepeatPassword";
import { useAuthContext } from "./../../context/auth/authContext";
import { edit } from "../../api/auth.api";
import {
  setUserAction,
  setEditActionError,
} from "./../../context/auth/authActions";

export const Edit = () => {
  const [error, setError] = useState(false);
  const { register, handleSubmit, errors, reset, watch, setValue } = useForm();
  const [{ username, email, msg }, dispatch] = useAuthContext();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    const { username, email, password, oldPassword } = data;
    edit({ username, email, password, oldPassword })
      .then((res) => {
        dispatch(setUserAction(res));
        reset({oldPassword: "",password:"",repeat_password:""})})
      .catch((e) => {
        e.response
          ? dispatch(setEditActionError(e.response.data.msg))
          : dispatch(
              setEditActionError(
                "Could not reach server, try again in a few minutes"
              )
            );
      })
      .then(() => {
        setValue("email", email);
        setValue("username", username);
      });
  };
  console.log(error);
  useEffect(() => {
    setError(true);
  }, [msg]);
  useEffect(() => {
    setValue("email", email);
    setValue("username", username);
  }, [email, username, setValue]);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete={"off"}>
        <div>{error && msg}</div>
        <Email placeholder="Email" register={register} errors={errors} />
        <Username
          placeholder={"Username"}
          register={register}
          errors={errors}
        />
        <Password
          name={"oldPassword"}
          placeholder={"Password"}
          edit={false}
          register={register}
          errors={errors}
        />
        <Password
          name={"password"}
          placeholder={"New Password"}
          edit={true}
          register={register}
          errors={errors}
        />
        <RepeatPassword
          placeholder={"Repeat New Password"}
          password={password}
          register={register}
          errors={errors}
        />
        <input type="submit" />
      </Form>
    </>
  );
};
