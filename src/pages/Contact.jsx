import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setForm({ name: "", email: "", number: "", message: "" });
  };

  return (
    <div className="container max-w-3xl mx-auto py-5 px-10">
      <h2 className="text-5xl font-extrabold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium text-white">
            Full Name :
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
        <label htmlFor="name" className="block mb-1 font-medium text-white">
            Email :
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
        <label htmlFor="name" className="block mb-1 font-medium text-white">
            Phone Number :
          </label>
          <input
            type="tel"
            name="number"
            id="number"
            placeholder="Your Phone Number"
            value={form.number}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
        <label htmlFor="name" className="block mb-1 font-medium text-white">
            Message :
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-secondry text-white p-2 rounded "
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
