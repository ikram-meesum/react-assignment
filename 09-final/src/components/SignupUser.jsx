import { app } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";

const SignupUser = () => {
  const auth = getAuth(app);

  // console.log("signup");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((value) => console.log(value))
      .catch((err) => {
        console.log("Error occred from signup user.\r\n", err.message);
      });
  };

  return (
    <>
      <h1>SignupUser Page</h1>
      <section className="h-screen">
        <div className="h-full">
          {/* <!-- Left column container with background--> */}
          <div className="flex h-full flex-wrap bg-gray-50 items-center justify-center lg:justify-between">
            <div className="mb-12 bg-gray-50 grow-0 basis-auto md:w-6/12 lg:w-6/12 xl:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image"
              />
            </div>

            {/* <!-- Right column container --> */}
            <div className="min-h-screen bg-gray-50 md:w-6/12 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                  Create a firebase account
                </h2>
                <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
                  Or &nbsp;
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                  >
                    login to your account
                  </a>
                </p>
              </div>

              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-5  text-gray-700"
                      >
                        Username
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          id="name"
                          // name="name"
                          placeholder="Enter Username"
                          {...register("username", { required: true })}
                          type="text"
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                        <p className="text-sm text-red-500 mt-2">
                          {errors.username && <span>Username is required</span>}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-5  text-gray-700"
                      >
                        Email address
                      </label>
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
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-5 text-gray-700"
                      >
                        Password
                      </label>
                      <div className="mt-1 rounded-md shadow-sm">
                        <input
                          id="password"
                          {...register("password", {
                            required: "You must specity the password",
                            minLength: {
                              value: 6,
                              message:
                                "Password must have at least 6 characters",
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
                      <label
                        htmlFor="password_confirmation"
                        className="block text-sm font-medium leading-5 text-gray-700"
                      >
                        Confirm Password
                      </label>
                      <div className="mt-1 rounded-md shadow-sm">
                        <input
                          id="password_confirmation"
                          {...register("confirm", {
                            required: true,
                            validate: (val) => {
                              if (watch("password") != val) {
                                return "Your passwords do not match";
                              }
                            },
                          })}
                          type="password"
                          required=""
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                        <p className="text-sm text-red-500 mt-2">
                          {errors.confirm &&
                            errors.confirm.type === "validate" && (
                              <span>Confirm password is not match</span>
                            )}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <span className="block w-full rounded-md shadow-sm">
                        <button
                          type="submit"
                          className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                        >
                          Create account
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* End Second Div */}
          </div>
        </div>
      </section>
    </>
  );
};
export default SignupUser;
