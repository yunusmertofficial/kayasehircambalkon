"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setResponseMessage("Mesajınız başarıyla gönderildi!");
        setFormState({ name: "", email: "", message: "" });
      } else {
        //   const errorMessage = await res.text();
        setResponseMessage(`Bir hata oluştu`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setResponseMessage(`Bir hata oluştu`);
      } else {
        setResponseMessage("Bilinmeyen bir hata oluştu.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="needs-validation" noValidate>
      <div className="mb-5">
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="Adınız Soyadınız"
          required
          className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
        />
      </div>
      <div className="mb-5">
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="E-posta Adresiniz"
          required
          className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
        />
      </div>
      <div className="mb-3">
        <textarea
          name="message"
          value={formState.message}
          onChange={handleChange}
          required
          placeholder="Mesajınız"
          className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Gönderiliyor..." : "Gönder"}
      </button>
      {responseMessage && (
        <p className="mt-3 text-center text-green-500">{responseMessage}</p>
      )}
    </form>
  );
}
