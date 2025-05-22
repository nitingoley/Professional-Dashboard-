import React from "react";
import data from "../components/profile.json";
export default function Academics() {
  return (
    <section id="academics" className="p-6 bg-white rounded-lg shadow-md my-4">
      <h2 className="text-2xl font-semibold mb-4">Academics / Experience</h2>
      {data.education.map((edu, index) => (
        <div key={index} className="mb-2">
          <h3 className="font-bold">{edu.degree}</h3>
          <p>
            {edu.institution} – {edu.year}
          </p>
        </div>
      ))}
    </section>
  );
}
