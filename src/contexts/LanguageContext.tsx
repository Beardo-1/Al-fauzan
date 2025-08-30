import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'EN' | 'AR';
  setLanguage: (lang: 'EN' | 'AR') => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<'EN' | 'AR'>('EN');

  // Initialize language from localStorage on mount
  React.useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage === 'EN' || savedLanguage === 'AR') {
        setLanguage(savedLanguage);
      }
    } catch (error) {
      console.warn('Could not access localStorage:', error);
    }
  }, []);

  // Save language to localStorage whenever it changes
  const handleSetLanguage = (lang: 'EN' | 'AR') => {
    console.log('Language changed to:', lang);
    setLanguage(lang);
    try {
      localStorage.setItem('language', lang);
    } catch (error) {
      console.warn('Could not save to localStorage:', error);
    }
  };

  const value = {
    language,
    setLanguage: handleSetLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    console.error('useLanguage must be used within a LanguageProvider');
    // Return a default context to prevent crashes
    return {
      language: 'EN' as const,
      setLanguage: () => {
        console.warn('Language context not available');
      }
    };
  }
  return context;
};

