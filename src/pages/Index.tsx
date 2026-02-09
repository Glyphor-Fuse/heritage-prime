import { HeritageHero } from "@/components/HeritageHero";
import { CuratedCuts } from "@/components/CuratedCuts";
import { CulinaryOrigin } from "@/components/CulinaryOrigin";
import { ReservationFooter } from "@/components/ReservationFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F7]">
      <HeritageHero />
      <CuratedCuts />
      <CulinaryOrigin />
      <ReservationFooter />
    </div>
  );
};

export default Index;
