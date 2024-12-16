"use client";
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FaqSummary = ({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div>
      <h3 className="sr-only">Sıkça Sorulan Sorular</h3>
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
              <span className="text-primary font-semibold">{faq.question}</span>
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
  );
};

export default FaqSummary;
