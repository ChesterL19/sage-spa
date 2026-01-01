import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";
import { User, Activity, Hand, Flame, ArrowUpRight } from "lucide-react";

export default function Home() {
  const services = [
    {
      id: 1,
      name: "Facial Treatment",
      description: "Face and neck only",
      icon: User,
      bgColor: "bg-white"
    },
    {
      id: 2,
      name: "Total Body Treatment",
      description: "Arms, back, buttocks, stomach, legs",
      icon: Activity,
      bgColor: "bg-amber-50/50"
    },
    {
      id: 3,
      name: "Massage Treatment",
      description: "Full body relaxation massage",
      icon: Hand,
      bgColor: "bg-white"
    },
    {
      id: 4,
      name: "Hot Stone Massage",
      description: "Therapeutic hot stone therapy",
      icon: Flame,
      bgColor: "bg-amber-50/50"
    }
  ];
  const team = [
    {
      id: 1,
      name: "John Doe",
      title: "Lead Massage Therapist",
      description: "With over 10 years of experience, Sarah specializes in deep tissue and therapeutic massage.",
      image: "/work1.jpg"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Facial Specialist",
      description: "Sarah brings expertise in advanced skincare treatments and anti-aging techniques.",
      image: "/work2.jpg"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      title: "Wellness Coordinator",
      description: "Maria ensures every guest receives personalized care and a rejuvenating experience.",
      image: "/work3.jpg"
    }
  ];
  return (
    <main className="bg-amber-50/90 min-h-screen">
      <Navigation />
      <section className=" min-h-screen flex items-center justify-center px-4 py-20">
        <div className="relative w-full max-w-6xl">
          <div className="relative  rounded-3xl p-12 lg:p-20">
            
            {/* Main Content */}
            <div className="relative z-10 text-center">
              {/* Headline Above Image */}
              <h1 className="text-5xl lg:text-7xl font-serif text-amber-900 mb-8 leading-tight">
                Captivate and Rejuvenate
                <br />
                <span className="text-amber-800">with Sage Spa.</span>
              </h1>
              
              {/* Central Image */}
              <div className="relative w-full max-w-2xl mx-auto mb-8">
                <Image
                  src="/spa.jpg"
                  alt="spa"
                  width={800}
                  height={600}
                  className="rounded-2xl object-cover w-full h-auto"
                />
              </div>
              
              {/* Tagline Below Image */}
              <p className="text-2xl lg:text-3xl font-serif font-light text-amber-900 mb-8">
                Discover a new and revamped you.
              </p>
              
              {/* Book Now Button */}
              <Link href="/book" className="bg-amber-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-amber-800 transition-colors inline-block">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="min-h-screen flex items-center justify-center px-4 py-20 bg-white">
        <div className="relative w-full max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif text-amber-900 mb-16 text-center">
            Our Services
          </h2>
          
          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
            {services.map((service) => (
              <div key={service.id} className={`${service.bgColor} rounded-bl-3xl border border-gray-200 p-8 hover:shadow-lg transition-shadow flex flex-col w-full max-w-sm min-h-[400px]`}>
                {/* Icon Area */}
                <div className="mb-6">
                  <div className="w-16 h-16 border-2 border-gray-800 rounded-full flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-gray-800" />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold uppercase text-gray-900 mb-2">
                  {service.name}
                </h3>
                
                {/* Description */}
                <p className="text-sm uppercase text-gray-600 mb-8">
                  {service.description}
                </p>
                
                {/* Learn More Link */}
                <div className="flex justify-end mt-auto">
                  <a href="/services" className="flex items-center gap-2 text-gray-900 uppercase text-sm font-medium hover:gap-4 transition-all">
                    LEARN MORE
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="team" className="min-h-screen flex items-center justify-center px-4 py-20 bg-amber-50/90">
        <div className="relative w-full max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif text-amber-900 mb-16 text-center">
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.id} className="bg-white rounded-[100px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-80 w-full rounded-t-[100px]">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold uppercase text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-sm uppercase text-gray-600 mb-8">{member.title}</p>
                  <p className="text-sm text-gray-600 mb-8">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
