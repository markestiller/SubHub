// IMPORTS AND SETUP
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// OBJECTS
class Filter {
  constructor() {
      // this.location = ...;
      this.minPrice = 0;
      this.maxPrice = Number.MAX_SAFE_INTEGER;
      this.minBedrooms = 0;
      // this.startDate = Date();
      // this.endDate = Date();
  }

  addBedroomFilter(numBedrooms) {
    this.minBedrooms = numBedrooms;
  }

  addPriceFilter(minPrice, maxPrice) {
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
  }
}


// GLOBAL VARIABLES
const propertyData = {};
const properties = [];
const propertiesFiltered = []; // stores properties with current subset specified
const filters = []; // will store values from "/filter-property" POST, then be used in "/get-property-subset"

// HELPER FUNCTIONS

// ROUTE HANDLERS

// req.body = {


// }

app.post("/create-property", (req, res) => {
  // frontend sends property information to backend
  
});

app.post("/filter-property", (req, res) => {
  // frontend sends filters for properties to backend
  filters = req.body
  
  // declare filter object
  filterObj = new Filter();
  

});

app.get("/get-property", (req, res) => {
  // frontend receives one property information from backend
});

app.get("/get-property-subset", (req, res) => {
  // frontend receives one property information from backend

  // apply filters


  // send back to front end

});

app.get("/get-property-all", (req, res) => {
// frontend receives all property information from backend
});

// start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
