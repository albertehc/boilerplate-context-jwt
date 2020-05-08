import React from "react";

export const Email = ({ register, errors }) => (
  <div>
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
    {error && errors.Email && <span className="">{errors.Email.message}</span>}
  </div>
);
