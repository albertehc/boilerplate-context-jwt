import React from "react";

export const RepeatPassword = ({ password, register, errors }) => (
  <div>
    <input
      name="password_repeat"
      placeholder="Repeat password"
      type="password"
      ref={register({
        required: "The passwords do not match",
        validate: (value) =>
          value === password.current || "The passwords do not match",
      })}
    />
    {errors.password_repeat && (
      <span className="">{errors.password_repeat.message}</span>
    )}
  </div>
);
