import React, { useCallback } from 'react';
import { Typography } from 'antd';
import { Helmet } from 'react-helmet';
import { useFetchQuotes } from '../../hooks/seFetchQuotes';
import HeroSection from '../../components/HeroSection';
import { useNavigate } from 'react-router-dom';
import FeaturesSection from '../../components/FeaturesSection';
import SuccessStoriesSection from '../../components/SuccessStoriesSection';
import CallToActionSection from '../../components/CallToActionSection';
import GitHubSection from '../../components/GitHubSection';
import { FEATURES } from '../../constants/homePageData';

const { Title } = Typography;

const HomePage = () => {
    const { quotes, isLoading, error } = useFetchQuotes();
    const navigate = useNavigate();

    const handleExploreClick = useCallback(() => {
        navigate('/resources');
    }, [navigate]);

    const handleContactClick = useCallback(() => {
        navigate('/contact');
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

            <GitHubSection />
        </div>
    );
};

export default HomePage;