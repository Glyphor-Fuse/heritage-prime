import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Plus, Star, X } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";

const cuts = [
  {
    id: 1,
    name: "The Sovereign Ribeye",
    grade: "A5 Wagyu",
    weight: "16oz",
    description: "Our signature cut. Heavily marbled, sourced from Kagoshima prefecture, aged for 45 days in Himalayan salt chambers.",
    prep: "Sear-roasted over Binchotan charcoal.",
    image: "/images/cut-ribeye.jpg",
  },
  {
    id: 2,
    name: "Heritage Filet",
    grade: "USDA Prime",
    weight: "10oz",
    description: "The epitome of tenderness. Grass-fed finish provides a unique, earthy profile distinct to our heritage herds.",
    prep: "Pan-basted with truffle butter.",
    image: "/images/cut-filet.jpg",
  },
  {
    id: 3,
    name: "Porterhouse Royale",
    grade: "Dry-Aged 60 Days",
    weight: "32oz",
    description: "The best of both worlds. A massive cut designed for sharing, offering the texture of the strip and the tenderness of the filet.",
    prep: "Reverse seared and sliced tableside.",
    image: "/images/cut-porterhouse.jpg",
  },
];

export const CuratedCuts = () => {
  const [selectedCut, setSelectedCut] = useState<typeof cuts[0] | null>(null);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-serif text-5xl text-primary md:text-6xl">
              Curated Cuts
            </h2>
            <p className="mt-4 font-sans text-lg text-muted-foreground">
              Select a cut to reveal its provenance, aging process, and our chef's recommended preparation.
            </p>
          </div>
          <div className="mt-6 h-px flex-1 bg-primary/10 md:mt-0 md:ml-12" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {cuts.map((cut, index) => (
            <motion.div
              key={cut.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative cursor-pointer overflow-hidden"
              onClick={() => setSelectedCut(cut)}
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src={cut.image}
                  alt={cut.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex items-center justify-between text-white">
                  <span className="font-serif text-2xl">{cut.name}</span>
                  <Plus className="h-6 w-6" />
                </div>
                <span className="mt-2 font-sans text-sm tracking-widest text-white/80 uppercase">
                  Discover Origin
                </span>
              </div>
              <div className="mt-6 flex justify-between border-b border-primary/10 pb-4">
                <h3 className="font-serif text-2xl text-primary">{cut.name}</h3>
                <span className="font-sans text-sm font-bold text-primary/60">{cut.grade}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Sheet open={!!selectedCut} onOpenChange={() => setSelectedCut(null)}>
        <SheetContent side="right" className="w-full border-l-0 bg-[#F9F9F7] p-0 sm:max-w-xl">
          {selectedCut && (
            <div className="flex h-full flex-col overflow-y-auto">
              <div className="relative h-80 w-full shrink-0">
                <img
                    src={selectedCut.image}
                    alt={selectedCut.name}
                    className="h-full w-full object-cover"
                />
                <button 
                    onClick={() => setSelectedCut(null)}
                    className="absolute top-4 right-4 rounded-full bg-white/20 p-2 backdrop-blur-md hover:bg-white/40"
                >
                    <X className="text-white w-6 h-6" />
                </button>
              </div>
              
              <div className="flex-1 space-y-8 p-10">
                <div>
                    <h2 className="font-serif text-4xl text-primary">{selectedCut.name}</h2>
                    <p className="mt-2 font-sans text-sm font-semibold tracking-widest text-primary/50 uppercase">
                        {selectedCut.grade} • {selectedCut.weight}
                    </p>
                </div>

                <div className="space-y-6">
                    <p className="font-sans text-lg leading-relaxed text-primary/80">
                        {selectedCut.description}
                    </p>
                    
                    <div className="grid grid-cols-1 gap-6 pt-6">
                        <div className="flex items-start gap-4 rounded-none border border-primary/10 bg-white p-6">
                            <Flame className="mt-1 h-5 w-5 text-amber-600" />
                            <div>
                                <h4 className="font-serif text-lg text-primary">Preparation</h4>
                                <p className="mt-1 text-sm text-muted-foreground">{selectedCut.prep}</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4 rounded-none border border-primary/10 bg-white p-6">
                            <Star className="mt-1 h-5 w-5 text-amber-600" />
                            <div>
                                <h4 className="font-serif text-lg text-primary">Ideally Served</h4>
                                <p className="mt-1 text-sm text-muted-foreground">Medium Rare to preserve the delicate marbling structure.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8">
                     <Button className="w-full rounded-none bg-primary py-6 text-lg tracking-widest uppercase hover:bg-primary/90">
                        Reserve This Cut
                     </Button>
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default CuratedCuts;
