import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Services Architecture | Togher Group',
  description:
    'Construction recruitment and workforce solutions across Management Professionals, Trades & Labour, and Strategic Advisory across Ireland, the UK, Europe, USA and Australia.',
};

export default function ServicesPage() {
  return <ServicesClient />;
}
