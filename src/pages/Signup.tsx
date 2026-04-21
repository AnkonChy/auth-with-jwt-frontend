import { FiUser, FiMail } from "react-icons/fi";
import { Link } from "react-router";
import PasswordInput from "../components/PasswordInput";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-xl px-6 py-8">
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
              <Label htmlFor="firstName">First Name</Label>
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                <Input id="firstName" type="text" placeholder="First Name" className="pl-9 pr-3" />
              </div>
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                <Input id="lastName" type="text" placeholder="Last Name" className="pl-9 pr-3" />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
              <Input id="email" type="email" placeholder="Your Email" className="pl-9 pr-3" />
            </div>
          </div>

          <PasswordInput id="password" label="Password" placeholder="Password" />
          <PasswordInput id="confirmPassword" label="Confirm Password" placeholder="Confirm Password" showToggle={false} />

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
