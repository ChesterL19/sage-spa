"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Book() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedSpecialist, setSelectedSpecialist] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

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
      specialties: ["Massage Treatment", "Hot Stone Massage"]
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Facial Specialist",
      image: "/work2.jpg",
      specialties: ["Facial Treatment", "Total Body Treatment"]
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      title: "Wellness Coordinator",
      image: "/work3.jpg",
      specialties: ["Facial Treatment", "Massage Treatment", "Total Body Treatment"]
    }
  ];
  
  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
    "5:00 PM", "6:00 PM", "7:00 PM"
  ]
  
  return (
    <main className="bg-white min-h-screen relative overflow-hidden">
      <Navigation />
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 z-10">
        <div className="relative w-full max-w-6xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-serif text-amber-900 mb-6 mt-14 font-light text-center">Book Your Appointment</h1>
          <div className="w-24 h-px bg-stone-300 mx-auto"></div>
          
          <div className="relative mt-20">
            <div className="relative bg-white/70 backdrop-blur-sm rounded-[60px] p-8 lg:p-12 shadow-xl border border-stone-200/50">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* Left Column - Service & Time Selection */}
                <div className="space-y-12">
                  <div>
                    
                  </div>
                </div>

                {/* Right Column - Contact Information */}
                <div className="space-y-8">
                  {/* Contact form will go here */}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
