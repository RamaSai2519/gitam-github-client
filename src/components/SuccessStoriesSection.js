import React from 'react';
import { Spin, Alert } from 'antd';

const QuoteCard = React.memo(({ quote }) => (
    <div className="bg-white p-6 mx-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 max-w-xs">
        <p className="italic text-gray-700">"{quote.text}"</p>
        <p className="text-right font-bold text-gray-900">
            - {quote.author}, {quote.title}
        </p>
    </div>
));

const SuccessStoriesSection = ({ quotes, isLoading, error }) => {
    if (isLoading) return <Spin size="large" />;
    if (error) return <Alert message="Failed to load quotes" type="error" />;

    return (
        <div className="overflow-x-clip">
            <div className="flex animate-slide">
                {[...quotes, ...quotes].map((quote, index) => (
                    <QuoteCard key={index} quote={quote} />
                ))}
            </div>
        </div>
    );
};

export default React.memo(SuccessStoriesSection);