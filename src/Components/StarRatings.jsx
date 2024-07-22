import React from "react";
import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const StarRating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="row" >
      {[...Array(totalStars)].map((_, index) => (
        <div key={index}>
          {index < rating ? (
            <StarIcon style={{ color: "#FFD700" }} />
          ) : (
            <StarBorderIcon style={{ color: "#FFD700" }} />
          )}
        </div>
      ))}
    </div>
  );
};

export default StarRating;
