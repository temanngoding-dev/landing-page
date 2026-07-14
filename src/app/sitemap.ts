import { MetadataRoute } from 'next';
import { courses, learningPackages } from '@/constants';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://temanngoding.id';
    
    const coursePages = courses.map(c => ({
        url: `${baseUrl}/course/${c.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const paketPages = learningPackages.map(p => ({
        url: `${baseUrl}/paket/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/course`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...coursePages,
        {
            url: `${baseUrl}/paket`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...paketPages,
        {
            url: `${baseUrl}/jasa-dev`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];
}