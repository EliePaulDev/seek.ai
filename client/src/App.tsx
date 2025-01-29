import { useState } from 'react';
import { Routes, Route } from 'react-router';
import Layout from './layout/layout';
import Home from './pages/Home/Home';
import { useData } from './hooks/useData/useData';
import './App.css';


export default function App() {


  return (
    <div data-testid="app">
      <Layout>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Layout>
    </div>
  )
}


