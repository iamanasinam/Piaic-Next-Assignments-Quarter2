"use client"
import { useState, ChangeEvent, FormEvent } from "react";
import Card from "../card/Card";

// Define the shape of the form data
interface FormData {
  name: string;
  grade: string;
  age: string;
  email: string;
}

export default function StudentForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    grade: "",
    age: "",
    email: "",
  });

  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  // Function to handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSubmittedData(formData); // Pass the formData to the submittedData state
    console.log(formData);
    alert(`Form submitted!`);
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Student Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Grade Input */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Grade</label>
            <input
              type="text"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              placeholder="Enter your grade"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Age Input */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Conditionally render the Card component if the form is submitted */}
      {submittedData && <Card studentDetails={submittedData} />}
    </>
  );
}
