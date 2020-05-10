import React, { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "./styles";
import { Email } from "../../components/Auth/Email";
import { Username } from "../../components/Auth/Username";
import { Password } from "../../components/Auth/Password";
import { RepeatPassword } from "../../components/Auth/RepeatPassword";
import { useAuthContext } from "./../../context/auth/authContext";
import { signup } from "../../api/auth.api";
import {
  setUserAction,
  setUserActionError,
} from "./../../context/auth/authActions";
import { useHistory } from "react-router-dom";

export const Signup = () => {
  const [error, setError] = useState(false);
  const history = useHistory();
  const { register, handleSubmit, errors, watch } = useForm();
  const [{ msg }, dispatch] = useAuthContext();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    const { username, email, password } = data;
    signup({ username, email, password })
      .then((res) => dispatch(setUserAction(res)))
      .then(() => history.push("/"))
      .catch((e) => {
        e.response
          ? dispatch(setUserActionError(e.response.data.msg))
          : dispatch(
              setUserActionError(
                "Could not reach server, try again in a few minutes"
              )
            );
      });
  };

  useEffect(() => {
    setError(true);
  }, [msg]);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete={"off"}>
        <div>{error && msg}</div>
        <Email placeholder={'Email'} register={register} errors={errors} />
        <Username placeholder={'Username'} register={register} errors={errors} />
        <Password
          name={"password"}
          placeholder={"Password"}
          edit={false}
          register={register}
          errors={errors}
        />
        <RepeatPassword
          password={password}
          placeholder={"Repeat Password"}
          register={register}
          errors={errors}
        />
        <input type="submit" />
      </Form>
    </>
  );
};
