import { useState, ChangeEvent, FormEvent } from 'react';

// Step 1: Define the type for the form data
// This ensures that our form data has these specific fields (name, email, password)
// and they should always be strings.
interface FormData {
  name: string;
  email: string;
  password: string;
}

export default function MyForm() {
  // Step 2: Initialize formData with useState
  // formData will store the current values of the form fields
  // setFormData will be used to update the formData when the user types something
  const [formData, setFormData] = useState<FormData>({
    name: '',      // Initial value for name is an empty string
    email: '',     // Initial value for email is an empty string
    password: ''   // Initial value for password is an empty string
  });

  // Step 3: Create a function that handles input changes
  // This function will be called every time the user types in one of the input fields
  // ChangeEvent<HTMLInputElement> tells TypeScript that this function handles changes from HTML input elements
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // e.target gives us access to the input field being typed in

    // We update only the specific field in the form (name, email, or password) without changing the others
    setFormData({
      ...formData,        // Copy all the current form data (this keeps the other fields unchanged)
      [name]: value       // Update only the field that the user is typing in
      // The "name" here comes from the input's name attribute and must match the keys in formData
    });
  };

  // Step 4: Create a function to handle form submission
  // This function is called when the user submits the form
  // FormEvent ensures the event is properly typed for form submissions
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();  // Prevent the default form behavior (which would reload the page)
    console.log(formData); // Here we can see the form data the user entered
    // At this point, you'd typically send the form data to your server or API
  };

  // Step 5: Create the form UI
  return (
    <form onSubmit={handleSubmit}>
      {/* Name input */}
      <div>
        <label>Name:</label>
        <input
          type="text"              // Input type is text
          name="name"              // The name attribute must match the key in formData (name, email, password)
          value={formData.name}    // This tells the input field to show the current value of formData.name
          onChange={handleInputChange} // Every time the user types, this function is called to update the value
        />
      </div>

      {/* Email input */}
      <div>
        <label>Email:</label>
        <input
          type="email"             // Input type is email
          name="email"             // The name attribute must match the key in formData (name, email, password)
          value={formData.email}   // This tells the input field to show the current value of formData.email
          onChange={handleInputChange} // Every time the user types, this function is called to update the value
        />
      </div>

      {/* Password input */}
      <div>
        <label>Password:</label>
        <input
          type="password"          // Input type is password
          name="password"          // The name attribute must match the key in formData (name, email, password)
          value={formData.password} // This tells the input field to show the current value of formData.password
          onChange={handleInputChange} // Every time the user types, this function is called to update the value
        />
      </div>

      <button type="submit">Submit</button> {/* This button submits the form */}
    </form>
  );
}
