import React from "react";
import { TextField, MenuItem, Box } from "@mui/material";

const Filters = ({ filters, onFilterChange }) => {
  return (
    <Box display="flex" flexWrap="wrap" gap={2} my={2}>
      {/* Search by Name */}
      <TextField
        label="Search by Name"
        variant="outlined"
        size="small"
        name="name"
        value={filters.name}
        onChange={onFilterChange}
      />

      {/* Filter by Location */}
      <TextField
        select
        label="Filter by Location"
        size="small"
        name="location"
        value={filters.location}
        onChange={onFilterChange}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="California">California</MenuItem>
        <MenuItem value="Seattle">Seattle</MenuItem>
        <MenuItem value="Washington">Washington</MenuItem>
        <MenuItem value="Texas">Texas</MenuItem>
      </TextField>

      {/* Filter by Industry */}
      <TextField
        select
        label="Filter by Industry"
        size="small"
        name="industry"
        value={filters.industry}
        onChange={onFilterChange}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Technology">Technology</MenuItem>
        <MenuItem value="E-commerce">E-commerce</MenuItem>
        <MenuItem value="Automotive">Automotive</MenuItem>
      </TextField>
    </Box>
  );
};

export default Filters;
