import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const phoneRegex = /^(\+?\d{1,3}[- ]?)?\d{10}$/;

const schema = yup.object().shape({
  firstName: yup.string().trim().required("First name is required."),
  lastName: yup.string().trim().required("Last name is required."),
  email: yup
    .string()
    .trim()
    .required("Email is required.")
    .email("Enter a valid email."),
  phoneNumber: yup
    .string()
    .trim()
    .required("Phone number is required.")
    .matches(
      phoneRegex,
      "Enter a valid phone number (10 digits, optional country code)."
    ),
  password: yup
    .string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters.")
    .matches(/[A-Z]/, "Password must include at least one uppercase letter.")
    .matches(/[a-z]/, "Password must include at least one lowercase letter.")
    .matches(/[0-9]/, "Password must include at least one number."),
  confirmPassword: yup
    .string()
    .required("Please confirm your password.")
    .oneOf([yup.ref("password")], "Passwords do not match."),
  age: yup
    .number()
    .typeError("Enter a valid numeric age.")
    .required("Age is required.")
    .integer("Age must be an integer.")
    .min(13, "You must be at least 13 years old."),
  gender: yup.string().required("Please select a gender."),
  interest: yup
    .array()
    .of(yup.string())
    .min(1, "Select at least one interest."),
  birthdate: yup
    .date()
    .typeError("Enter a valid date.")
    .max(new Date(), "Date of birth cannot be in the future.")
    .required("Date of birth is required."),
});

export default function YupandReactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      age: "",
      gender: "",
      interest: [],
      birthdate: "",
    },
  });

  const onSubmit = async (data) => {
    // simulate network latency if needed
    console.log("Form Submitted:", data);
    // reset() // uncomment to clear form after submit
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-md mx-auto mt-8 items-center justify-center"
      noValidate
    >
      {/* First Name */}
      <div className="flex flex-col border p-4 rounded-lg w-full">
        <label className="font-medium">First Name</label>
        <input
          {...register("firstName")}
          type="text"
          placeholder="Enter your first name"
          className="focus:outline-none focus:border-b focus:ring-0"
        />
        {errors.firstName && (
          <p className="text-sm text-red-600 mt-1">
            {errors.firstName.message}
          </p>
        )}
      </div>

      {/* Last Name */}
      <div className="flex flex-col border p-4 rounded-lg w-full">
        <label className="font-medium">Last Name</label>
        <input
          {...register("lastName")}
          type="text"
          placeholder="Enter your last name"
          className="focus:outline-none focus:border-b focus:ring-0"
        />
        {errors.lastName && (
          <p className="text-sm text-red-600 mt-1">{errors.lastName.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col border p-4 rounded-lg w-full">
        <label className="font-medium">Email</label>
        <input
          {...register("email")}
          type="email"
          placeholder="Enter your email"
          className="focus:outline-none focus:border-b focus:ring-0"
        />
        {errors.email && (
          <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className="flex flex-col border p-4 rounded-lg w-full">
        <label className="font-medium">Phone</label>
        <input
          {...register("phoneNumber")}
          type="text"
          placeholder="Enter your phone number"
          className="focus:outline-none focus:border-b focus:ring-0"
        />
        {errors.phoneNumber && (
          <p className="text-sm text-red-600 mt-1">
            {errors.phoneNumber.message}
          </p>
        )}
      </div>

      {/* Password */}
      <div className="flex flex-col border p-4 rounded-lg w-full">
        <label className="font-medium">Password</label>
        <input
          {...register("password")}
          type="password"
          placeholder="Enter password"
          className="focus:outline-none focus:border-b focus:ring-0"
        />
        {errors.password && (
          <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="flex flex-col border p-4 rounded-lg w-full">
        <label className="font-medium">Confirm Password</label>
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Enter password again"
          className="focus:outline-none focus:border-b focus:ring-0"
        />
        {errors.confirmPassword && (
          <p className="text-sm text-red-600 mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* Age */}
      <div className="flex flex-col border p-4 rounded-lg w-full">
        <label className="font-medium">Age</label>
        <input
          {...register("age")}
          type="number"
          placeholder="Enter your age"
          className="focus:outline-none focus:border-b focus:ring-0"
        />
        {errors.age && (
          <p className="text-sm text-red-600 mt-1">{errors.age.message}</p>
        )}
      </div>

      {/* Gender */}
      <div className="flex flex-col border p-4 rounded-lg w-full">
        <label className="font-medium">Gender</label>
        <select
          {...register("gender")}
          className="focus:outline-none focus:border-none"
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && (
          <p className="text-sm text-red-600 mt-1">{errors.gender.message}</p>
        )}
      </div>

      {/* Interests (checkbox group) */}
      <div className="flex flex-col border p-4 rounded-lg w-full">
        <label className="font-medium mb-2">Interest</label>

        <label className="flex items-center gap-2">
          <input {...register("interest")} type="checkbox" value="coding" />
          Coding
        </label>

        <label className="flex items-center gap-2">
          <input {...register("interest")} type="checkbox" value="sports" />
          Sports
        </label>

        <label className="flex items-center gap-2">
          <input {...register("interest")} type="checkbox" value="reading" />
          Reading
        </label>

        {errors.interest && (
          <p className="text-sm text-red-600 mt-1">{errors.interest.message}</p>
        )}
      </div>

      {/* Date of Birth */}
      <div className="flex flex-col border p-4 rounded-lg w-full">
        <label className="font-medium">Date of Birth</label>
        <input
          {...register("birthdate")}
          type="date"
          className="focus:outline-none focus:border-b focus:ring-0"
        />
        {errors.birthdate && (
          <p className="text-sm text-red-600 mt-1">
            {errors.birthdate.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="border py-2 px-5 disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
