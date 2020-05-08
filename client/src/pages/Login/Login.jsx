import React, { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "./styles";
import { Email } from "../../components/Auth/Email";
import { Password } from "../../components/Auth/Password";
import { login } from "./../../api/auth.api";
import { useAuthContext } from "./../../context/auth/authContext";
import {
  setUserAction,
  setUserActionError,
} from "./../../context/auth/authActions";

export const Login = () => {
  const [{ msg }, dispatch] = useAuthContext();
  const [error, setError] = useState(false);
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    const { email, password } = data;
    login({ email, password })
      .then((res) => dispatch(setUserAction(res)))
      .catch((e) => dispatch(setUserActionError(e.response.data.msg)));
  };

  useEffect(() => {
    setError(true);
  }, [msg]);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete={"off"}>
        <div>{error && msg}</div>
        <Email register={register} errors={errors} />
        <Password register={register} errors={errors} />
        <input type="submit" />
      </Form>
    </>
  );
}
