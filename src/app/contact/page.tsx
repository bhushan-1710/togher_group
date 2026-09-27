import type { Metadata } from 'next';
import { Suspense } from 'react';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Togher Group | Direct Requisition & Dispatch Desks',
  description:
    'Contact Togher Group for construction recruitment, workforce requisitions, or senior appointments. Operational dispatch desks in Dublin and London.',
};

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm text-[#8A8E82]">Loading contact terminal...</div>}>
      <ContactClient />
    </Suspense>
  );
}
