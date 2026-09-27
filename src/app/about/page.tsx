import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Togher Group | Construction & Engineering Recruitment',
  description:
    'Togher Group is an international construction recruitment consultancy led by Managing Director Steve Togher, specializing in construction and engineering recruitment across Ireland, the UK, Europe, the USA and Australia.',
};

export default function AboutPage() {
  return <AboutClient />;
}
