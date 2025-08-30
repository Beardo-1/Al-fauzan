// API Configuration for Strapi
const API_BASE_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337/api';

// Types for Strapi
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiData<T> {
  id: number;
  attributes: T;
}

export interface Project {
  title: string;
  slug: string;
  category: string;
  location: string;
  year: number;
  value: string;
  status: string;
  area: string;
  description: string;
  long_description: string;
  featured: boolean;
  main_image: {
    data: StrapiData<{
      url: string;
      alternativeText: string;
    }> | null;
  };
  gallery_images: {
    data: StrapiData<{
      url: string;
      alternativeText: string;
    }>[];
  };
  features: string[];
  specifications: Record<string, any>;
  timeline: Array<{
    phase: string;
    date: string;
    status: string;
  }>;
  investment_opportunities: string[];
  video_url: string;
  meta_description: string;
  meta_keywords: string;
  createdAt: string;
  updatedAt: string;
}

// API Service Class
class StrapiApiService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<StrapiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      ...options,
    };

    try {
      const response = await fetch(url, defaultOptions);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Project API Methods
  async getProjects(params?: {
    category?: string;
    status?: string;
    search?: string;
    page?: number;
    pageSize?: number;
    featured?: boolean;
  }): Promise<StrapiResponse<StrapiData<Project>[]>> {
    const searchParams = new URLSearchParams();
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          if (key === 'search') {
            searchParams.append('filters[title][$containsi]', value.toString());
          } else if (key === 'featured') {
            searchParams.append('filters[featured][$eq]', value.toString());
          } else {
            searchParams.append(`filters[${key}][$eq]`, value.toString());
          }
        }
      });
    }

    // Always include media
    searchParams.append('populate', '*');
    
    const endpoint = `/projects${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
    return this.request<StrapiData<Project>[]>(endpoint);
  }

  async getProject(slug: string): Promise<StrapiResponse<StrapiData<Project>[]>> {
    const endpoint = `/projects?filters[slug][$eq]=${slug}&populate=*`;
    return this.request<StrapiData<Project>[]>(endpoint);
  }

  async getFeaturedProjects(): Promise<StrapiResponse<StrapiData<Project>[]>> {
    const endpoint = '/projects?filters[featured][$eq]=true&populate=*';
    return this.request<StrapiData<Project>[]>(endpoint);
  }

  // Helper method to get image URL
  getImageUrl(imageData: StrapiData<{ url: string }> | null): string | null {
    if (!imageData?.attributes?.url) return null;
    return `http://localhost:1337${imageData.attributes.url}`;
  }

  // Helper method to get gallery URLs
  getGalleryUrls(galleryData: StrapiData<{ url: string }>[]): string[] {
    return galleryData.map(item => `http://localhost:1337${item.attributes.url}`);
  }
}

// Create and export API service instance
export const apiService = new StrapiApiService(API_BASE_URL);

// Export individual methods for convenience
export const {
  getProjects,
  getProject,
  getFeaturedProjects,
  getImageUrl,
  getGalleryUrls,
} = apiService;
