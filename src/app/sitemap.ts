import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.toghergroup.com';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/management-professionals`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/trades-labour`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/consultancy-investment`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/clients`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/candidates`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/vacancies`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
