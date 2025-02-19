'use client';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from '../components/header';
import CustomCursor from '../components/customCursor';
import HomePage from '../components/homePage';

export default function Home() {
  return (
    <Router>
      <CustomCursor />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
