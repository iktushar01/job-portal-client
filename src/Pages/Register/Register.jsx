import React, { useContext } from "react";
import Lottie from "lottie-react";
import registerLottie from "../../assets/login.json";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="max-w-5xl w-full flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Lottie Animation */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Lottie
            className="hidden md:block"
            animationData={registerLottie}
            loop={true}
            style={{ width: "100%", maxWidth: 400 }}
          />
        </div>

        {/* Form Card */}
        <div className="w-full lg:w-1/2 bg-base-100 shadow-2xl rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Register Now</h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full"
              />
            </div>
            <button type="submit" className="btn btn-neutral w-full">
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
