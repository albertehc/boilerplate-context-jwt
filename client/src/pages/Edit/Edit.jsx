import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Form } from "./styles";
import { Email } from "../../components/Auth/Email";
import { Username } from "../../components/Auth/Username";
import { Password } from "../../components/Auth/Password";
import { RepeatPassword } from "../../components/Auth/RepeatPassword";
import { useAuthContext } from "./../../context/auth/authContext";
import { edit } from "../../api/auth.api";
import { submitApi } from "../../helpers/submitApi.js";

export const Edit = () => {
  const { register, handleSubmit, errors, watch, setValue } = useForm();
  const [{ username, email }, dispatch] = useAuthContext();
  const password = useRef({});
  const history = useHistory();
  password.current = watch("password", "");

  const onSubmit = (data) => {
    submitApi({ data, api: edit ,action: 'Edit', history, dispatch })
  }

  useEffect(() => {
    setValue("email", email);
    setValue("username", username);
  }, [email, username, setValue]);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete={"off"}>
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
