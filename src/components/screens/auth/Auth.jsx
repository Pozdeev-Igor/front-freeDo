import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { validEmail } from "./valid-email";
import Field from "../ui/Field";
import Loader from "../ui/Loader";
import Heading from "../ui/Heading";
import ButtonRegister from "../ui/Buttons/ButtonRegister";

const Auth = () => {
  const [type, setType] = useState("login");

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm <
  IEmailPassword >
  {
    mode: "onChange",
  };

  const onSubmit = (data) => {
    if (type === "login") login(data);
    else register(data);

    reset();
  };

  return (
    <section className="">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <Heading className="">{type}</Heading>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Field
              {...formRegister("email", {
                required: "Email is required",
                pattern: {
                  value: validEmail,
                  message: "Please enter a valid email addres",
                },
              })}
              placeholder="Email"
              error={errors.email?.message}
            />

            <Field
              {...formRegister("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Min length should more 6 symbols",
                },
              })}
              type="password"
              placeholder="Password"
              error={errors.password?.message}
            />
            <ButtonRegister type="submit" variant="orange">
              Let's go
            </ButtonRegister>

            <div>
              <button
                type="button"
                className=""
                onClick={() => setType(type === "login" ? "register" : "login")}
              >
                {type === "login" ? "Register" : "Login"}
              </button>
            </div>
          </>
        )}
      </form>
    </section>
  );
};

export default Auth;
