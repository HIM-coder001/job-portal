import React from "react";
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
import { ThemeProvider } from "@/components/ui/theme-provider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="grid-background"></div>

      <div className="relative z-10">
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/onboarding" element={<OnBoarding />} />
            <Route path="/job/:id" element={<Job />} />
            <Route path="/postjobs" element={<PostJobs />} />
            <Route path="/myjobs" element={<MyJobs />} />
            <Route path="/savedjobs" element={<SavedJobs />} />
            <Route path="/joblisting" element={<JobListing />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;