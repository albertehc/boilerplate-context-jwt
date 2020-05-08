import React from "react";

export const Password = ({ register, errors }) => (
  <div>
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
    {errors.password && <span className="">{errors.password.message}</span>}
  </div>
);
