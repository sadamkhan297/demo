import CommitmentSection from '@/components/CommitmentSection';
import ConstructionSection from '@/components/ConstructionSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import PartnerLogos from '@/components/PartnerLogos';
import SafetyCompliance from '@/components/SafetyCompliance';
import TeamSlider from '@/components/TeamSlider';
import WhyBuildWithUs from '@/components/WhyBuildWithUs';

const page = () => {
  return (
    <>
      <HeroSection />
      <ConstructionSection />
      <PartnerLogos />
      <CommitmentSection />
      <WhyBuildWithUs />
      <SafetyCompliance />
      <TeamSlider />
      <Footer />
    </>
  );
};

export default page;
