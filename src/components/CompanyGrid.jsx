import React from "react";
import { Grid, Typography } from "@mui/material";
import CompanyCard from "./CompanyCard";

const CompanyGrid = ({ companies }) => {
  return (
    <Grid container spacing={3}>
      {companies.length > 0 ? (
        companies.map((company) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={company.id}>
            <CompanyCard company={company} />
          </Grid>
        ))
      ) : (
        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          sx={{ width: "100%", mt: 3 }}
        >
          No companies found
        </Typography>
      )}
    </Grid>
  );
};

export default CompanyGrid;
