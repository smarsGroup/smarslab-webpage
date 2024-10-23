import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles


const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const Research = lazy(() => import('./pages/Research'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const People = lazy(() => import('./pages/People'));
const Publications = lazy(() => import('./pages/Publications'));
const Datasets = lazy(() => import('./pages/Datasets'));
const News = lazy(() => import('./pages/News'));
const Career = lazy(() => import('./pages/Career'));
const CareerDetails = lazy(() => import('./pages/CareerDetails'));
const CMS = lazy(() => import('./subProjects/cms/src/App'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Routes>
      <Route exact path="/" element={<Index />} />
        <Route path="/research" element={<Research />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/people" element={<People />} />
        <Route path="/datasets" element={<Datasets />} />
        <Route path="/news" element={<News />} />
        <Route path="/cms/*" element={<CMS />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/career-details/:id" element={<CareerDetails />} />
        <Route element={<NotFound />} status={404} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
