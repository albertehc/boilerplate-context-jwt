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
import { useHistory } from "react-router-dom";

export const Login = () => {
  const [{ msg }, dispatch] = useAuthContext();
  const [error, setError] = useState(false);
  const history = useHistory();
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    const { email, password } = data;
    login({ email, password })
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
        <Password
          name={"password"}
          edit={false}
          placeholder={"Password"}
          register={register}
          errors={errors}
        />
        <input type="submit" />
      </Form>
    </>
  );
};
