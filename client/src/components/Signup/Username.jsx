import React from "react";

export const Username = ({ register, errors }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        name="Username"
        ref={register({
          required: { value: true, message: "Username can't be empty" },
          maxLength: { value: 20, message: "Username max length is 20" },
          pattern: {
            value: /^[a-zA-Z0-9_]*$/i,
            message: "Username can only be alphanumeric",
          },
        })}
      />
      {errors.Username && <span className="">{errors.Username.message}</span>}
    </div>
  );
};
