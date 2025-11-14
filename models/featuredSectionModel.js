const mongoose = require("mongoose");

const FeaturedSectionSchema = mongoose.Schema({
  title: { type: String, required: true },
  genres: { type: [String], default: [] },
  release_date: { type: Number },
  runtime: { type: String },
  vote_average: { type: Number },
  backdrop_path: { type: String },
});

const featuredSection = mongoose.model(
  "FeaturedSection",
  FeaturedSectionSchema
);

module.exports = featuredSection;
