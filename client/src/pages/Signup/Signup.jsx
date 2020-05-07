import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Form } from "./styles";
import { Email } from "./../../components/Signup/Email";
import { Username } from "../../components/Signup/Username";
import { Password } from "../../components/Signup/Password";
import { RepeatPassword } from "../../components/Signup/RepeatPassword";

export function Signup() {
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("Password", "");
  const onSubmit = (data) => console.log(data);
  console.log(errors);

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
