import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl rounded-3xl mt-4 z-50">
      <div className="text-gray-700 px-6 py-4 flex justify-between items-center bg-white/50 backdrop-blur-3xl rounded-3xl shadow-lg border border-gray-200/50">
        <div className="">
          <h1 className="text-2xl text-amber-900 italic  ">Sage Spa</h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="hover:text-amber-900 font-medium transition-colors text-sm uppercase tracking-wide"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="hover:text-amber-900 font-medium transition-colors text-sm uppercase tracking-wide"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="hover:text-amber-900 font-medium transition-colors text-sm uppercase tracking-wide"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-amber-900 font-medium transition-colors text-sm uppercase tracking-wide"
          >
            Contact
          </Link>
          <Link
            href="/book"
            className="bg-amber-900 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-amber-800 transition-colors text-sm uppercase tracking-wide"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
