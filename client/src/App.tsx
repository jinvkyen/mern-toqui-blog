// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ErrorBoundary from "./components/ErrorBoundary";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/timeline' element={<div>Timeline Page</div>} />
            <Route path='/fun-facts' element={<div>Fun Facts Page</div>} />
            <Route path='/highlights' element={<div>Highlights Page</div>} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
