"use client";

import Section from "./Section";
import type { JSX } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const contactInfo = [
  { icon: <Phone className="w-4 h-4" />, label: "+88 01715-779924", href: "tel:+8801715779924", color: "#10b981" },
  { icon: <Mail className="w-4 h-4" />, label: "md.asifiqbal2008@gmail.com", href: "mailto:md.asifiqbal2008@gmail.com", color: "#06b6d4" },
  { icon: <MapPin className="w-4 h-4" />, label: "Badda, Dhaka, Bangladesh", href: "#", color: "#8b5cf6" },
  { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn", href: "https://linkedin.com/in/md-asif-iqbal-652473185/", color: "#0077b5" },
  { icon: <Github className="w-4 h-4" />, label: "GitHub", href: "https://github.com/md-asif-iqbal", color: "#e8e8ef" },
];

export default function Contact(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const serviceId = "service_r7cb437";
    const templateId = "template_0123456789";
    const publicKey = "auuV7MB4LFzmg-azp";

    if (templateId === "template_0123456789") {
      const subject = `Portfolio Contact from ${name}`;
      const body = `From: ${email}\n\n${message}`;
      window.location.href = `mailto:md.asifiqbal2008@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setSubmitStatus("success");
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: "md.asifiqbal2008@gmail.com",
    };

    try {
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      if (result.status === 200) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
        setErrorMessage(`EmailJS returned status: ${result.status}`);
      }
    } catch (error: unknown) {
      setSubmitStatus("error");
      if (error && typeof error === "object" && "text" in error) {
        setErrorMessage(`EmailJS Error: ${(error as { text: string }).text}`);
      } else if (error && typeof error === "object" && "message" in error) {
        setErrorMessage(`Error: ${(error as { message: string }).message}`);
      } else {
        setErrorMessage("Failed to send message. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="Contact">
      <div className="grid gap-8 lg:grid-cols-5">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-4"
        >
          <p className="text-foreground/50 text-sm leading-relaxed mb-6">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out.
            I&#39;m always open to new collaborations.
          </p>

          {contactInfo.map((item, idx) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center gap-3 glass-card rounded-xl px-4 py-3 group"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{
                x: 4,
                borderColor: `${item.color}25`,
                boxShadow: `0 4px 20px ${item.color}10`,
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ color: item.color, backgroundColor: `${item.color}12` }}
              >
                {item.icon}
              </div>
              <span className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors truncate">
                {item.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="lg:col-span-3 glass-card rounded-2xl p-6 space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input required name="name" placeholder="Your name" className="input w-full" disabled={isSubmitting} />
            <input required type="email" name="email" placeholder="Your email" className="input w-full" disabled={isSubmitting} />
          </div>
          <textarea
            required
            name="message"
            placeholder="Your message..."
            className="input w-full min-h-[140px] py-3 resize-none"
            style={{ height: "auto" }}
            disabled={isSubmitting}
          />

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`w-full sm:w-auto rounded-xl px-8 py-3 text-sm font-semibold transition-all duration-300 ${
              isSubmitting
                ? "bg-white/5 text-foreground/30 cursor-not-allowed border border-white/5"
                : "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-cyan-500/20"
            }`}
            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>

          {/* Status */}
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl"
            >
              <p className="text-emerald-400 text-sm">Message sent successfully! I&apos;ll get back to you soon.</p>
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl"
            >
              <p className="text-red-400 text-sm">{errorMessage || "Failed to send. Please try again."}</p>
            </motion.div>
          )}
        </motion.form>
      </div>
    </Section>
  );
}


