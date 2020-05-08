import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Form } from "./styles";
import { Email } from "../../components/Auth/Email";
import { Username } from "../../components/Auth/Username";
import { Password } from "../../components/Auth/Password";
import { RepeatPassword } from "../../components/Auth/RepeatPassword";
import { signup } from "./../../api/auth.api";

export function Signup() {
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data) => {
    const { username, email, password } = data;
    signup({ username, email, password }).then(response => console.log(response.headers));
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete={"off"}>
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
