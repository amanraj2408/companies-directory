import React from "react";
import { TextField, MenuItem, Box } from "@mui/material";

const Filters = ({ filters, onFilterChange }) => {
  return (
    <Box display="flex" gap={2} my={2}>
      <TextField
        label="Search by Name"
        variant="outlined"
        size="small"
        name="name"
        value={filters.name}
        onChange={onFilterChange}
      />
      <TextField
        select
        label="Filter by Location"
        size="small"
        name="location"
        value={filters.location}
        onChange={onFilterChange}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Bangalore">Bangalore</MenuItem>
        <MenuItem value="Hyderabad">Hyderabad</MenuItem>
        <MenuItem value="Pune">Pune</MenuItem>
        <MenuItem value="Mumbai">Mumbai</MenuItem>
      </TextField>
      <TextField
        select
        label="Filter by Industry"
        size="small"
        name="industry"
        value={filters.industry}
        onChange={onFilterChange}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Software">Software</MenuItem>
        <MenuItem value="Healthcare">Healthcare</MenuItem>
        <MenuItem value="Education">Education</MenuItem>
        <MenuItem value="Finance">Finance</MenuItem>
      </TextField>
    </Box>
  );
};

export default Filters;
