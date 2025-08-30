import { useState, useEffect, useCallback } from 'react';
import apiService from '../services/api';

export const useApi = (apiMethod, dependencies = []) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async (...args) => {
        try {
            setLoading(true);
            setError(null);
            const result = await apiMethod(...args);
            setData(result.data);
            return result;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [apiMethod]);

    useEffect(() => {
        if (dependencies.length === 0 || dependencies.every(dep => dep !== null && dep !== undefined)) {
            fetchData();
        }
    }, dependencies);

    return { data, loading, error, refetch: fetchData };
};

// Specific hooks for different data types
export const useProjects = (params = {}) => {
    return useApi(apiService.getProjects, [JSON.stringify(params)]);
};

export const useFeaturedProjects = () => {
    return useApi(apiService.getFeaturedProjects, []);
};

export const useProject = (id) => {
    return useApi(apiService.getProject, [id]);
};

export const useProperties = (params = {}) => {
    return useApi(apiService.getProperties, [JSON.stringify(params)]);
};

export const useProperty = (id) => {
    return useApi(apiService.getProperty, [id]);
};

export const useNews = (params = {}) => {
    return useApi(apiService.getNews, [JSON.stringify(params)]);
};

export const useFeaturedNews = () => {
    return useApi(apiService.getFeaturedNews, []);
};

export const useNewsArticle = (id) => {
    return useApi(apiService.getNewsArticle, [id]);
};

export const useNewsCategories = () => {
    return useApi(apiService.getNewsCategories, []);
};

export const useCareers = (params = {}) => {
    return useApi(apiService.getCareers, [JSON.stringify(params)]);
};

export const useOpenCareers = () => {
    return useApi(apiService.getOpenCareers, []);
};

export const useCareer = (id) => {
    return useApi(apiService.getCareer, [id]);
};

export const usePartners = (params = {}) => {
    return useApi(apiService.getPartners, [JSON.stringify(params)]);
};

export const useOffices = (params = {}) => {
    return useApi(apiService.getOffices, [JSON.stringify(params)]);
};

export const usePage = (slug) => {
    return useApi(apiService.getPage, [slug]);
};

export const useStats = () => {
    return useApi(apiService.getStats, []);
};
