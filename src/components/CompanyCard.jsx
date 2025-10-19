import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const CompanyCard = ({ company }) => {
  return (
    <Card
      sx={{
        minWidth: 250,
        boxShadow: 3,
        borderRadius: 3,
        p: 2,
        "&:hover": { boxShadow: 6, transform: "scale(1.02)" },
        transition: "all 0.3s ease-in-out",
      }}
    >
      <CardContent>
        <Box mb={1}>
          <Typography variant="h6" color="primary" gutterBottom>
            {company.name}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          <strong>Industry:</strong> {company.industry}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Location:</strong> {company.location}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
