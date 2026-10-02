import React from "react";
import { Button } from "./components/ui/button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import OnBoarding from "./pages/OnBoarding";
import JobListing from "./pages/JobListing";
import Job from "./pages/Job";
import MyJobs from "./pages/MyJobs";
import PostJobs from "./pages/PostJobs";
import SavedJobs from "./pages/SavedJobs";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={ <OnBoarding /> } />
          <Route path="/job" element={<Job />} />
          <Route path="/postjobs" element={<PostJobs />} />
          <Route path="/myjobs" element={<MyJobs />} />
          <Route path="/savedjobs" element={<SavedJobs />} />
          <Route path="/joblisting" element={<JobListing />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
