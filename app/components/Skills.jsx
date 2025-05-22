import React from "react";
import data from "../components/profile.json";

export default function Skills() {
  return (
    <section id="skills" className="p-6 bg-white rounded-lg shadow-md my-4">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <ul className="flex flex-wrap gap-2">
        {data.skills.map((skill, index) => (
          <li key={index} className="bg-gray-200 px-3 py-1 rounded-full">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
