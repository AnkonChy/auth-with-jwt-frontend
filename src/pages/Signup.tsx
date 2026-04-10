import React from 'react';

const Signup = () => {
    return (
         <div className="signup">
      <div className="w-full flex flex-col p-6 sm:p-8 lg:p-12 bg-white">
        <div className="mb-auto">
          <img src="/logo2.png" alt="MedNinja" className="w-44" />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-lg mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-semibold mb-2">
                Create an account
              </h1>
              <p className="text-[#666666] text-base">
                Welcome! Please enter your details to get started.
              </p>
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Label
                    htmlFor="firstName"
                    className="text-[#1a1a1a] text-sm font-medium"
                  >
                    First Name
                  </Label>
                  <div className="relative">
                    <HiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#9ca3af]" />
                    <Input
                      {...register("firstName")}
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      className="h-11 pl-10 border-[#e0e0e0] rounded-lg"
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="lastName"
                    className="text-[#1a1a1a] text-sm font-medium"
                  >
                    Last Name
                  </Label>
                  <div className="relative">
                    <HiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#9ca3af]" />
                    <Input
                      {...register("lastName")}
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      className="h-11 pl-10 border-[#e0e0e0] rounded-lg"
                    />
                  </div>
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <Label
                  htmlFor="email"
                  className="text-[#1a1a1a] text-xs font-medium"
                >
                  Email
                </Label>
                <div className="relative">
                  <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#9ca3af]" />
                  <Input
                    {...register("email")}
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="h-11 pl-10 border-[#e0e0e0] rounded-lg"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <PasswordInput
                  {...register("password")}
                  id="password"
                  label="Password"
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <PasswordInput
                  {...register("confirmPassword")}
                  id="confirmPassword"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  showToggle={false}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-11 bg-[#05364c] hover:bg-[#042637] text-white font-medium rounded-lg transition-colors"
              >
                Sign Up
              </button>
            </form>

            <p className="text-center mt-6 text-sm text-[#666666]">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#1a1a1a] font-medium hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-auto pt-8">
          <p className="text-[#666666] text-sm">
            © 2026 MedNinja Technologies Inc.
          </p>
        </div>
      </div>
    </div>
    );
};

export default Signup;