"use client";
import React from "react";
import Image from "next/image"; // next/image import
import Container from "@/components/Container";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { serviceCategories } from "@/utils/data";

const Services = () => {
  return (
    <section className="py-16" aria-labelledby="cam-balkon-sistemleri-title">
      <Container>
        <div className="space-y-16">
          {serviceCategories.map((category, index) => (
            <AnimatedSection key={index}>
              <article
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8`}
                aria-label={category.title}
              >
                <div className="relative w-full h-80 rounded-lg shadow-md">
                  <Image
                    src={category.image}
                    alt={category.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>

                {/* Metin */}
                <div className="flex flex-col items-center text-center w-full">
                  <h4 className="text-2xl font-semibold text-foreground mb-4">
                    {category.title}
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  {category.products.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {category.products.map((product, productIndex) => (
                        <Link
                          key={productIndex}
                          href={product.href}
                          className="flex flex-col items-start text-start bg-card rounded-lg transition-all duration-300 p-6 bg-secondary text-foreground shadow-lg hover:shadow-xl hover:scale-105 transform-gpu "
                        >
                          <h5 className="text-xl">{product.title}</h5>
                          <p className="text-muted-foreground text-sm mb-4">
                            {product.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
