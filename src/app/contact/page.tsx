"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "");
    const limitedDigits = digits.slice(0, 10);
    if (limitedDigits.length <= 3) {
      return limitedDigits;
    } else if (limitedDigits.length <= 6) {
      return `${limitedDigits.slice(0, 3)}-${limitedDigits.slice(3)}`;
    } else {
      return `${limitedDigits.slice(0, 3)}-${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6)}`;
    }
  };

  const validateEmail = (emailValue: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue) {
      setEmailError("Email is required");
      return false;
    } else if (!emailRegex.test(emailValue)) {
      setEmailError("Please enter a valid email address");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  return (
    <main className="bg-stone-50 min-h-screen relative overflow-hidden">
      {/* Organic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-green-50/40 rounded-full blur-2xl"></div>
      </div>

      <Navigation />
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 z-10">
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 relative">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-emerald-200/30 rounded-full blur-2xl"></div>
            <h1 className="text-5xl lg:text-7xl font-serif text-stone-800 mb-6 mt-14 font-light relative z-10">
              Contact Us
            </h1>
            <div className="w-24 h-px bg-stone-300 mx-auto relative z-10"></div>
            <div className="absolute -bottom-12 right-1/4 w-28 h-28 bg-amber-200/40 rounded-full blur-xl"></div>
          </div>

          {/* Main Content - Two Column Layout */}
          <div className="relative">
            {/* Nature accents */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-emerald-100/50 rounded-full blur-2xl hidden lg:block"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-amber-100/40 rounded-full blur-2xl hidden lg:block"></div>

            <div className="relative bg-white/70 backdrop-blur-sm rounded-[60px] p-8 lg:p-12 shadow-xl border border-stone-200/50">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Left Column - Contact Form */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1.5 h-8 bg-stone-700"></div>
                    <label className="text-stone-700 text-xs uppercase tracking-wider font-medium">
                      Send us a Message
                    </label>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name *"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        maxLength={100}
                        required
                        className="w-full p-5 rounded-[30px] bg-white/90 text-stone-700 border border-stone-200 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300/50 transition-all placeholder:text-stone-400"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address *"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (e.target.value) {
                            validateEmail(e.target.value);
                          } else {
                            setEmailError("");
                          }
                        }}
                        onBlur={(e) => validateEmail(e.target.value)}
                        maxLength={100}
                        required
                        className={`w-full p-5 rounded-[30px] bg-white/90 text-stone-700 border transition-all placeholder:text-stone-400 focus:outline-none focus:ring-2 ${
                          emailError
                            ? "border-red-400 focus:border-red-400 focus:ring-red-300/50"
                            : "border-stone-200 focus:border-stone-400 focus:ring-stone-300/50"
                        }`}
                      />
                      {emailError && (
                        <p className="text-red-500 text-xs mt-2 ml-2">
                          {emailError}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number *"
                        value={phoneNumber}
                        onChange={(e) =>
                          setPhoneNumber(formatPhoneNumber(e.target.value))
                        }
                        maxLength={12}
                        required
                        className="w-full p-5 rounded-[30px] bg-white/90 text-stone-700 border border-stone-200 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300/50 transition-all placeholder:text-stone-400"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Message *"
                        rows={6}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        maxLength={500}
                        required
                        className="w-full p-5 rounded-[30px] bg-white/90 text-stone-700 border border-stone-200 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300/50 transition-all placeholder:text-stone-400 resize-none"
                      ></textarea>
                      <div className="text-right mt-2 text-xs text-stone-500">
                        {message.length}/500
                      </div>
                    </div>
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={
                          !fullName ||
                          !email ||
                          !phoneNumber ||
                          !message ||
                          !!emailError
                        }
                        className={`w-full px-12 py-5 rounded-[30px] text-sm uppercase tracking-wider font-medium transition-all shadow-lg ${
                          fullName &&
                          email &&
                          phoneNumber &&
                          message &&
                          !emailError
                            ? "bg-stone-800 text-white hover:bg-stone-700 hover:shadow-xl cursor-pointer"
                            : "bg-stone-300 text-stone-500 cursor-not-allowed"
                        }`}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column - Contact Information */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1.5 h-8 bg-stone-700"></div>
                    <label className="text-stone-700 text-xs uppercase tracking-wider font-medium">
                      Get in Touch
                    </label>
                  </div>

                  <div className="space-y-10">
                    <div>
                      <h3 className="text-stone-400 text-xs uppercase tracking-widest block mb-3">
                        Phone
                      </h3>
                      <a
                        href="tel:4034567890"
                        className="text-stone-800 text-lg font-light hover:text-stone-600 transition-colors"
                      >
                        403 456 7890
                      </a>
                    </div>

                    <div>
                      <h3 className="text-stone-400 text-xs uppercase tracking-widest block mb-3">
                        Email
                      </h3>
                      <a
                        href="mailto:info@sagespa.com"
                        className="text-stone-800 text-lg font-light hover:text-stone-600 transition-colors"
                      >
                        info@sagespa.com
                      </a>
                    </div>

                    <div>
                      <h3 className="text-stone-400 text-xs uppercase tracking-widest block mb-3">
                        Address
                      </h3>
                      <p className="text-stone-800 text-lg font-light leading-relaxed">
                        123 Main St
                        <br />
                        Calgary, Alberta
                        <br />
                        Canada
                      </p>
                    </div>

                    <div>
                      <h3 className="text-stone-400 text-xs uppercase tracking-widest block mb-3">
                        Hours
                      </h3>
                      <div className="space-y-2 text-stone-800 text-lg font-light">
                        <p>Mon - Fri: 9am - 8pm</p>
                        <p>Saturday: 10am - 6pm</p>
                        <p>Sunday: 11am - 5pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Home Link */}
          <div className="text-center mt-16">
            <Link
              href="/"
              className="text-stone-500 hover:text-stone-800 font-light transition-colors inline-flex items-center gap-2"
            >
              <span className="text-xl">←</span>
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
