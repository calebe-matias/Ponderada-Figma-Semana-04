// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AssetListPage from './components/AssetListPage';
import CategoryPage from './components/CategoryPage';
import FundDetailPage from './components/FundDetailPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AssetListPage />} />
        <Route path="/categoria/:slug" element={<CategoryPage />} />
        <Route path="/fund/:slug" element={<FundDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
