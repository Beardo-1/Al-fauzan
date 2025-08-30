import React from 'react';
import TransparentNavigation from '../components/TransparentNavigation';
import WebsiteContentManager from '../components/WebsiteContentManager';

const WebsiteContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <TransparentNavigation />
      <WebsiteContentManager />
    </div>
  );
};

export default WebsiteContent;

