import React from "react";

// Define the shape of studentDetails prop
interface StudentDetails {
  name: string;
  grade: string;
  age: string;
  email: string;
}

export default function Card({ studentDetails }: { studentDetails: StudentDetails }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mt-6">
      <h2 className="text-xl font-bold text-gray-800">{studentDetails.name}</h2>
      <p className="text-gray-600">Grade: {studentDetails.grade}</p>
      <p className="text-gray-600">Age: {studentDetails.age}</p>
      <p className="text-gray-600">Email: {studentDetails.email}</p>
      <div className="mt-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          View Profile
        </button>
      </div>
    </div>
  );
}
