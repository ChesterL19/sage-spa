"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useState } from "react";
import { Check } from "lucide-react";
import Image from "next/image";

export default function Book() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedSpecialist, setSelectedSpecialist] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateEmail = (emailValue: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue && !emailRegex.test(emailValue)) {
      setEmailError("Please enter a valid email address");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, "");
    // Limit to 10 digits
    const limitedDigits = digits.slice(0, 10);
    // added dashes to the phone number
    if (limitedDigits.length <= 3) {
      return limitedDigits;
    } else if (limitedDigits.length <= 6) {
      return `${limitedDigits.slice(0, 3)}-${limitedDigits.slice(3)}`;
    } else {
      return `${limitedDigits.slice(0, 3)}-${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6)}`;
    }
  };

  const handleSubmit = async () => {
    setSubmitError("");
    setSubmitSuccess(false);
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: selectedService,
          specialist: selectedSpecialist,
          date: selectedDate,
          time: selectedTime,
          fullName,
          phoneNumber,
          email,
          specialRequests,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setSubmitSuccess(true);
      } else {
        setSubmitError(data.error || "Something went wrong");
      }
    } catch {
      setSubmitError("Failed to submit booking");
    } finally {
      setIsSubmitting(false);
    }
  };
  const services = [
    { name: "Facial Treatment", duration: "60 minutes", price: "$120" },
    { name: "Total Body Treatment", duration: "90 minutes", price: "$180" },
    { name: "Massage Treatment", duration: "60 minutes", price: "$100" },
    { name: "Hot Stone Massage", duration: "90 minutes", price: "$150" },
  ];

  const specialists = [
    {
      id: 1,
      name: "John Doe",
      title: "Lead Massage Therapist",
      image: "/work1.jpg",
      specialties: ["Massage Treatment", "Hot Stone Massage"],
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Facial Specialist",
      image: "/work2.jpg",
      specialties: ["Facial Treatment", "Total Body Treatment"],
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      title: "Wellness Coordinator",
      image: "/work3.jpg",
      specialties: [
        "Facial Treatment",
        "Massage Treatment",
        "Total Body Treatment",
      ],
    },
  ];

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
  ];

  return (
    <main className="bg-white min-h-screen relative overflow-hidden">
      <Navigation />
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 z-10">
        <div className="relative w-full max-w-6xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-serif text-amber-900 mb-6 mt-14 font-light text-center">
            Book Your Appointment
          </h1>
          <div className="w-24 h-px bg-stone-300 mx-auto"></div>

          <div className="relative mt-20">
            <div className="relative bg-white/70 backdrop-blur-sm rounded-[60px] p-8 lg:p-12 shadow-xl border border-stone-200/50">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* Service & Time Selection */}
                <div className="space-y-12">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-1 h-8 bg-stone-700 "></div>
                      <label className="text-stone-700 text-xs uppercase tracking-wider font-medium">
                        Select Service
                      </label>
                    </div>
                    <div className="space-y-3">
                      {services.map((service) => (
                        <button
                          key={service.name}
                          type="button"
                          onClick={() => {
                            setSelectedService(service.name);
                            setSelectedSpecialist("");
                          }}
                          className={`w-full p-5 rounded-[30px] text-left transition-all border ${
                            selectedService === service.name
                              ? "bg-stone-800 text-white border-stone-800 shadow-lg"
                              : "bg-white/90 text-stone-700 border-stone-200 hover:border-stone-400 hover:shadow-md"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-light text-base">
                                {service.name}
                              </div>
                              <div
                                className={`text-xs mt-1 ${selectedService === service.name ? "text-stone-300" : "text-stone-500"}`}
                              >
                                {service.duration}{" "}
                                <span className="w-px h-3 bg-stone-400  inline-block mx-2 "></span>{" "}
                                {service.price}
                              </div>
                            </div>
                            {selectedService === service.name && (
                              <div className="w-5 h-5 bg-emerald-400/80 rounded-full shadow-lg flex items-center justify-center">
                                <Check className=" text-white w-4 h-4 " />
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  {selectedService && (
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-1 h-8 bg-stone-700 "></div>
                        <label className="text-stone-700 text-xs uppercase tracking-wider font-medium">
                          Select Specialist
                        </label>
                      </div>
                      <div className="space-y-3">
                        {specialists
                          .filter((spec) =>
                            spec.specialties.includes(selectedService),
                          )
                          .map((specialist) => (
                            <button
                              key={specialist.id}
                              type="button"
                              onClick={() =>
                                setSelectedSpecialist(specialist.name)
                              }
                              className={`w-full p-5 rounded-[30px] text-left transition-all border ${
                                selectedSpecialist === specialist.name
                                  ? "bg-stone-800 text-white border-stone-800 shadow-lg"
                                  : "bg-white/90 text-stone-700 border-stone-200 hover:border-stone-400 hover:shadow-md"
                              }`}
                            >
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-stone-200 relative">
                                  <Image
                                    src={specialist.image}
                                    alt={specialist.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="flex-1">
                                  <div className="font-light text-base">
                                    {specialist.name}
                                  </div>
                                  <div
                                    className={`text-xs mt-1 ${selectedSpecialist === specialist.name ? "text-stone-300" : "text-stone-500"}`}
                                  >
                                    {specialist.title}
                                  </div>
                                </div>
                              </div>
                              {selectedSpecialist === specialist.name && (
                                <div className="w-5 h-5 bg-emerald-400 rounded-full flex items-center justify-center shrink-0">
                                  <Check className="text-white w-4 h-4" />
                                </div>
                              )}
                            </button>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* Date Selection */}
                  {selectedSpecialist && (
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-1 h-8 bg-stone-700"></div>
                        <label className="text-stone-700 text-xs uppercase tracking-wider font-medium">
                          Select Date
                        </label>
                      </div>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full p-5 rounded-[30px] bg-white/90 text-stone-700 border border-stone-200 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300/50 transition-all"
                      />
                    </div>
                  )}

                  {/* Time Selection */}
                  {selectedDate && (
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-1 h-8 bg-stone-700"></div>
                        <label className="text-stone-700 text-xs uppercase tracking-wider font-medium">
                          Select Time
                        </label>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`p-4 rounded-[20px] text-sm transition-all border ${
                              selectedTime === time
                                ? "bg-stone-800 text-white border-stone-800 shadow-lg"
                                : "bg-white/90 text-stone-700 border-stone-200 hover:border-stone-400 hover:shadow-md"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-1 h-8 bg-stone-700"></div>
                      <label className="text-stone-700 text-xs uppercase tracking-wider font-medium">
                        Your Information
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
                        <textarea
                          placeholder="Special Requests (Optional)"
                          rows={4}
                          maxLength={350}
                          value={specialRequests}
                          onChange={(e) => setSpecialRequests(e.target.value)}
                          className="w-full p-5 rounded-[30px] bg-white/90 text-stone-700 border border-stone-200 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300/50 transition-all placeholder:text-stone-400 resize-none"
                        ></textarea>
                        <div className="text-right mt-2 text-xs text-stone-500">
                          {specialRequests.length}/350
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-12 flex justify-center">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={
                    !selectedService ||
                    !selectedSpecialist ||
                    !selectedDate ||
                    !selectedTime ||
                    !fullName ||
                    !phoneNumber ||
                    !email ||
                    !!emailError ||
                    isSubmitting
                  }
                  className={`px-12 py-5 rounded-[30px] text-sm uppercase tracking-wider font-medium transition-all shadow-lg ${
                    selectedService &&
                    selectedSpecialist &&
                    selectedDate &&
                    selectedTime &&
                    fullName &&
                    phoneNumber &&
                    email &&
                    !emailError &&
                    !isSubmitting
                      ? "bg-stone-800 text-white hover:bg-stone-700 hover:shadow-xl cursor-pointer"
                      : "bg-stone-300 text-stone-500 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Confirm Booking"}
                </button>
                {submitSuccess && (
                  <div className="mt-4 text-center text-green-600">
                    Booking confirmed!
                  </div>
                )}
                {submitError && (
                  <div className="mt-4 text-center text-red-600">
                    {submitError}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
