import React from "react";

export const RepeatPassword = ({password, register, errors }) => {
  return (
    <div>
      <input
        name="Password_repeat"
        placeholder="Repeat password"
        type="password"
        ref={register({
          required: "The passwords do not match",
          validate: (value) =>
            value === password.current || "The passwords do not match",
        })}
      />
      {errors.Password_repeat && (
        <span className="">{errors.Password_repeat.message}</span>
      )}
    </div>
  );
};
