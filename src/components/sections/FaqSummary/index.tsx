"use client";
import React from "react";
import AnimatedSection from "@/components/AnimatedSection";
import Container from "@/components/Container";
import FaqSummary from "@/components/FaqSummary";

const FaqSummarySection = () => {
  const faqs = [
    {
      question: "Kayaşehir cam balkon fiyatları nasıl belirlenir?",
      answer:
        "Cam balkon fiyatları, kullanılan malzeme kalitesi, balkonunuzun ölçüleri ve tercih ettiğiniz sistem tipine (katlanır veya ısıcamlı cam balkon) göre belirlenir. Ayrıntılı bilgi için bizimle iletişime geçin.",
    },
    {
      question: "Katlanır cam balkon montajı ne kadar sürer?",
      answer:
        "Genellikle montaj süreci, balkonunuzun büyüklüğüne bağlı olarak 1-3 iş günü arasında tamamlanır. Uzman ekibimiz hızlı ve sorunsuz kurulum sağlar.",
    },
    {
      question: "Isıcamlı cam balkon seçeneklerinde garanti sunuyor musunuz?",
      answer:
        "Evet, tüm Kayaşehir cam balkon sistemlerimizde kalite ve dayanıklılığı ön planda tutuyoruz. Bu nedenle 2 yıl garanti ile hizmet veriyoruz.",
    },
    {
      question: "Cam balkon temizliği ve bakımı nasıl yapılır?",
      answer:
        "Cam balkon sistemlerimiz, kolay temizlenebilir malzemelerden üretilmiştir. Cam yüzeyleri yumuşak bir bez ve uygun bir temizleyiciyle düzenli olarak silerek uzun ömürlü ve her zaman parlak görünmesini sağlayabilirsiniz.",
    },
    {
      question: "Kış aylarında cam balkon sistemleri ısı yalıtımı sağlar mı?",
      answer:
        "Isıcamlı cam balkon sistemlerimiz, soğuk havalarda ısı yalıtımı sağlayarak iç mekan konforunu artırır. Bu sayede kış aylarında da balkonunuzu keyifle kullanabilirsiniz.",
    },
  ];

  return (
    <AnimatedSection>
      <section className="py-16" aria-labelledby="faq-heading">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 items-start">
            {/* Sol Sütun (Başlık ve Açıklama) */}
            <header>
              <h2
                id="faq-heading"
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              >
                Balkonlarınızı Dönüştürün <br className="hidden lg:block" />
                <span className="text-blue-600">Kayaşehir Cam Balkon</span>{" "}
                Sistemleri
              </h2>
              <p className="text-muted-foreground mb-6 text-base md:text-lg">
                Kayaşehir cam balkon çözümlerimiz, estetik ve fonksiyonelliği
                bir araya getirerek yaşam alanlarınızı dönüştürmenize yardımcı
                olur. Panoramik manzaranın keyfini çıkarırken, aynı zamanda
                yalıtım, güvenlik ve konfor açısından da avantaj elde edersiniz.
              </p>
              <p className="text-muted-foreground mb-6 text-base md:text-lg">
                İster <strong>katlanır cam balkon</strong> ister{" "}
                <strong>ısıcamlı cam balkon</strong> tercih edin, uzman ekibimiz
                kurulum öncesi danışmanlık, montaj sırasında profesyonel destek
                ve satış sonrası hizmetlerle yanınızda. Kayaşehir cam balkon
                sistemleri ile evinizin değerini ve yaşam kalitenizi yükseltmek
                için bize güvenebilirsiniz.
              </p>
            </header>

            <FaqSummary faqs={faqs} />
          </div>
        </Container>
      </section>
    </AnimatedSection>
  );
};

export default FaqSummarySection;
