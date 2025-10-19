import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, CircularProgress } from "@mui/material";
import Filters from "./components/Filters";
import CompanyGrid from "./components/CompanyGrid";
import "./index.css";

function App() {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [filters, setFilters] = useState({ name: "", location: "", industry: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/companies")
      .then((res) => {
        setCompanies(res.data);
        setFilteredCompanies(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);

    const filtered = companies.filter((c) => {
      return (
        c.name.toLowerCase().includes(updatedFilters.name.toLowerCase()) &&
        (updatedFilters.location ? c.location === updatedFilters.location : true) &&
        (updatedFilters.industry ? c.industry === updatedFilters.industry : true)
      );
    });

    setFilteredCompanies(filtered);
  };

  if (loading) {
    return (
      <Container sx={{ mt: 10, textAlign: "center" }}>
        <CircularProgress />
        <Typography>Loading companies...</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Companies Directory
      </Typography>
      <Filters filters={filters} onFilterChange={handleFilterChange} />
      <CompanyGrid companies={filteredCompanies} />
    </Container>
  );
}

export default App;
