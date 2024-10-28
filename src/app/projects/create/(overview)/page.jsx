"use client";
import { useState } from "react";

export default function Page() {
  const allowedTechnologies = [
    {
      label: "AlpineJS",
      value: "alpinejs",
    },
    {
      label: "AlpineJS",
      value: "alpinejs",
    },
    {
      label: "AlpineJS",
      value: "alpinejs",
    },
  ];
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [error, setError] = useState("");

  const handleTechnologyChange = (event) => {
    const value = event.target.value;
    if (value && !selectedTechnologies.includes(value)) {
      setSelectedTechnologies((prev) => [...prev, value]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      selectedTechnologies.every((tech) => allowedTechnologies.includes(tech))
    ) {
      setError("");
      // Submit the form with selectedTechnologies
      console.log("Form submitted with technologies:", selectedTechnologies);
    } else {
      setError("Please select technologies only from the predefined list.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <span className="text-gray-700">Technologies Used</span>
        <select
          onChange={handleTechnologyChange}
          className="block w-full mt-1 rounded-md"
        >
          <option value="">Select a technology</option>
          {allowedTechnologies.map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </select>
      </label>

      {selectedTechnologies.length > 0 && (
        <div className="space-x-2">
          {selectedTechnologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {error && <p className="text-red-500">{error}</p>}

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Add Project
      </button>
    </form>
  );
}
