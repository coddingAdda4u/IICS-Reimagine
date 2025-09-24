import React, { useState } from "react";

function Questions() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", location: "", message: "" })
  const [status, setStatus] = useState({ type: "idle", message: "" })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const validate = () => {
    if (!form.name.trim()) return { ok: false, message: "Please enter your name" }
    if (!/^\+?[0-9\s-]{7,15}$/.test(form.phone.trim())) return { ok: false, message: "Enter a valid phone number" }
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) return { ok: false, message: "Enter a valid email" }
    if (!form.message.trim()) return { ok: false, message: "Please type your question" }
    return { ok: true }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const v = validate()
    if (!v.ok) {
      setStatus({ type: "error", message: v.message })
      return
    }
    setStatus({ type: "loading", message: "Sending..." })
    try {
      await new Promise((r) => setTimeout(r, 800))
      setStatus({ type: "success", message: "Thanks! We will contact you soon." })
      setForm({ name: "", phone: "", email: "", location: "", message: "" })
    } catch (err) {
      setStatus({ type: "error", message: "Something went wrong. Please try again." })
    }
  }
  return (
    <div className="cover bg-background">
      <h2 className="heading-1 text-center text-primary">
        Have a Question
      </h2>
      <form
        action="#"
        className="max-w-3xl mx-auto p-6 flex flex-col md:flex-row gap-6"
        onSubmit={onSubmit}
      >
        <div className="flex-1 space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 font-medium text-primary">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              autoComplete="name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-1 font-medium text-primary">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              autoComplete="tel"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium text-primary">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              autoComplete="email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="location" className="mb-1 font-medium text-primary">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Your Location"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              autoComplete="address-level2"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex flex-col h-full">
            <label htmlFor="message" className="mb-1 font-medium text-primary">
              Your Question
            </label>
            <textarea
              name="message"
              id="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type your question here..."
              className="border border-gray-300 rounded-md px-3 py-2 min-h-[215px] max-h-[215px] focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          {status.type !== "idle" && (
            <div
              className={`mt-2 text-sm ${status.type === "error"
                  ? "text-red-600"
                  : status.type === "success"
                    ? "text-green-600"
                    : "text-gray-600"
                }`}
            >
              {status.message}
            </div>
          )}
          <button
            type="submit"
            className="mt-4 bg-primary text-white font-semibold py-2 px-6 rounded-md shadow hover:bg-blue-800 cursor-pointer transition"
            disabled={status.type === "loading"}
          >
            {status.type === "loading" ? "Sending..." : "Submit"}
          </button>
          
        </div>
      </form>
    </div>
  );
}

export default Questions;
