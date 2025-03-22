import { Routes, Route } from 'react-router';
import { Analytics } from '@vercel/analytics/react';
import Layout from './layout/layout';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Company from './pages/Company/Company';
import './App.css';


export default function App() {


  return (
    <div data-testid="app">
      <Layout>
        <Analytics/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/company/:id" element={<Company />} />
        </Routes>
      </Layout>
    </div>
  )
}


