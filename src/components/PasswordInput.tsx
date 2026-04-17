import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

type PasswordInputProps = {
  label?: string;
  placeholder?: string;
  showToggle?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">;

const PasswordInput = ({
  label,
  placeholder = "Password",
  showToggle = true,
  className,
  id,
  ...props
}: PasswordInputProps) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-semibold text-[#1c3d4f] mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-3.75 h-3.75" />
        <input
          id={id}
          type={showPass ? "text" : "password"}
          placeholder={placeholder}
          className={`w-full pl-9 ${showToggle ? "pr-10" : "pr-3"} py-2.5 border border-gray-200 rounded-none text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 bg-white ${className ?? ""}`}
          {...props}
        />
        {showToggle && (
          <button
            type="button"
            onClick={() => setShowPass((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPass ? <EyeOff className="w-3.75 h-3.75" /> : <Eye className="w-3.75 h-3.75" />}
          </button>
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
