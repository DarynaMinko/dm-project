import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const isValidEmail = (email) =>
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const handleEmailValidation = (email) => {
    const isValid = isValidEmail(email);
    const validityChanged =
      (errors.email && isValid) || (!errors.email && !isValid);
    if (validityChanged) {
    }
    return isValid;
  };

  return (
    <form
      style={{
        backgroundColor: "#0e101c",
        padding: "100px",
        alignItems: "center",
        width: "260px"
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2
        style={{
          color: "white",
          fontFamily: "sans-serif",
          fontSize: "15px",
          fontWeight: "400",
          marginTop: "12px",
          textAlign: "center"
        }}
      >
        Create an account
      </h2>
      <input
        {...register("email", {
          validate: handleEmailValidation
        })}
        placeholder="Email"
        type="text"
        id="fname"
        style={{
          marginTop: "10px",
          backgroundColor: "white",
          borderRadius: "8px",
          border: "0",
          boxSizing: "border-box",
          color: "black",
          fontSize: "10px",
          height: "100%",
          outline: "10",
          width: "100%",
          fontFamily: "sans-serif",
          alignItems: "center",
          padding: "10px",
          justifyContent: "center"
        }}
      />
      {errors.email && (
        <p style={{ color: "red", fontSize: "8px", padding: "5px" }}>
          {errors.email.message}
          Entered value does not match email format
        </p>
      )}
      <input
        {...register("password", {
          pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
          minLength: 8,
          required: "Password is required!"
        })}
        placeholder="Password"
        type="text"
        id="fpasssword"
        style={{
          marginTop: "10px",
          backgroundColor: "white",
          borderRadius: "8px",
          border: "0",
          boxSizing: "border-box",
          color: "black",
          fontSize: "10px",
          height: "100%",
          outline: "10",
          width: "100%",
          fontFamily: "sans-serif",
          alignItems: "center",
          padding: "10px",
          justifyContent: "center"
        }}
      />
      {errors.password && (
        <p style={{ color: "red", fontSize: "8px", padding: "5px" }}>
          {errors.password.message}
        </p>
      )}

      <input
        {...register("passwordConfirmation", {
          required: "Please confirm password!",
          validate: {
            matchesPreviousPassword: (value) => {
              const { password } = getValues();
              return password === value || "Passwords should match!";
            }
          }
        })}
        placeholder="Confirmation Password"
        type="text"
        id="fconfpasssword"
        style={{
          marginTop: "10px",
          backgroundColor: "white",
          borderRadius: "8px",
          border: "0",
          boxSizing: "border-box",
          color: "black",
          fontSize: "10px",
          height: "100%",
          outline: "10",
          width: "100%",
          fontFamily: "sans-serif",
          alignItems: "center",
          padding: "10px",
          justifyContent: "center"
        }}
      />
      {errors.passwordConfirmation && (
        <p style={{ color: "red", fontSize: "8px", padding: "5px" }}>
          {errors.passwordConfirmation.message}
        </p>
      )}
      <button
        type="submit"
        style={{
          backgroundColor: "#85BC7D",
          borderRadius: "8px",
          border: "0",
          boxSizing: "border-box",
          color: "#eee",
          cursor: "pointer",
          fontSize: "16px",
          height: "30px",
          marginTop: "30px",
          textAlign: "center",

          width: "100%"
        }}
      >
        Register
      </button>
      <p
        style={{
          color: "white",
          fontFamily: "sans-serif",
          fontSize: "10px",
          fontWeight: "400",
          marginTop: "12px"
        }}
      >
        Already have an account? Click to &nbsp;
        <Link
          style={{
            color: "white",
            fontFamily: "sans-serif",
            fontSize: "10px",
            fontWeight: "400",
            marginTop: "12px"
          }}
          to="/Login"
        >
          log in
        </Link>
      </p>
    </form>
  );
}
