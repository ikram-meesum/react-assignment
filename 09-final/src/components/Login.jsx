// import loginImage from "./login2.png";
import { app } from "./firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosAddCircle } from "react-icons/io";
import Navbar from "./Navbar";

const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((value) => console.log(value))
      .catch((err) => {
        console.log("Error occred from login user.\r\n", err.message);
      });
  };

  const signInGoogle = () => {
    console.log("google");
    signInWithPopup(auth, googleProvider);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-300">
        {/* <img src={loginImage} /> */}

        <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Login with firebase
            </h2>
          </div>
          <p className="mx-auto">Or</p>
          <button
            onClick={signInGoogle}
            className="rounded-lg bg-blue-500 w-48 text-white py-2 mx-auto mt-2 font-medium text-sm"
          >
            Signin with Google
          </button>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-gray-50 py-8 px-4 shadow-2xl rounded-lg sm:px-10">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-6">
                  <div className="flex text-sm font-medium leading-5  text-gray-700">
                    <p>Your Email</p>&nbsp;
                    <p className="mt-1">
                      <MdEmail />
                    </p>
                  </div>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="email"
                      {...register("email", { required: true })}
                      placeholder="user@example.com"
                      type="email"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                    <p className="text-sm text-red-500 mt-2">
                      {errors.email && <span>Email is required</span>}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex text-sm font-medium leading-5 text-gray-700">
                    <p>Password</p>&nbsp;
                    <p className="mt-1">
                      <RiLockPasswordFill />
                    </p>
                  </div>
                  <div className="mt-1 rounded-md shadow-sm">
                    <input
                      id="password"
                      {...register("password", {
                        required: "You must specity the password",
                        minLength: {
                          value: 6,
                          message: "Password must have at least 6 characters",
                        },
                      })}
                      type="password"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />

                    {errors.password && (
                      <p className="text-sm text-red-500 mt-2">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <span className="block w-full rounded-md shadow-sm">
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                      Create User&nbsp;
                      <IoIosAddCircle className="mt-1" />
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* End Form */}
      </div>
    </>
  );
};

export default Login;
