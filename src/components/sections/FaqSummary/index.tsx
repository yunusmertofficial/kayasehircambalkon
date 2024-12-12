"use client";
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";
import Container from "@/components/Container";

const FaqSummary = () => {
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

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <AnimatedSection>
      <section className="py-16" aria-labelledby="faq-heading">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 items-start">
            {/* Sol Sütun (Başlık ve Açıklama) */}
            <header>
              <h1
                id="faq-heading"
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              >
                Balkonlarınızı Dönüştürün <br className="hidden lg:block" />
                <span className="text-blue-600">Kayaşehir Cam Balkon</span>{" "}
                Sistemleri
              </h1>
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

            {/* Sağ Sütun (Sıkça Sorulan Sorular) */}
            <div>
              <h2 className="sr-only">Sıkça Sorulan Sorular</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-card p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    <button
                      className="flex gap-2 items-center w-full text-left"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={openIndex === index}
                      aria-controls={`faq-content-${index}`}
                    >
                      {openIndex === index ? (
                        <FiMinus className="text-primary hover:text-secondary-foreground transition" />
                      ) : (
                        <FiPlus className="text-primary hover:text-secondary-foreground transition" />
                      )}
                      <span className="text-primary font-semibold">
                        {faq.question}
                      </span>
                    </button>
                    {openIndex === index && (
                      <p
                        id={`faq-content-${index}`}
                        className="text-muted-foreground mt-4 text-sm md:text-base"
                      >
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </AnimatedSection>
  );
};

export default FaqSummary;
