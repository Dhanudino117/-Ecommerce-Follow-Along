// SignUp.js

import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-transparent">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-bold mb-4 items-center flex justify-center">
          Sign Up
        </h2>
        <hr className="w-full border-gray-300" />
        <form>
          <div className="mb-4">
            <label
              className=" text-gray-700 text-sm font-bold my-2 flex -ml-0"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="flex -m-0 my-2 text-gray-700 text-sm font-bold mb-2 "
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label
              className="flex -m-0 text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="m-6 mx-0 w-full px-4 py-2 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-600"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <div className="flex items-center justify-between my-3">
            <p className="text-sm font-sans text-gray-600 ">
              Already have an account?
            </p>
            <Link to={"/login"}>
              <p className="text-indigo-400 font-sans text-sm ">Login here</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
