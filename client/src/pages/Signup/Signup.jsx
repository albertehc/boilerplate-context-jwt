import React, { useRef } from "react";
import { useForm } from "react-hook-form";

export function Signup() {
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Email"
          name="Email"
          ref={register({
            required: { value: true, message: "Email can't be empty" },
            maxLength: 80,
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Invalid email address",
            },
          })}
        />
        <input
          type="text"
          placeholder="Username"
          name="Username"
          ref={register({
            trim: true,
            required: { value: true, message: "Username can't be empty" },
            maxLength: { value: 20, message: "Username max length is 20" },
            pattern: {
              value: /^[a-zA-Z0-9_]*$/i,
              message: "Username can only be alphanumeric",
            },
          })}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          ref={register({
            required: "You must specify a password",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          })}
        />
        <input
          name="password_repeat"
          placeholder="Repeat password"
          type="password"
          ref={register({
            validate: (value) =>
              value === password.current || "The passwords do not match",
          })}
        />

        <input type="submit" />
      </form>
    </>
  );
}
