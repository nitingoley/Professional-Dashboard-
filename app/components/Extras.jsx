import React from "react";
import data from "../components/profile.json";

export default function Extras() {
  return (
    <div id="extras" className="p-6 bg-white rounded-lg shadow-md my-4">
      <h2 className="text-xl font-semibold mb-4">Certifications & More</h2>
      <ul className="list-disc pl-6">
        {data.certifications.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </div>
  );
}
