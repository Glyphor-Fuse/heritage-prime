import { ArrowRight, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ReservationFooter = () => {
  return (
    <footer className="relative bg-[#1a1a1a] text-white pt-24 pb-12 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2">
            
          {/* CTA Section */}
          <div className="space-y-8">
            <h2 className="font-serif text-5xl md:text-7xl leading-none">
              A Seat at<br /> the Table.
            </h2>
            <p className="max-w-md font-sans text-lg text-white/60">
              Reservations are released on the 1st of every month at 10 AM. 
              Walk-ins are welcomed at the bar.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
                <Button className="h-14 rounded-none bg-white px-8 text-primary hover:bg-white/90">
                    BOOK A TABLE
                </Button>
                <Button variant="outline" className="h-14 rounded-none border-white/20 bg-transparent px-8 text-white hover:bg-white/10">
                    PRIVATE DINING
                </Button>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:pl-12">
            <div className="space-y-4">
                <h3 className="font-serif text-2xl text-white/90">Hours</h3>
                <ul className="space-y-2 font-sans text-sm text-white/60">
                    <li className="flex justify-between border-b border-white/10 pb-2">
                        <span>Mon - Thu</span>
                        <span>5:00 PM - 10:00 PM</span>
                    </li>
                    <li className="flex justify-between border-b border-white/10 pb-2">
                        <span>Fri - Sat</span>
                        <span>5:00 PM - 11:00 PM</span>
                    </li>
                    <li className="flex justify-between border-b border-white/10 pb-2">
                        <span>Sunday</span>
                        <span>4:00 PM - 9:00 PM</span>
                    </li>
                </ul>
            </div>

            <div className="space-y-6">
                <div className="space-y-2">
                    <h3 className="font-serif text-2xl text-white/90">Contact</h3>
                    <p className="flex items-center gap-3 text-sm text-white/60">
                        <MapPin className="h-4 w-4" />
                        1200 Highland Ave, Manhattan Beach, CA
                    </p>
                    <p className="flex items-center gap-3 text-sm text-white/60">
                        <Phone className="h-4 w-4" />
                        (310) 555-0192
                    </p>
                     <p className="flex items-center gap-3 text-sm text-white/60">
                        <Mail className="h-4 w-4" />
                        concierge@heritageprime.com
                    </p>
                </div>
                
                <div className="flex gap-4">
                    <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors">
                        <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors">
                        <Facebook className="h-5 w-5" />
                    </a>
                </div>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-sans tracking-widest uppercase">
            <p>&copy; 2024 Heritage Prime Steakhouse. All Rights Reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">Privacy</a>
                <a href="#" className="hover:text-white">Terms</a>
                <a href="#" className="hover:text-white">Credits</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default ReservationFooter;
