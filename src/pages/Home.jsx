import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";
import Footer from "../components/Footer";
import jobs from "../data/jobs";
import "../App.css";

function Home() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const filteredJobs = jobs.filter((job) => {
    return (
      job.company.toLowerCase().includes(query.toLowerCase()) ||
      job.title.toLowerCase().includes(query.toLowerCase()) ||
      job.location.toLowerCase().includes(query.toLowerCase())
    );
  });

  return (
    <>
      <Navbar />

      <Hero />

      <section className="search-section">
        <SearchBar
          search={search}
          setSearch={setSearch}
          onSearch={() => setQuery(search)}
        />
      </section>

      <section className="jobs-section" id="jobs">
        <div className="jobs-title">
          <h2>Featured Jobs</h2>

          <div className="section-divider"></div>

          <p>
            Discover hand-picked opportunities from top companies.
          </p>
        </div>

        <div className="categories">
          <span className="category">All</span>
          <span className="category">Frontend</span>
          <span className="category">Backend</span>
          <span className="category">AI</span>
          <span className="category">Remote</span>
        </div>

        <div className="jobs-grid">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          ) : (
            <h2 style={{ textAlign: "center", width: "100%" }}>
              No jobs found.
            </h2>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;