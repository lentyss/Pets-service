import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import { Header } from './components/header';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Products />} />
      </Routes>
      </Layout>
    </BrowserRouter>
    );   
}
export default App;