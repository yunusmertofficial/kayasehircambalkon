"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiPlus, FiMinus, FiArrowRight } from "react-icons/fi";

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
    <section className="py-16" aria-label="Sıkça Sorulan Sorular">
      <h2 className="text-3xl font-bold text-foreground text-center mb-8">
        Sıkça Sorulan Sorular
      </h2>
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
                <FiMinus className="text-primary hover:text-primary-foreground transition" />
              ) : (
                <FiPlus className="text-primary hover:text-primary-foreground transition" />
              )}
            </div>
            {openIndex === index && (
              <p className="text-muted-foreground mt-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          href="/iletisim"
          className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-primary text-primary-foreground text-lg font-medium rounded-full hover:bg-primary-foreground hover:text-primary transition-all group"
        >
          Daha Fazla Görüntüle
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default FaqSummary;
