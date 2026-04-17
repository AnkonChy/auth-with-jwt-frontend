import { User, Mail } from "lucide-react";
import { Link } from "react-router";
import PasswordInput from "../components/PasswordInput";

const inputClass =
  "w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-none text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 bg-white";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-2xl px-6 py-8">
        <h1 className="text-[1.75rem] font-bold text-gray-900 mb-1 leading-tight">
          Create an account
        </h1>
        <p className="text-sm text-gray-400 mb-7">
          Welcome! Please enter your details to get started.
        </p>

        <form className="space-y-4">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-semibold text-[#1c3d4f] mb-1.5">
                First Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-3.75 h-3.75" />
                <input
                  type="text"
                  placeholder="First Name"
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1c3d4f] mb-1.5">
                Last Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-3.75 h-3.75" />
                <input
                  type="text"
                  placeholder="Last Name"
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-[#1c3d4f] mb-1.5">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-3.75 h-3.75" />
              <input
                type="email"
                placeholder="Your Email"
                className={inputClass}
              />
            </div>
          </div>

          {/* Password */}
          <PasswordInput id="password" label="Password" placeholder="Password" />

          {/* Confirm Password */}
          <PasswordInput id="confirmPassword" label="Confirm Password" placeholder="Confirm Password" showToggle={false} />

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 mt-1 bg-[#1c3d4f] hover:bg-[#162f3d] text-white font-semibold text-sm rounded-none transition-colors cursor-pointer"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-5">
          Already have an account?{" "}
          <Link to="/login" className="font-bold text-gray-800 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
