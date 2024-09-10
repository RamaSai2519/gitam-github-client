import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

const IndexPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;