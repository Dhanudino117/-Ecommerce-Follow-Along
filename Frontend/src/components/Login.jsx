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
      <div className="login-container flex items-center justify-center w-full h-screen bg-transparent">
        <div className="logInbox w-full max-w-sm p-6 bg-white rounded-xl shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6 font-sans">
              Login
            </h1>
            <label className="flex -ml-0 my-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg"
              {...register("username", {
                required: "Username is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            <br />
            {errors.username && (
              <div className="text-red-500 text-xs">
                {errors.username.message}
              </div>
            )}
            <label className="flex -ml-0 my-1 mt-5">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                maxLength: {
                  value: 128,
                  message: "Password must not exceed 128 characters",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                },
              })}
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
            <div className="flex justify-between ">
              <span className=" text-gray-700 text-xs">
                Do not have an account?
              </span>

              <Link to="/signup" className="text-blue-600 text-xs">
                Signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
