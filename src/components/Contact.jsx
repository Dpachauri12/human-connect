import { useState } from "react";

const API_URL = "https://vernanbackend.ezlab.in/api/contact-us/";

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function isValid() {
    return (
      form.name.trim() &&
      validateEmail(form.email) &&
      form.phone.trim() &&
      form.message.trim()
    );
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!isValid()) {
      setSuccess("Please fill out all fields correctly before submitting.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess("✅ Thanks for reaching out! Your message has been sent successfully.");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setSuccess("⚠️ Something went wrong. Please try again later.");
      }
    } catch {
      setSuccess("⚠️ Network issue — please check your internet and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="container-ez py-16 fade-in">
      <div className="card p-8 shadow-lg bg-white/5 backdrop-blur-lg border border-white/10">
        
        <p className="text-white/80 max-w-2xl leading-relaxed mb-8">
          Have a question or a project in mind? Fill out the form below — I’d love to hear
          from you and will get back to you personally.
        </p>

        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="label text-white/90" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              className="input placeholder:text-white/40"
              placeholder="Your name"
              value={form.name}
              onChange={onChange}
            />
          </div>

          <div>
            <label className="label text-white/90" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="input placeholder:text-white/40"
              placeholder="you@example.com"
              value={form.email}
              onChange={onChange}
            />
          </div>

          <div>
            <label className="label text-white/90" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              className="input placeholder:text-white/40"
              placeholder="9876543210"
              value={form.phone}
              onChange={onChange}
            />
          </div>

          <div className="md:col-span-2">
            <label className="label text-white/90" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="input placeholder:text-white/40"
              placeholder="Write your message..."
              value={form.message}
              onChange={onChange}
            />
          </div>

          <div className="md:col-span-2 flex items-center gap-3 mt-2">
            <button
              disabled={loading}
              className={`px-6 py-2.5 rounded-md font-semibold text-white transition-all duration-300 ${
                loading
                  ? "bg-gray-500 cursor-not-allowed opacity-70"
                  : "bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-105 shadow-md hover:shadow-orange-400/30"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {!loading && (
              <button
                type="button"
                onClick={() => {
                  setForm({ name: "", email: "", phone: "", message: "" });
                  setSuccess("");
                }}
                className="px-5 py-2.5 rounded-md bg-white/10 text-white/80 border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                Reset
              </button>
            )}
          </div>

          {success && (
            <div className="md:col-span-2 mt-6 p-4 rounded-md bg-white/10 text-white/90 text-sm animate-fade-in">
              {success}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
