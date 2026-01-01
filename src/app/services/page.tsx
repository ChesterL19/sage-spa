import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: 1,
      name: "Facial Treatment",
      description: "Face and neck only",
      image: "/facial.jpg",
      details: "A customized facial focused on cleansing, exfoliating, and hydrating the skin. Includes gentle massage techniques to improve circulation and promote relaxation. Suitable for all skin types",
      duration: "60 minutes",
      price: "Starting at $120"
    },
    {
      id: 2,
      name: "Total Body Treatment",
      description: "Arms, back, buttocks, stomach, legs",
      image: "/treatment.jpg",
      details: "A full-body treatment designed to exfoliate and deeply moisturize the skin. Helps remove dead skin cells while leaving the body feeling smooth and refreshed. Ideal for overall skin renewal.",
      duration: "90 minutes",
      price: "Starting at $180"
    },
    {
      id: 3,
      name: "Massage Treatment",
      description: "Full body relaxation massage",
      image: "/massage.jpg",
      details: "A full-body massage using light to medium pressure to relieve muscle tension. Helps reduce stress, improve circulation, and promote deep relaxation. Perfect for unwinding and restoring balance.",
      duration: "60-90 minutes",
      price: "Starting at $100"
    },
    {
      id: 4,
      name: "Hot Stone Massage",
      description: "Therapeutic hot stone therapy",
      image: "/stone.jpg",
      details: "A therapeutic massage using warm stones placed on key areas of the body. The heat helps relax muscles and release deeper tension. Promotes circulation and a deep sense of calm.",
      duration: "90 minutes",
      price: "Starting at $150"
    }
  ];

  return (
    <main className="bg-white min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-stone-900/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-600/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-lime-900/40 rounded-full blur-2xl"></div>
        </div>
      <Navigation />
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 z-10">
        <div className="relative w-full max-w-5xl mx-auto">
            <div className="text-center mb-24">
                <h1 className="text-5xl lg:text-7xl font-serif text-amber-900 mb-8 mt-14 font-light">
                    Our Services
                </h1>
                <div className="w-24 h-px bg-stone-300 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 gap-32">
                {services.map((service, index) => (
                    <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Image Section */}
                        <div className={`relative h-[450px] lg:h-[550px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                            <div className="absolute inset-0 rounded-[60px] overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className={`space-y-10 ${index % 2 === 1 ? 'lg:order-1' : ''} relative`}>
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-1.5 h-12 bg-stone-700 "></div>
                                    <h2 className="text-2xl lg:text-4xl font-serif text-stone-800 font-light">{service.name}</h2>
                                </div>
                                <p className="text-stone-600/80 leading-relaxed text-lg font-bold ml-4">{service.description}</p>
                                <p className="text-stone-700 leading-relaxed text-lg font-light ml-4 mt-1.5">{service.details}</p>

                                <div className="flex gap-12 pt-6 ml-4">
                                    <div>
                                        <span className="text-stone-500 text-xs uppercase tracking-wider block mb-2">Duration:</span>
                                        <p className="text-stone-800 text-lg">{service.duration}</p>
                                    </div>
                                    <div>
                                        <span className="text-stone-500 text-xs uppercase tracking-wider block mb-2">Price:</span>
                                        <p className="text-stone-800 text-lg">{service.price}</p>
                                    </div>
                                </div>

                                <Link href="/book" className="ml-4 bg-stone-800 text-white mt-6 px-10 py-4 rounded-full font-light hover:bg-stone-700 transition-colors tracking-wide inline-block">
                                    Book This Service
                                </Link>
                            </div>
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

