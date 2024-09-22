import React, { useCallback } from 'react';
import { Typography } from 'antd';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import ResourcesPage from '../ResourcesPage';
import ProjectPage from '../ProjectPage';
import TeamPage from '../TeamPage';
import { useFetchQuotes } from 'hooks/useFetchQuotes';
import HeroSection from '../../components/HeroSection';
import FeaturesSection from '../../components/FeaturesSection';
import SuccessStoriesSection from '../../components/SuccessStoriesSection';
import CallToActionSection from '../../components/CallToActionSection';
import GitHubSection from '../../components/GitHubSection';
import { FEATURES } from '../../constants/homePageData';

const { Title } = Typography;

const HomePage = () => {
    const { quotes, isLoading, error } = useFetchQuotes();
    const navigate = useNavigate();  // Initialize useNavigate hook

    const handleExploreClick = useCallback(() => {
        // Navigate to the resources page
        navigate('/resources');
        
        // Optionally, you could also scroll to a specific section
        // window.scrollTo({ top: document.getElementById('resources-section').offsetTop, behavior: 'smooth' });
        
        // Or trigger an analytics event
        // analytics.track('Explore Resources Clicked');
    }, [navigate]);

    const handleContactClick = useCallback(() => {
        // Navigate to the contact page
        navigate('/contact');
        
        // Alternatively, you could open a modal
        // setIsContactModalOpen(true);
        
        // Or scroll to a contact form on the same page
        // document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
        
        // Or trigger an analytics event
        // analytics.track('Contact Button Clicked');
    }, [navigate]);

    return (
        <div className="bg-gray-100 min-h-screen w-full">
            <Helmet>
                <title>GitHub Community Club - Home</title>
                <meta name="description" content="Join GitHub Community Club to foster growth, collaboration, and innovation through open-source projects and community engagement." />
            </Helmet>

            <HeroSection onExploreClick={handleExploreClick} />

            <section aria-label="Features" className="p-8">
                <Title level={2} className="text-center mb-8">What We Do</Title>
                <FeaturesSection features={FEATURES} />
            </section>

            <section aria-label="Success Stories" className="bg-white p-8">
                <Title level={2} className="text-center mb-8">Success Stories</Title>
                <SuccessStoriesSection 
                    quotes={quotes} 
                    isLoading={isLoading} 
                    error={error} 
                />
            </section>

            <CallToActionSection onContactClick={handleContactClick} />

            <ResourcesPage />
            <ProjectPage />
            <TeamPage />

            <GitHubSection />
        </div>
    );
};

export default React.memo(HomePage);