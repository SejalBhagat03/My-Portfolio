import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send, Phone } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: "Sending Message...",
      html: "Please wait while we send your message",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const formSubmitUrl = "https://formsubmit.co/sejalbhagat0308@gmail.com";

      const submitData = new FormData();
      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("message", formData.message);
      submitData.append("_subject", "New Message from Portfolio Website");
      submitData.append("_captcha", "false");
      submitData.append("_template", "table");

      await axios.post(formSubmitUrl, submitData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully!",
        icon: "success",
        confirmButtonColor: "#6366f1",
        timer: 2000,
        timerProgressBar: true,
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#6366f1",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-[5%] lg:px-[10%] mt-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h2
          data-aos="fade-down"
          className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"
        >
          Contact Me
        </h2>
        <p data-aos="fade-up" className="text-slate-400 max-w-2xl mx-auto mt-3">
         "Whether it’s tech, projects, or learning — I'm here to connect!"</p>
      </div>

      {/* Contact Card */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Left - Contact Info */}
        <div
          className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-lg"
          data-aos="fade-right"
        >
          <h3 className="text-2xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent mb-4">
            Get in Touch
          </h3>
          
          <p className="text-gray-400 mb-6">
            I'd love to connect! You can reach me directly using the following:
          </p>

          {/* Contact Items */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <User className="w-6 h-6 text-[#6366f1]" />
              <span className="text-gray-300 text-sm">Sejal Bhagat</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-[#6366f1]" />
              <span className="text-gray-300 text-sm">
                sejalbhagat0308@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-[#6366f1]" />
              <span className="text-gray-300 text-sm">+91 9022644273</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 pt-4 border-t border-white/10">
            <SocialLinks />
          </div>
        </div>

        {/* Right - Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-lg space-y-6"
          data-aos="fade-left"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Send a Message
          </h3>

          {/* Name */}
          <div className="relative group">
            <User className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#6366f1]/40 outline-none"
            />
          </div>

          {/* Email */}
          <div className="relative group">
            <Mail className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#6366f1]/40 outline-none"
            />
          </div>

          {/* Message */}
          <div className="relative group">
            <MessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 text-white placeholder-gray-500 h-32 resize-none focus:ring-2 focus:ring-[#6366f1]/40 outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all disabled:opacity-50"
          >
            <Send className="w-5 h-5" />
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
