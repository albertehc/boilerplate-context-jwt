import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Form } from "./styles";
import { Email } from "../../components/Auth/Email";
import { Password } from "../../components/Auth/Password";
import { login } from "./../../api/auth.api";

export function Login() {
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data) => {
    const { email, password } = data;
    login({ email, password }).then(response => console.log(response))
    .then(console.log(document.cookie));
  };
  console.log(document.cookie)
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete={"off"}>
        <Email register={register} errors={errors} />
        <Password register={register} errors={errors} />
        <input type="submit" />
      </Form>
    </>
  );
}
