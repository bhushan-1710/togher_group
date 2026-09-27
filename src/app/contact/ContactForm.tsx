'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';

interface FormData {
  contactName: string;
  organisation: string;
  email: string;
  phone: string;
  intent: 'client' | 'candidate' | 'general';
  discipline: string;
  roleRef: string;
  message: string;
}

interface FormErrors {
  contactName?: string;
  email?: string;
  phone?: string;
  discipline?: string;
  message?: string;
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialRole = searchParams?.get('role') || '';
  const initialRef = searchParams?.get('ref') || '';
  const initialType = searchParams?.get('type') || 'general';

  const [formData, setFormData] = useState<FormData>({
    contactName: '',
    organisation: '',
    email: '',
    phone: '',
    intent: (['client', 'candidate', 'general'].includes(initialType) ? initialType : 'general') as FormData['intent'],
    discipline: initialRole,
    roleRef: initialRef,
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.contactName.trim()) {
      errs.contactName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      errs.email = 'Corporate or personal Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Enter a valid email address';
    }

    if (formData.phone.trim() && !/^[+0-9\s\-()]{7,25}$/.test(formData.phone.trim())) {
      errs.phone = 'Enter a valid telephone number';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide details regarding your requirements';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setFormState('success');
    } catch (err: unknown) {
      setFormState('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'A network error occurred. Please contact us directly at info@toghergroup.com'
      );
    }
  };

  if (formState === 'success') {
    return (
      <div
        role="alert"
        className="p-8 sm:p-10 rounded-[24px] bg-[#DEEBC9] border border-[#C7E36B]/60 text-[#1B1B18]"
      >
        <div className="flex items-center gap-2.5 mb-3 text-[#2F4500]">
          <CheckCircle2 className="w-6 h-6 text-[#5C8200]" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Dispatch Receipt Confirmed
          </span>
        </div>
        <h2 className="text-2xl font-bold font-[var(--font-display)] mb-2">
          Requisition Logged.
        </h2>
        <p className="text-sm text-[#1B1B18]/80 leading-relaxed max-w-md mb-6">
          Thank you for contacting Togher Group. Your brief has been dispatched to our senior recruitment directors. Our response window is within two business hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setFormData({
              contactName: '',
              organisation: '',
              email: '',
              phone: '',
              intent: 'general',
              discipline: '',
              roleRef: '',
              message: '',
            });
            setFormState('idle');
          }}
          className="btn-pill btn-pill-dark text-xs sm:text-sm py-2.5 px-5 cursor-pointer"
        >
          Submit Another Requisition
        </button>
      </div>
    );
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      noValidate
      className="p-6 sm:p-8 rounded-[24px] bg-[#FAFBF7] border border-[#1B1B18]/10 shadow-xs space-y-5"
    >
      {formState === 'error' && (
        <div
          role="alert"
          className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2"
        >
          <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Intent Selector Pills */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#8A8E82] mb-2">
          Engagement Category
        </label>
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'client', label: 'Client / Employer Requisition' },
            { id: 'candidate', label: 'Candidate Representation' },
            { id: 'general', label: 'General Corporate Enquiry' },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, intent: cat.id as FormData['intent'] }))}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all cursor-pointer ${
                formData.intent === cat.id
                  ? 'bg-[#1B1B18] text-white shadow-xs'
                  : 'bg-white border border-[#1B1B18]/15 text-[#1B1B18]/80 hover:border-[#1B1B18]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Row 2: Name & Organisation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contactName" className="block text-xs font-bold uppercase tracking-wider text-[#1B1B18] mb-1.5">
            Full Name *
          </label>
          <input
            id="contactName"
            name="contactName"
            type="text"
            required
            placeholder="e.g. John McCarthy"
            value={formData.contactName}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border border-[#1B1B18]/15 bg-white text-sm text-[#1B1B18] placeholder:text-[#8A8E82] focus:outline-none focus:border-[#5C8200] focus:ring-1 focus:ring-[#5C8200] transition-colors"
          />
          {errors.contactName && (
            <p className="text-xs text-red-600 mt-1">{errors.contactName}</p>
          )}
        </div>

        <div>
          <label htmlFor="organisation" className="block text-xs font-bold uppercase tracking-wider text-[#1B1B18] mb-1.5">
            Organisation / Company
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            placeholder="e.g. Tier-1 Main Contractor"
            value={formData.organisation}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border border-[#1B1B18]/15 bg-white text-sm text-[#1B1B18] placeholder:text-[#8A8E82] focus:outline-none focus:border-[#5C8200] focus:ring-1 focus:ring-[#5C8200] transition-colors"
          />
        </div>
      </div>

      {/* Row 3: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#1B1B18] mb-1.5">
            Direct Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="name@company.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border border-[#1B1B18]/15 bg-white text-sm text-[#1B1B18] placeholder:text-[#8A8E82] focus:outline-none focus:border-[#5C8200] focus:ring-1 focus:ring-[#5C8200] transition-colors"
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#1B1B18] mb-1.5">
            Telephone / Mobile
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+353 (0)87 ... / +44 ..."
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border border-[#1B1B18]/15 bg-white text-sm text-[#1B1B18] placeholder:text-[#8A8E82] focus:outline-none focus:border-[#5C8200] focus:ring-1 focus:ring-[#5C8200] transition-colors"
          />
          {errors.phone && (
            <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Row 4: Discipline / Requisition Reference */}
      <div>
        <label htmlFor="discipline" className="block text-xs font-bold uppercase tracking-wider text-[#1B1B18] mb-1.5">
          Role / Package Discipline
        </label>
        <input
          id="discipline"
          name="discipline"
          type="text"
          placeholder="e.g. Senior QS / Shuttering Gang / M&E Coordinator"
          value={formData.discipline}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-xl border border-[#1B1B18]/15 bg-white text-sm text-[#1B1B18] placeholder:text-[#8A8E82] focus:outline-none focus:border-[#5C8200] focus:ring-1 focus:ring-[#5C8200] transition-colors"
        />
      </div>

      {/* Row 5: Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#1B1B18] mb-1.5">
          Specification Details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="State project location, mobilisation timeline, package scope, or specific candidate qualifications..."
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-xl border border-[#1B1B18]/15 bg-white text-sm text-[#1B1B18] placeholder:text-[#8A8E82] focus:outline-none focus:border-[#5C8200] focus:ring-1 focus:ring-[#5C8200] transition-colors resize-y"
        />
        {errors.message && (
          <p className="text-xs text-red-600 mt-1">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={formState === 'loading'}
          className="btn-pill btn-pill-dark w-full sm:w-auto text-sm py-3 px-8 shadow-md"
        >
          <span>{formState === 'loading' ? 'Transmitting Requisition...' : 'Transmit Specification'}</span>
          <ArrowUpRight className="w-4 h-4 text-[#C7E36B]" />
        </button>
      </div>
    </form>
  );
}
