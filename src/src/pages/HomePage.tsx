
import Hero from '@/components/wzai/Hero';
import Timeline from '@/components/wzai/Timeline';
import BenefitsCompare from '@/components/wzai/BenefitsCompare';
import LogoCarousel from '@/components/wzai/LogoCarousel';
import Plans from '@/components/wzai/Plans';
import FinalCTA from '@/components/wzai/FinalCTA';
import FAQ from '@/components/wzai/FAQ';
import Footer from '@/components/wzai/Footer';

export default function HomePage() {
  return (
    <main className="w-full bg-[#0A0A0A] pt-20">
      <Hero />
      <Timeline />
      <BenefitsCompare />
      <LogoCarousel />
      <Plans />
      <FinalCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
