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
      this.maxPrice = 6000;
      this.minBedrooms = 0;
      // this.startDate = Date();
      // this.endDate = Date();
  }

  addBedroomFilter(numBedrooms) {
    this.minBedrooms = numBedrooms;
  }

  addMinPriceFilter(minPrice) {
    this.minPrice = minPrice;
  }

  addMaxPriceFilter(maxPrice) {
    this.maxPrice = maxPrice;
  }
}


// GLOBAL VARIABLES
let propertyData = {};
let propertiesAll = [];
let propertiesFiltered = []; // stores properties with current subset specified
let filters = []; // will store values from "/filter-property" POST, then be used in "/get-property-subset"

// HELPER FUNCTIONS

// ROUTE HANDLERS

app.post("/create-property", async (req, res) => {
  // frontend sends property information to backend

  // extract property data
  propertyData = req.body();
  console.log(propertyData);

  // set the variables
  // const address = propertyData.address;
  // const description = propertyData.description;
  // const price = propertyData.price;
  // const type = propertyData.type;
  // const duration = propertyData.duration;
  // const seller = propertyData.seller;

  // initialize lat and lon

  
  // add the property to a list of all properties
  propertiesAll.push(propertyData);
  console.log("Successfully added property to list of all properties");

  // send success message
  res.status(200).send("Property data received");

  

  



  
});

app.post("/filter-property", (req, res) => {
  
  // frontend sends filters for properties to backend
  filters = req.body();
  
  // declare filter object
  filterObj = new Filter();
  
  if (filters.numBedrooms != 0) {
    filterObj.addBedroomFilter(filters.numBedrooms);
  }

  if (filters.minPrice != 0) {
    filterObj.addMinPriceFilter(filters.minPrice);
  }

  if (filters.maxPrice < 6000) {
    filterObj.addMaxPriceFilter(filters.maxPrice);
  }

  // add filter object to the filters array
  filters.push(filterObj);

  console.log("Successfully added filter object to list of filters");
  console.log(filters[0].numBedrooms);
  console.log(filters[0].minPrice);
  console.log(filters[0].maxPrice);

  // send success message
  res.status(200).send("Filter successfully added");

  

});

app.get("/get-property", (req, res) => {
  // frontend receives one property information from backend
});

app.get("/get-property-subset", (req, res) => {
  // reset the filtered properties
  propertiesFiltered = [];

  // frontend receives one property information from backend

  // apply filters (propertiesFiltered is empty here)
  propertiesAll.forEach(property => {
    if (checkFilter(property)) {
      propertiesFiltered.push(property);
    }
  })

  // remove the filter from list
  let filters = [];

  // send back to front end
  res.json(propertiesFiltered);
});

const checkFilter = (property, filterObject) => {
  // helper function to check if a property follows a filter
  if (filterObject.minPrice <= property.price && property.price <= filterObject.maxPrice) {
    if (filterObject.minBedrooms <= property.numBedrooms) {
        return true;
    }
  }

  return false;
};

app.get("/get-property-all", (req, res) => {
// frontend receives all property information from backend
});

// start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
