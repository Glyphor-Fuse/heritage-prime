import { motion } from "framer-motion";
import { ArrowDown, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeritageHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#F9F9F7]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-dining.jpg"
          alt="Bright elegant dining room"
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#F9F9F7]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="font-sans text-sm font-semibold tracking-[0.2em] text-primary uppercase opacity-80">
            Est. 1924 • Reimagined 2024
          </span>
          <h1 className="font-serif text-6xl font-medium tracking-tight text-primary md:text-8xl lg:text-9xl">
            Heritage Prime
          </h1>
          <p className="mx-auto max-w-lg font-sans text-lg font-light leading-relaxed text-primary/80 md:text-xl">
            A luminous departure from the traditional. Experience the art of
            butchery in a setting of unbridled elegance.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="group h-14 rounded-none bg-primary px-8 font-sans text-base tracking-widest text-white transition-all hover:bg-primary/90"
            >
              <Calendar className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              RESERVE A TABLE
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 rounded-none border-primary/20 bg-transparent px-8 font-sans text-base tracking-widest text-primary hover:bg-primary/5"
            >
              VIEW MENU
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="h-6 w-6 animate-bounce text-primary/50" />
      </motion.div>
    </section>
  );
};

export default HeritageHero;
