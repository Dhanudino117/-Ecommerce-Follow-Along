import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <div className="login-container flex items-center justify-center min-h-screen bg-gray-100">
        <div className="logInbox w-full max-w-sm p-6 bg-white rounded-xl shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">
              Login to Your Account
            </h1>
            <label>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg"
              {...register("username", { required: "Username is required" })}
            />
            <br />
            {errors.username && (
              <div className="text-red-500 text-xs">
                {errors.username.message}
              </div>
            )}
            <label>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg"
              {...register("password", { required: "Password is required" })}
            />
            <br />
            {errors.password && (
              <div className="text-red-500 text-xs">
                {errors.password.message}
              </div>
            )}
            <div className="flex justify-end">
              <button className="mt-3  text-gray-700 text-xs">
                forgot password?
              </button>
            </div>
            <button
              type="submit"
              className="m-6 mx-0 w-full px-4 py-2 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-600"
            >
              Login
            </button>
            <span className="ml-20 text-gray-700 text-xs">
              {" "}
              Do nott have an account?
            </span>
            &nbsp;
            <Link to="/signup" className="text-blue-600 text-xs">
              Signup
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
