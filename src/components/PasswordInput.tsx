import { useState } from "react";
import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type PasswordInputProps = {
  label?: string;
  placeholder?: string;
  showToggle?: boolean;
} & Omit<React.ComponentProps<typeof Input>, "type">;

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
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className="relative">
        <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
        <Input
          id={id}
          type={showPass ? "text" : "password"}
          placeholder={placeholder}
          className={`pl-9 ${showToggle ? "pr-10" : "pr-3"} ${className ?? ""}`}
          {...props}
        />
        {showToggle && (
          <button
            type="button"
            onClick={() => setShowPass((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPass ? <FiEyeOff size={14} /> : <FiEye size={14} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
