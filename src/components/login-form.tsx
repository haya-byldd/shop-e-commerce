"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const validationSchema = z.object({
  username: z.string().trim().min(1, { error: "Username is required." }),
  password: z.string().min(1, "Password is required."),
});

type Schema = z.infer<typeof validationSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Schema>({ resolver: zodResolver(validationSchema) });

  const handleLogin = async (formData: Schema) => {
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      const resData = await res.json();

      if (!res.ok) {
        console.log("failed to login", resData.message);
        return;
      }
      console.log("Login successful:", resData);
      reset();
    } catch (error) {
      console.log("Login request failed:", error);
    }
  };
  return (
    <>
      <div className="mb-5">
        
        <h1 className="text-[1.5rem] font-semibold">Welcome back to Shop</h1>
      </div>
      <form
        className="space-y-4"
        noValidate
        onSubmit={handleSubmit(handleLogin)}
      >
        <div>
          <label htmlFor="email" className="block text-sm ">
            Username
          </label>
          <input
            {...register("username")}
            type="text"
            id="username"
            className="border border-border p-3 rounded-input w-full mt-1"
          />
          {errors.username && (
            <p className="text-sm text-danger">{errors.username.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="password" className="block text-sm">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            className="border border-border p-3 rounded-input w-full mt-1"
          />
          {errors.password && (
            <p className="text-sm text-danger">{errors.password.message}</p>
          )}
        </div>

        <button
          disabled={isSubmitting}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Loggin in..." : "Log In"}
        </button>
      </form>
      <p className="text-center text-sm mt-5 ">
        New to Shop?
        <Link href="/signup" className="text-accent underline text-link font-medium">
          Create an Account
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
