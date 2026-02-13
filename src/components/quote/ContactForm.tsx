"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import FormStatusModal from "@/components/common/FormStatusModal";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [statusOpen, setStatusOpen] = useState(false);
  const [statusType, setStatusType] = useState<"success" | "error">("success");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          subject: "Website contact form",
          context: "Contact page form",
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setFormData({ name: "", email: "", message: "" });
      setStatusType("success");
      setStatusMessage("Your message has been sent. We’ll reply as soon as we can.");
      setStatusOpen(true);
    } catch (err) {
      console.error(err);
      setSubmitError("Something went wrong. Please try again.");
      setStatusType("error");
      setStatusMessage("We couldn’t send your message. Please try again in a moment.");
      setStatusOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <FormStatusModal
        open={statusOpen}
        type={statusType}
        title={statusType === "success" ? "Message sent" : "Something went wrong"}
        message={statusMessage}
        onClose={() => setStatusOpen(false)}
      />
      <section id="contact-form" className="py-16 lg:py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className=" rounded-2xl  p-6 md:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 md:p-8 shadow-md"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-heading mb-3">
                Send Us a Message
              </h2>
              <p className="text-sm md:text-base text-gray mb-6 leading-relaxed">
                Use this form to request a quote, ask a question, or get more
                information about our services.
              </p>
              {submitError && (
                <p className="mb-4 text-sm text-error">{submitError}</p>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-bg transition-colors ${
                      errors.name ? "border-error" : "border-input"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-error">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-bg transition-colors ${
                      errors.email ? "border-error" : "border-input"
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-error">{errors.email}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-bg transition-colors resize-none ${
                      errors.message ? "border-error" : "border-input"
                    }`}
                    placeholder="Your message"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-error">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.97, y: 0 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-dark-hover text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </motion.button>
              </form>
            </motion.div>

            {/* Right Column: Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-start"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-heading mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-heading mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:info@vacei.com"
                      className="text-sm md:text-base text-gray hover:text-purple-bg transition-colors"
                    >
                      info@vacei.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-heading mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+35677142418"
                      className="text-sm md:text-base text-gray hover:text-purple-bg transition-colors"
                    >
                      +356 77142418
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-heading mb-1">
                      Address
                    </p>
                    <p className="text-sm md:text-base text-gray">
                      Triq San Giljan, San Gwann SGN 2801, Malta
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-auto">
                <p className="text-base md:text-lg font-semibold text-heading mb-4">
                  Prefer to talk?
                </p>
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.97, y: 0 }}
                  className="bg-purple-bg hover:bg-purple-500 text-white font-semibold py-4 px-6 rounded-full transition-colors flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                >
                  <span>Book a free 15-minute call</span>
                  <PhoneCall className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactForm;
