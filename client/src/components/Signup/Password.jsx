import React from "react";

export const Password = ({ register, errors }) => (
  <div>
    <input
      name="Password"
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
    {errors.Password && <span className="">{errors.Password.message}</span>}
  </div>
);
