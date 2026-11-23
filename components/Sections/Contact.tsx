"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import SectionTitle from "../SectionTitle/SectionTitle";
import Spinner from "../Spinner/Spinner";

type Inputs = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type Status = "idle" | "success" | "error";

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

const fieldClass =
  "mt-1 w-full border-0 border-b-2 border-black/40 bg-transparent px-0 py-3 text-base placeholder:text-black/40 focus:border-accent";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    setStatus("idle");
    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are not set.");
      }
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        publicKey
      );
      setStatus("success");
      reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative bg-white py-24 sm:py-32"
    >
      <div className="page-width grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div>
          <SectionTitle id="contact-title">Contact.</SectionTitle>
          <p className="mt-6 max-w-[40ch] leading-relaxed text-black/70">
            Tell me about your project or role. I&apos;ll reply to the email
            address you enter.
          </p>
        </div>

        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-8"
        >
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={fieldClass}
              {...register("name", {
                validate: (value) =>
                  value.trim().length > 0 || "Enter your name.",
              })}
            />
            {errors.name && (
              <ErrorMessage id="name-error">{errors.name.message}</ErrorMessage>
            )}
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={fieldClass}
              {...register("email", {
                required: "Enter your email address.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                  message: "Enter a valid email address, like name@example.com.",
                },
              })}
            />
            {errors.email && (
              <ErrorMessage id="email-error">
                {errors.email.message}
              </ErrorMessage>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="text-sm font-medium">
              Phone (optional)
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={fieldClass}
              {...register("phone", {
                pattern: {
                  value: /^[0-9+()\-\s]{8,20}$/,
                  message: "Enter a phone number with 8 to 20 digits.",
                },
              })}
            />
            {errors.phone && (
              <ErrorMessage id="phone-error">
                {errors.phone.message}
              </ErrorMessage>
            )}
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`${fieldClass} resize-y leading-relaxed`}
              {...register("message", {
                validate: (value) =>
                  value.trim().length > 0 || "Enter a message.",
                maxLength: {
                  value: 1000,
                  message: "Keep your message under 1,000 characters.",
                },
              })}
            />
            {errors.message && (
              <ErrorMessage id="message-error">
                {errors.message.message}
              </ErrorMessage>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-3 bg-black px-8 py-3 text-white transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading && <Spinner />}
              {loading ? "Sending" : "Send message"}
            </button>
            <div role="status" aria-live="polite" className="text-sm">
              {status === "success" && (
                <p className="font-medium text-green-800">
                  Thank you for contacting me. Your message was sent.
                </p>
              )}
              {status === "error" && (
                <p className="font-medium text-red-700">
                  Your message didn&apos;t send. Check your connection and try
                  again.
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
