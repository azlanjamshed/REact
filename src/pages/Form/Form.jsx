import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
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
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Helper regexes
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Accepts optional +country and 10 digits (common pattern). Adjust to stricter pattern if needed.
    const phoneRegex = /^(\+?\d{1,3}[- ]?)?\d{10}$/;
    const passwordRegex = {
      length: /.{8,}/,
      uppercase: /[A-Z]/,
      lowercase: /[a-z]/,
      number: /[0-9]/,
    };

    // Required checks
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email.";

    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required.";
    else if (!phoneRegex.test(formData.phoneNumber))
      newErrors.phoneNumber =
        "Enter a valid phone number (10 digits, optional country code).";

    if (!formData.password) newErrors.password = "Password is required.";
    else {
      if (!passwordRegex.length.test(formData.password))
        newErrors.password = "Password must be at least 8 characters.";
      else if (!passwordRegex.uppercase.test(formData.password))
        newErrors.password =
          "Password must include at least one uppercase letter.";
      else if (!passwordRegex.lowercase.test(formData.password))
        newErrors.password =
          "Password must include at least one lowercase letter.";
      else if (!passwordRegex.number.test(formData.password))
        newErrors.password = "Password must include at least one number.";
    }

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password.";
    else if (
      formData.password &&
      formData.confirmPassword !== formData.password
    )
      newErrors.confirmPassword = "Passwords do not match.";

    if (!formData.age && formData.age !== 0) newErrors.age = "Age is required.";
    else {
      const ageNum = Number(formData.age);
      if (Number.isNaN(ageNum) || !Number.isFinite(ageNum))
        newErrors.age = "Enter a valid numeric age.";
      else if (ageNum < 0) newErrors.age = "Age cannot be negative.";
      else if (ageNum < 13)
        newErrors.age = "You must be at least 13 years old.";
    }

    if (!formData.gender) newErrors.gender = "Please select a gender.";

    if (!Array.isArray(formData.interest) || formData.interest.length === 0)
      newErrors.interest = "Select at least one interest.";

    if (!formData.birthdate) newErrors.birthdate = "Date of birth is required.";
    else {
      const dob = new Date(formData.birthdate);
      const today = new Date();
      if (isNaN(dob.getTime())) newErrors.birthdate = "Enter a valid date.";
      else if (dob > today)
        newErrors.birthdate = "Date of birth cannot be in the future.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Use structured logging so objects are visible in console
      console.log("Form Submitted:", formData);
      // reset form or send to API here if needed
    } else {
      console.log("Form Validation Failed", errors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => {
      if (checked) {
        return { ...prev, interest: [...prev.interest, value] };
      } else {
        return {
          ...prev,
          interest: prev.interest.filter((item) => item !== value),
        };
      }
    });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col gap-4 max-w-md mx-auto mt-8 items-center justify-center"
    >
      {/* First Name */}
      <div className="flex flex-col border p-4 rounded-lg w-full">
        <label className="font-medium">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your first name"
          className="focus:outline-none focus:border-b focus:ring-0"
        />
        {errors.firstName && (
          <p className="text-sm text-red-600 mt-1">{errors.firstName}</p>
        )}
      </div>

      {/* Last Name */}
      <div className="flex flex-col border p-4 rounded-lg w-full">
        <label className="font-medium">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your last name"
          className="focus:outline-none focus:border-b focus:ring-0"
        />
        {errors.lastName && (
          <p className="text-sm text-red-600 mt-1">{errors.lastName}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col border p-4 rounded-lg w-full">
        <label className="font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="focus:outline-none focus:border-b focus:ring-0"
        />
        {errors.email && (
          <p className="text-sm text-red-600 mt-1">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div className="flex flex-col border p-4 rounded-lg w-full">
        <label className="font-medium">Phone</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Enter your phone number"
          className="focus:outline-none focus:border-b focus:ring-0"
        />
        {errors.phoneNumber && (
          <p className="text-sm text-red-600 mt-1">{errors.phoneNumber}</p>
        )}
      </div>

      {/* Password */}
      <div className="flex flex-col border p-4 rounded-lg w-full">
        <label className="font-medium">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          className="focus:outline-none focus:border-b focus:ring-0"
        />
        {errors.password && (
          <p className="text-sm text-red-600 mt-1">{errors.password}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="flex flex-col border p-4 rounded-lg w-full">
        <label className="font-medium">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Enter password again"
          className="focus:outline-none focus:border-b focus:ring-0"
        />
        {errors.confirmPassword && (
          <p className="text-sm text-red-600 mt-1">{errors.confirmPassword}</p>
        )}
      </div>

      {/* Age */}
      <div className="flex flex-col border p-4 rounded-lg w-full">
        <label className="font-medium">Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
          className="focus:outline-none focus:border-b focus:ring-0"
        />
        {errors.age && (
          <p className="text-sm text-red-600 mt-1">{errors.age}</p>
        )}
      </div>

      {/* Gender */}
      <div className="flex flex-col border p-4 rounded-lg w-full">
        <label className="font-medium">Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="focus:outline-none focus:border-none"
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && (
          <p className="text-sm text-red-600 mt-1">{errors.gender}</p>
        )}
      </div>

      {/* Interests */}
      <div className="flex flex-col border p-4 rounded-lg w-full">
        <label className="font-medium mb-2">Interest</label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="interest"
            value="coding"
            checked={formData.interest.includes("coding")}
            onChange={handleInterestChange}
            className="focus:outline-none focus:ring-0"
          />
          Coding
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="interest"
            value="sports"
            checked={formData.interest.includes("sports")}
            onChange={handleInterestChange}
            className="focus:outline-none focus:ring-0"
          />
          Sports
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="interest"
            value="reading"
            checked={formData.interest.includes("reading")}
            onChange={handleInterestChange}
            className="focus:outline-none focus:ring-0"
          />
          Reading
        </label>

        {errors.interest && (
          <p className="text-sm text-red-600 mt-1">{errors.interest}</p>
        )}
      </div>

      {/* Date of Birth */}
      <div className="flex flex-col border p-4 rounded-lg w-full">
        <label className="font-medium">Date of Birth</label>
        <input
          type="date"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
          className="focus:outline-none focus:border-b focus:ring-0"
        />
        {errors.birthdate && (
          <p className="text-sm text-red-600 mt-1">{errors.birthdate}</p>
        )}
      </div>

      <button type="submit" className="border py-2 px-5">
        Submit
      </button>
    </form>
  );
};

export default Form;
