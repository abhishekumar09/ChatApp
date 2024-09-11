import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

export default function Signup() {
  const [authUser, setAuthUser] = useAuth();
  // React Hook Form is primarily used for form validation in React applications.
  const {
    register,
    handleSubmit, // submit krne pe jo data hmein console pr mil rha hei voh iske krn
    watch,                              // use for confirm the password
    formState: { errors },
  } = useForm();
  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  const validatePasswordMatch = (value) => {
    return value === password || "Password don't match";
  };

  const onSubmit = async (data) => {             // async krne se cookies aayega inspect krne pe show hoga // kbi bhi hm db mein data dlte hein y reeive krte hein toh asyn use krte hein kyunki koi glt data na mil jaye
    // console.log(data)   we also check to submit the data in console
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmpassword: data.confirmPassword,
    };
    await axios                           // await use for ki error na aaye aur jb response aaye tbhi yeh execute ho nhi toh ruki rhe 
      .post("/api/user/signup", userInfo) // axios use for http request send and recieve krne ke liye allow krta hei
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          alert("Signup successfull! You can now log in.");
        }
        localStorage.setItem("messenger", JSON.stringify(response.data));                   // when successful data also store in browsers localstorage and also generated token there that is available in application // the token generatedd in the form of object that's why we convert into JSON.stringfy()
        setAuthUser(response.data);     // ab jo bhi user signupkrega uska data hm globally use krenge
      })
      .catch((error) => {
        if (error.response) {
          alert("Error:" + error.response.data.error);
        }
      });
  };
  return (
    <>
      <div>
        <div className="flex h-screen items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)} // with the help of handlesubmit when we click on submit the data rise in console
            className="border border-black px-6 py-3 rounded-md space-y-3 w-96"
          >
            <h1 className="text-2xl items-center text-blue-600 font-bold">
              Messenger
            </h1>
            <h2 className="text-2xl items-center">
              Create a new{" "}
              <span className="text-blue-600 font-semibold">Account</span>
            </h2>
            {/* Username */}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Username"
                {...register("name", { required: true })}
              />
            </label>
            {errors.name && (
              <span className="text-red-600 text-sm font-semibold">
                **This field is required**
              </span>
            )}
            {/*  it use to showcase the error that's why i put after the completion of input tag */}

            {/* this all  used daisyui code */}
            {/* Email */}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </label>
            {errors.email && (
              <span className="text-red-600 text-sm font-semibold">
                **This field is required**
              </span>
            )}

            {/* Password */}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="password"
                {...register("password", { required: true })}
              />
            </label>
            {errors.password && (
              <span className="text-red-600 text-sm font-semibold">
                **This field is required**
              </span>
            )}
            {/* Confirm Password */}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="Confirm password"
                {...register("confirmPassword", {
                  required: true,
                  validate: validatePasswordMatch,
                })}
              />
            </label>
            {errors.confirmPassword && (
              <span className="text-red-600 text-sm font-semibold">
                {errors.confirmPassword.message}
              </span>
            )}
            {/* Text & Button */}
            <div className="flex justify-center">
              <input
                type="submit"
                value="Signup"
                className="text-white bg-blue-600 cursor-pointer w-full rounded-lg py-2"
              ></input>
              {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <p>
              Have any Account?
              <Link to ={"/login"} className="text-blue-500 underline cursor-pointer ml-1 ">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
