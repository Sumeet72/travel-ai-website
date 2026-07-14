import { useState } from "react";
import { sendEmail } from "../services/emailService";
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await sendEmail(form);

    alert("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {
    console.log(error);

    alert("Failed to send message.");
  }
};

  return (
    <div className="min-h-screen bg-slate-100 py-16">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-center mb-3">
          Contact VoyageAI
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Have questions, suggestions, or travel ideas? We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}

          <div>

            <h2 className="text-2xl font-bold mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="font-semibold text-lg">📧 Email</h3>
                <p className="text-gray-600">
                  VoyageHelp7@gmail.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">🌍 Location</h3>
                <p className="text-gray-600">
                  India
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">✈ About VoyageAI</h3>
                <p className="text-gray-600 leading-7">
                  VoyageAI is an AI-powered travel planning platform that helps
                  travelers discover destinations, generate personalized
                  itineraries, and plan memorable journeys with ease.
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />

            <textarea
              name="message"
              placeholder="Write your message here..."
              value={form.message}
              onChange={handleChange}
              rows="6"
              className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-cyan-600 text-white py-4 rounded-xl font-semibold hover:bg-cyan-700 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}

export default Contact;