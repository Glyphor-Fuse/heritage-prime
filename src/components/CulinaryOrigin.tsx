import { motion } from "framer-motion";

export const CulinaryOrigin = () => {
  return (
    <section className="bg-[#F4F4F0] py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 aspect-[3/4] overflow-hidden"
            >
              <img
                src="/images/chef-portrait.jpg"
                alt="Chef plating a dish"
                className="h-full w-full object-cover"
              />
            </motion.div>
            {/* Decorative Offset Border */}
            <div className="absolute -bottom-6 -right-6 z-0 h-full w-full border-2 border-primary/10" />
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <span className="font-sans text-xs font-bold tracking-[0.25em] text-primary/60 uppercase">
              The Philosophy
            </span>
            <h2 className="font-serif text-5xl leading-tight text-primary md:text-6xl">
              "We honor the animal by serving it with absolute integrity."
            </h2>
            <div className="space-y-6 font-sans text-lg text-muted-foreground">
              <p>
                At Heritage Prime, the journey begins long before the kitchen. It starts in the pastures of our partner farms, where ethical husbandry and patience cultivate flavor profiles that cannot be rushed.
              </p>
              <p>
                Chef Julian Roebuck believes that a great steakhouse shouldn't hide behind darkness. We shine a light on our process, our ingredients, and our passion for the craft of butchery.
              </p>
            </div>
            
            <div className="pt-4">
                <div className="flex items-center gap-4">
                    <img 
                        src="/images/signature.png" 
                        alt="Chef Signature" 
                        className="h-16 opacity-60" 
                        // Using a placeholder graphic in prompt, or css styled text
                        style={{ display: 'none' }} // Hiding if no image
                    />
                    <div className="border-l-2 border-primary/20 pl-4">
                        <p className="font-serif text-xl text-primary">Julian Roebuck</p>
                        <p className="text-sm text-primary/50 uppercase tracking-wider">Executive Chef</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulinaryOrigin;
