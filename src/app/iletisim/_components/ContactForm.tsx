"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  isValid: boolean;
  message: string;
  type: "success" | "error" | null; // success, error, null (başka bir durum yok)
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    isValid: true,
    message: "",
    type: null, // Başlangıçta, herhangi bir durum yok
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Hata mesajlarını tutacak durumlar
  const [errors, setErrors] = useState<{
    name: string | null;
    email: string | null;
    message: string | null;
  }>({
    name: null,
    email: null,
    message: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));

    // Hata mesajlarını sıfırlamak için
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors: {
      name: string | null;
      email: string | null;
      message: string | null;
    } = {
      name: null,
      email: null,
      message: null,
    };

    // Ad alanı kontrolü
    if (!formState.name) {
      newErrors.name = "Ad ve soyad alanı zorunludur.";
      isValid = false;
    }

    // E-posta kontrolü
    if (!formState.email) {
      newErrors.email = "E-posta adresi zorunludur.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Geçerli bir e-posta adresi girin.";
      isValid = false;
    }

    // Mesaj alanı kontrolü
    if (!formState.message) {
      newErrors.message = "Mesaj alanı zorunludur.";
      isValid = false;
    }

    setErrors(newErrors);

    // Formun geçerli olup olmadığını döndürüyoruz
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form doğrulaması
    if (!validateForm()) {
      setFormStatus({
        isValid: false,
        message: "Lütfen tüm alanları doğru şekilde doldurun.",
        type: "error", // Hata durumu
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setFormStatus({
          isValid: true,
          message: "Mesajınız başarıyla gönderildi!",
          type: "success", // Başarı durumu
        });
        setFormState({ name: "", email: "", message: "" });
      } else {
        setFormStatus({
          isValid: false,
          message: "Bir hata oluştu.",
          type: "error", // Hata durumu
        });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setFormStatus({
          isValid: false,
          message: "Bir hata oluştu.",
          type: "error", // Hata durumu
        });
      } else {
        setFormStatus({
          isValid: false,
          message: "Bilinmeyen bir hata oluştu.",
          type: "error", // Hata durumu
        });
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
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
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
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Gönderiliyor..." : "Gönder"}
      </button>
      {formStatus.message && (
        <p
          className={`mt-3 text-center text-sm ${
            formStatus.type === "error"
              ? "text-red-500"
              : formStatus.type === "success"
              ? "text-green-500"
              : ""
          }`}
        >
          {formStatus.message}
        </p>
      )}
    </form>
  );
}
