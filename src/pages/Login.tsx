import { FiMail } from "react-icons/fi";
import { Link } from "react-router";
import PasswordInput from "../components/PasswordInput";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-xl px-6 py-8">
        <h1 className="text-[1.75rem] font-bold text-gray-900 mb-1 leading-tight">
          Welcome back
        </h1>
        <p className="text-sm text-gray-400 mb-7">
          Please enter your details to sign in.
        </p>

        <form className="space-y-4">
          {/* Email */}
          <div>
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
              <Input id="email" type="email" placeholder="Your Email" className="pl-9 pr-3" />
            </div>
          </div>

          <PasswordInput id="password" label="Password" placeholder="Password" />

          <button
            type="submit"
            className="w-full py-3 mt-1 bg-[#1c3d4f] hover:bg-[#162f3d] text-white font-semibold text-sm rounded-none transition-colors cursor-pointer"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-5">
          Don't have an account?{" "}
          <Link to="/" className="font-bold text-gray-800 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
