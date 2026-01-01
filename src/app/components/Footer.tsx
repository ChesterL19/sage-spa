import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                    <h2 className="text-2xl font-medium mb-4 text-white">Sage Spa</h2>
                    <p className=" text-sm">
                        Sage Spa is a luxurious spa that offers a wide range of services to help you relax and rejuvenate.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-medium mb-4 text-white uppercase tracking-wide">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#home" className=" hover:text-white transition-colors text-sm">Home</a></li>
                        <li><a href="#services" className=" hover:text-white transition-colors text-sm">Services</a></li>
                        <li><a href="#about" className=" hover:text-white transition-colors text-sm">About</a></li>
                        <li><a href="#contact" className=" hover:text-white transition-colors text-sm">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-medium mb-4 text-white uppercase tracking-wide">Contact Us</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="tel:4034567890" className="hover:text-white transition-colors">403 456 7890</a></li>
                        <li><a href="mailto:info@sagespa.com" className="hover:text-white transition-colors">info@sagespa.com</a></li>
                        <li>123 Main St, Calgary, Alberta, Canada</li>
                    </ul>
                </div>
                <div>
                    <h3  className="text-lg font-semibold mb-4 uppercase tracking-wide text-white">Hours</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Mon - Fri: 9am - 8pm</li>
                        <li>Saturday: 10am - 6pm</li>
                        <li>Sunday: 11am - 5pm</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Sage Spa. All rights reserved.
                </p>
                
                {/* Social Media Icons */}
                <div className="flex gap-4 items-center">
                    <a href="#" className=" hover:text-white transition-colors" aria-label="Facebook">
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className=" hover:text-white transition-colors" aria-label="Instagram">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className=" hover:text-white transition-colors" aria-label="TikTok">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                        </svg>
                    </a>
                </div>
                
                <div className="flex gap-4">
                    <a href="#" className=" hover:text-white transition-colors text-sm">
                        Privacy Policy
                    </a>
                    <a href="#" className=" hover:text-white transition-colors text-sm">
                        Terms of Service
                    </a>
                </div>
            </div>

        </div>

    </footer>
  );
}

