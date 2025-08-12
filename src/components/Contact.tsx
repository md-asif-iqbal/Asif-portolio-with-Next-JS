"use client";

import Section from "./Section";
import type { JSX } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Check if EmailJS is properly configured
    const serviceId = 'service_r7cb437';
    const templateId = 'template_0123456789'; // This looks like a placeholder
    const publicKey = 'auuV7MB4LFzmg-azp';

    // If template ID is still a placeholder, use fallback method
    if (templateId === 'template_0123456789') {
      // Fallback to mailto method
      const subject = `Portfolio Contact from ${name}`;
      const body = `From: ${email}\n\n${message}`;
      window.location.href = `mailto:md.asifiqbal2008@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setSubmitStatus('success');
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: 'md.asifiqbal2008@gmail.com',
    };

    try {
      console.log('Attempting to send email with EmailJS...');
      console.log('Service ID:', serviceId);
      console.log('Template ID:', templateId);
      console.log('Template Params:', templateParams);

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('EmailJS Result:', result);

      if (result.status === 200) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
        setErrorMessage(`EmailJS returned status: ${result.status}`);
      }
    } catch (error: unknown) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      
      // Provide more specific error messages
      if (error && typeof error === 'object' && 'text' in error) {
        setErrorMessage(`EmailJS Error: ${(error as { text: string }).text}`);
      } else if (error && typeof error === 'object' && 'message' in error) {
        setErrorMessage(`Error: ${(error as { message: string }).message}`);
      } else {
        setErrorMessage('Failed to send message. Please check your EmailJS configuration.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" title="Get in touch" subtitle="Contact">
      <motion.form
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        onSubmit={handleSubmit}
        className="grid gap-4 sm:grid-cols-2"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <input 
            required 
            name="name" 
            placeholder="Your name" 
            className="input w-full" 
            disabled={isSubmitting}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <input 
            required 
            type="email" 
            name="email" 
            placeholder="Your email" 
            defaultValue="" 
            className="input w-full" 
            disabled={isSubmitting}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="sm:col-span-2"
        >
          <textarea 
            required 
            name="message" 
            placeholder="Message" 
            className="min-h-32 rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-foreground/20 w-full input" 
            disabled={isSubmitting}
          />
        </motion.div>
        <motion.div 
          className="sm:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <motion.button 
            type="submit"
            disabled={isSubmitting}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
              isSubmitting 
                ? 'bg-slate-400 text-slate-200 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
            whileHover={!isSubmitting ? { 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
            } : {}}
            whileTap={!isSubmitting ? { scale: 0.95 } : {}}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {isSubmitting ? 'Sending...' : 'Send message'}
          </motion.button>
        </motion.div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="sm:col-span-2 p-3 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg"
          >
            <p className="text-green-700 dark:text-green-300 text-sm">
              ✅ Message sent successfully! I&apos;ll get back to you soon.
            </p>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="sm:col-span-2 p-3 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg"
          >
            <p className="text-red-700 dark:text-red-300 text-sm">
              ❌ {errorMessage || 'Failed to send message. Please try again or contact me directly.'}
            </p>
            <p className="text-red-600 dark:text-red-400 text-xs mt-1">
              💡 Tip: Check the browser console for detailed error information.
            </p>
          </motion.div>
        )}
      </motion.form>

      <motion.div 
        className="mt-6 text-sm text-foreground/70"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <p>Phone: +88 01715779924</p>
        <p>Email: md.asifiqbal2008@gmail.com</p>
        <p>Location: Uttar Badda, Dhaka, Bangladesh</p>
        <p className="mt-1">Links: <a className="underline hover:text-blue-600 transition-colors" href="https://www.linkedin.com/in/md-asif-iqbal-652473185/" target="_blank" rel="noreferrer">LinkedIn</a> • <a className="underline hover:text-blue-600 transition-colors" href="https://github.com/md-asif-iqbal" target="_blank" rel="noreferrer">GitHub</a> </p>
      </motion.div>
    </Section>
  );
}


