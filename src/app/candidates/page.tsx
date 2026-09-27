import type { Metadata } from 'next';
import CandidatesClient from './CandidatesClient';

export const metadata: Metadata = {
  title: 'For Candidates | Construction Careers & Site Mobility | Togher Group',
  description:
    'Permanent and contract opportunities for construction and engineering management professionals, site engineers, and skilled trades across Ireland, UK, Europe, USA and Australia.',
};

export default function CandidatesPage() {
  return <CandidatesClient />;
}
