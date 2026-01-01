import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function About() {
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
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Hero Section with Nature Elements */}
          <div className="text-center mb-40 relative">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-32 h-32 bg-emerald-200/30 rounded-full blur-2xl"></div>
            <h1 className="text-5xl lg:text-7xl font-serif text-amber-900 mb-6 mt-14 font-light relative z-10">
              About Sage Spa
            </h1>
            <div className="w-24 h-px bg-stone-300 mx-auto relative z-10"></div>
            <div className="absolute -bottom-10 right-1/4 w-24 h-24 bg-amber-200/40 rounded-full blur-xl"></div>
          </div>

          {/* Creative Asymmetric Image Layout */}
          <div className="relative mb-40">
            {/* Large Center Image */}
            <div className="relative h-[500px] lg:h-[600px] w-full lg:w-2/3 mx-auto rounded-[80px] overflow-hidden mb-8">
              <Image
                src="/about1.jpg"
                alt="Sage Spa"
                fill
                className="object-cover"
              />
              {/* Nature accent */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-emerald-100/50 rounded-full blur-2xl"></div>
            </div>
            
            {/* Two Smaller Images - Asymmetric */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="relative h-[350px] rounded-[60px] overflow-hidden lg:-mt-20">
                <Image
                  src="/about2.jpg"
                  alt="Sage Spa"
                  fill
                  className="object-cover"
                />
                <div className="absolute -top-4 -left-4 w-28 h-28 bg-green-100/40 rounded-full blur-xl"></div>
              </div>
              <div className="relative h-[350px] rounded-[60px] overflow-hidden lg:mt-20">
                <Image
                  src="/about3.jpg"
                  alt="Sage Spa"
                  fill
                  className="object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-100/40 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Story Section with Nature Accent */}
          <div className="max-w-5xl mx-auto mb-40 relative">
            <div className="absolute -left-20 top-0 w-1 h-full bg-gradient-to-b from-emerald-200 via-emerald-400 to-transparent hidden lg:block"></div>
            <div className="flex items-center gap-3 mb-12">
              <div className="w-1.5 h-20 bg-emerald-600"></div>
              <h2 className="text-4xl lg:text-6xl font-serif text-stone-800 font-light">
                Our Story
              </h2>
            </div>
            <div className="ml-6 space-y-8">
              <p className="text-stone-700 leading-relaxed text-lg lg:text-xl font-light">
                Welcome to Sage Spa, where tranquility meets transformation. Nestled in the heart of Calgary, we are dedicated to providing you with an unparalleled wellness experience that nurtures both body and soul.
              </p>
              <p className="text-stone-700 leading-relaxed text-lg lg:text-xl font-light">
                Our team of skilled therapists combines ancient healing traditions with modern techniques to create personalized treatments that restore balance, rejuvenate your spirit, and leave you feeling refreshed and renewed.
              </p>
              <p className="text-stone-700 leading-relaxed text-lg lg:text-xl font-light">
                Inspired by the natural world around us, every treatment room is designed to bring the outdoors in, with organic textures, natural light, and calming earth tones that create a sanctuary for your wellness journey.
              </p>
            </div>
            {/* Organic shape accent */}
            <div className="absolute -right-16 top-1/2 w-48 h-48 bg-emerald-100/30 rounded-full blur-3xl hidden lg:block"></div>
          </div>

          {/* Mission Section - Centered with Nature Elements */}
          <div className="max-w-4xl mx-auto mb-40 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-100/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-4xl lg:text-6xl font-serif text-stone-800 font-light mb-12">
                Our Mission
              </h2>
              <p className="text-stone-700 leading-relaxed text-xl lg:text-2xl font-light mb-8">
                At Sage Spa, we believe that self-care is not a luxury—it&apos;s a necessity. Every visit is designed to be a sanctuary where you can escape the stresses of daily life and reconnect with your inner peace.
              </p>
              <p className="text-stone-700 leading-relaxed text-lg font-light">
                We draw inspiration from nature&apos;s healing power, using only the purest botanical ingredients and time-honored techniques that honor both your body and the earth.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-100/30 rounded-full blur-2xl"></div>
          </div>

          {/* Values Section - Creative Layout */}
          <div className="mb-40">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-serif text-stone-800 font-light mb-4">
                Our Values
              </h2>
              <div className="w-32 h-px bg-stone-300 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 ">
              <div className="relative text-center p-8 rounded-[40px] bg-white/50 backdrop-blur-sm border border-stone-300 shadow-lg">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-emerald-500/80 rounded-full blur-md"></div>
                <h3 className="text-3xl lg:text-4xl font-serif text-stone-800 font-light mb-6 mt-4">Natural</h3>
                <div className="w-16 h-0.5 bg-emerald-400 mx-auto mb-6"></div>
                <p className="text-stone-600 font-light leading-relaxed text-base lg:text-lg">
                  We use only the finest natural and organic products in all our treatments, honoring the earth&apos;s gifts.
                </p>
              </div>
              
              <div className="relative text-center p-8 rounded-[40px] bg-white/50 backdrop-blur-sm border border-stone-300 shadow-lg">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-amber-500/90 rounded-full blur-md"></div>
                <h3 className="text-3xl lg:text-4xl font-serif text-stone-800 font-light mb-6 mt-4">Holistic</h3>
                <div className="w-16 h-0.5 bg-amber-400 mx-auto mb-6"></div>
                <p className="text-stone-600 font-light leading-relaxed text-base lg:text-lg">
                  Our approach addresses your complete well-being—body, mind, and spirit—as interconnected elements.
                </p>
              </div>
              
              <div className="relative text-center p-8 rounded-[40px] bg-white/50 backdrop-blur-sm border border-stone-300 shadow-lg">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-red-600/90 rounded-full blur-md"></div>
                <h3 className="text-3xl lg:text-4xl font-serif text-stone-800 font-light mb-6 mt-4">Caring</h3>
                <div className="w-16 h-0.5 bg-red-400 mx-auto mb-6"></div>
                <p className="text-stone-600 font-light leading-relaxed text-base lg:text-lg">
                  Every guest receives personalized attention and care tailored to their unique needs and journey.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="max-w-5xl mx-auto mb-32 relative">
            <div className="absolute -left-10 top-1/4 w-36 h-36 bg-emerald-100/40 rounded-full blur-2xl"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-16 bg-stone-700"></div>
                  <h2 className="text-4xl lg:text-5xl font-serif text-stone-800 font-light">
                    Our Philosophy
                  </h2>
                </div>
                <p className="text-stone-700 leading-relaxed text-lg font-light ml-4">
                  We believe wellness is a journey, not a destination. Each treatment is thoughtfully crafted to honor your body&apos;s natural rhythms and restore harmony within.
                </p>
                <p className="text-stone-700 leading-relaxed text-lg font-light ml-4">
                  Like the sage plant that gives us our name, we aim to bring wisdom, clarity, and healing to every moment you spend with us.
                </p>
              </div>
              <div className="relative h-[400px] rounded-[60px] overflow-hidden">
                <Image
                  src="/about1.jpg"
                  alt="Sage Spa Philosophy"
                  fill
                  className="object-cover"
                />
                
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-emerald-100/50 rounded-full blur-2xl"></div>
              </div>
            </div>
            <div className="absolute -right-16 bottom-0 w-48 h-48 bg-amber-100/30 rounded-full blur-3xl hidden lg:block"></div>
          </div>


        </div>
      </section>
      <Footer />
    </main>
  );
}

