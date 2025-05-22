import React from "react";
import data from "../components/profile.json";

export default function () {
  return (
    <section id="profile" className="p-6 bg-white rounded-lg shadow-md my-4">
      <img
        src="/download.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full"
      />
      <h2 className="text-2xl font-bold mt-4">{data.name}</h2>
      <p className="mt-2">{data.bio}</p>
      <p className="mt-2 font-medium">Email: {data.contact.email}</p>
    </section>
  );
}
