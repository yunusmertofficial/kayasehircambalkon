import AnimatedSection from "@/components/AnimatedSection";
import Container from "@/components/Container";
import SolutionCard from "@/components/SolutionCard";
import { FiShield, FiSmile, FiUsers } from "react-icons/fi";

const WhyUsSection = () => {
  return (
    <AnimatedSection>
      <Container>
        <div className="py-16">
          <h3 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
              Neden
            </span>{" "}
            <span className="text-gray-900">Kayaşehir Cam Balkon?</span>
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            <SolutionCard
              title="Uzman Ekip"
              description="Deneyimli ve alanında uzman kadromuz ile projelerinizi profesyonelce planlıyor, uyguluyor ve destek sağlıyoruz."
              icon={<FiUsers />}
            />
            <SolutionCard
              title="Kaliteli Malzemeler"
              description="Dayanıklı ve uzun ömürlü malzemeler kullanarak estetik, güvenli ve yalıtım açısından üstün özelliklere sahip cam balkonlar üretiyoruz."
              icon={<FiShield />}
            />
            <SolutionCard
              title="Müşteri Memnuniyeti"
              description="İhtiyaçlarınızı dinliyor, size en uygun çözümleri sunuyor ve satış sonrası da yanınızda olarak %100 müşteri memnuniyetini hedefliyoruz."
              icon={<FiSmile />}
            />
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
};

export default WhyUsSection;
