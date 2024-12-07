"use client";
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";
import Container from "@/components/Container";

const FaqSummary = () => {
  const faqs = [
    {
      question: "Cam balkon fiyatları nasıl hesaplanır?",
      answer:
        "Cam balkon fiyatları, kullanılan malzeme ve metrekare ölçüsüne göre belirlenir. Detaylı bilgi için bizimle iletişime geçebilirsiniz.",
    },
    {
      question: "Kurulum ne kadar sürer?",
      answer: "Kurulum genellikle 1-3 iş günü içinde tamamlanır.",
    },
    {
      question: "Kış bahçesi garantisi var mı?",
      answer: "Evet, tüm hizmetlerimiz 2 yıl garantilidir.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <AnimatedSection>
      <section className="py-16" aria-label="Sıkça Sorulan Sorular">
        <Container>
          <header className="text-center mb-16">
            <h3
              id="completed-projects-title"
              className="text-4xl font-bold text-foreground"
            >
              Sıkça Sorulan Sorular
            </h3>
          </header>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-primary font-semibold">{faq.question}</h3>
                  {openIndex === index ? (
                    <FiMinus className="text-primary hover:text-secondary-foreground transition" />
                  ) : (
                    <FiPlus className="text-primary hover:text-secondary-foreground transition" />
                  )}
                </div>
                {openIndex === index && (
                  <p className="text-muted-foreground mt-4">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </AnimatedSection>
  );
};

export default FaqSummary;
