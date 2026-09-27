import type { Metadata } from 'next';
import VacanciesClient from './VacanciesClient';

export const metadata: Metadata = {
  title: 'Current Vacancies & Active Site Requisitions | Togher Group',
  description:
    'Live construction and engineering vacancies across Ireland, the UK, Europe, USA and Australia. Permanent and contract opportunities for Senior QS, M&E Coordinators, Site Managers, and skilled trades.',
};

export default function VacanciesPage() {
  return <VacanciesClient />;
}
