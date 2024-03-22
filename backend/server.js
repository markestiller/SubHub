// IMPORTS AND SETUP
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

// connect to AWS services
// const AWS = require('aws-sdk');

// // AWS credentials setup
// AWS.config.update({
//   region: 'us-east-1',
//   accessKeyId: 'your-access-key-id',
//   secretAccessKey: 'your-secret-access-key'
// });

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
let propertiesAll = [{
  "id": 1,
  "address": "300 Huron St, Toronto, ON M5S 3J6",
  "lat": 43.657164038,
  "lon": -79.400248399,
  "desc": "A residence hall open to students of any years!",
  "price": 1800,
  "type": "dormitory",
  "numBeds": 1,
  "numBaths": 1,
  "duration": 3,
  "seller": "New College"
}];

let testFilter = new Filter();

let propertiesFiltered = []; // stores properties with current subset specified
let filters = [testFilter]; // will store values from "/filter-property" POST, then be used in "/get-property-subset"
let currentId = 0;

// HELPER FUNCTIONS

const checkFilter = (property, filterObject) => {
  // helper function to check if a property follows a filter
  if (filterObject.minPrice <= property.price && property.price <= filterObject.maxPrice) {
    if (filterObject.minBedrooms <= property.numBedrooms) {
      console.log(filterObject.minPrice);
      console.log(filterObject.maxPrice);
      console.log(filterObject.minBedrooms);
      return true;
    }
  }

  return false;
};



// ROUTE HANDLERS

// ------------------------------ POST REQUESTS ------------------------------------------ //

app.post("/create-property", async (req, res) => {
  // frontend sends property information to backend

  // extract property data
  propertyData = req.body();
  console.log(propertyData);

  // convert address to lat and lon using AWS 
  const address = propertyData.address;

  let lat;
  let lon;

  // set lat and lon
  propertyData.lat = lat;
  propertyData.lon = lon;
  
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
  let filterObj = new Filter();
  
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

app.post("/send-property-id", (req, res) => {
  data = req.body();
  currentId = data["id"];

});


// ------------------------------ GET REQUESTS ------------------------------------------ //

app.get("/get-property", (req, res) => {
  // frontend receives one property information from backend  

  propertiesAll.forEach(property => { 
    // for property in propertiesAll
    if (property.id == currentId) {
      res.json(property);
    }
  })

  // throw an error message if the id was not found
  
  
});

app.get("/get-property-subset", (req, res) => {
  // reset the filtered properties
  propertiesFiltered = [];

  // frontend receives one property information from backend

  // apply filters (propertiesFiltered is empty here)
  propertiesAll.forEach(property => {
    if (checkFilter(property, filters[0])) {
      propertiesFiltered.push(property);
    }
  })

  // remove the filter from list
  filters = [];

  // send back to front end
  res.json(propertiesFiltered);
});

app.get("/get-property-all", (req, res) => {
  res.json(propertiesAll);
});


// start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
