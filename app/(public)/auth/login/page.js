import AuthForm from "@/components/forms/AuthForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Logo */}
      <div className="absolute top-8 left-20">
        <h1 className="text-xl font-bold text-red-500">INDOCONNEX</h1>
      </div>

      {/* Login Form Container */}
      <div className="w-full max-w-[720px] mx-auto px-20 flex items-center">
        <div className="w-full py-20">
          {/* Title */}
          <div className="mb-12">
            <h1 className="text-4xl font-medium text-[#21272a] tracking-[-0.02em] leading-11">
              Log In
            </h1>
          </div>

          {/* Form */}
          <AuthForm mode="login" />
        </div>
      </div>
    </div>
  );
}
