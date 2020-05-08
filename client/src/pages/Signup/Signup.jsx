import React, { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "./styles";
import { Email } from "../../components/Auth/Email";
import { Username } from "../../components/Auth/Username";
import { Password } from "../../components/Auth/Password";
import { RepeatPassword } from "../../components/Auth/RepeatPassword";
import { useAuthContext } from "./../../context/auth/authContext";
import {
  setUserAction,
  setUserActionError,
} from "./../../context/auth/authActions";
import { signup } from "../../api/auth.api";
//import { signup, login, edit, remove, me } from "../../api/auth.api";
export function Signup() {
  const [error, setError] = useState(false);
  const { register, handleSubmit, errors, watch } = useForm();
  const [{ msg }, dispatch] = useAuthContext();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data) => {
    const { username, email, password } = data;
    signup({ username, email, password })
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
        <Username register={register} errors={errors} />
        <Password register={register} errors={errors} />
        <RepeatPassword
          password={password}
          register={register}
          errors={errors}
        />
        <input type="submit" />
      </Form>
    </>
  );
}
