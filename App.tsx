import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { HomePage, ReviewArticlePage, ReviewsIndexPage } from './pages/ReviewPages';
import {
  AboutPage,
  ContactPage,
  EditorialPolicyPage,
  NotFoundPage,
  PrivacyPolicyPage
} from './pages/InfoPages';

const App: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-white selection:bg-indigo-100">
    <ScrollToTop />
    <Header />
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reviews" element={<ReviewsIndexPage />} />
        <Route path="/reviews/:slug" element={<ReviewArticlePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/editorial-policy" element={<EditorialPolicyPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;
