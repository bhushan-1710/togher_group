import type { Metadata } from 'next';
import ClientsClient from './ClientsClient';

export const metadata: Metadata = {
  title: 'For Clients | Contractor Workforce Solutions | Togher Group',
  description:
    'Construction recruitment and workforce solutions for Tier-1 and Tier-2 contractors across Ireland, the UK, Europe, the USA and Australia.',
};

export default function ClientsPage() {
  return <ClientsClient />;
}
