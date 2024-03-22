// IMPORTS AND SETUP
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

// set up AWS
const AWS = require("aws-sdk");

// set up location service credentials
const locationService = new AWS.Location({
  region: "us-east-1",
  accessKeyId: "ASIAS3ROA4GDF44C2QGK",
  secretAccessKey: "7w9Youulow0/ei7rFiJRK+dT0NgRDA6swmkeVuG6",
});

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

let testFilter = new Filter();
testFilter.addMaxPriceFilter(2000);

let propertiesFiltered = []; // stores properties with current subset specified
let allFilters = []; // will store values from "/filter-property" POST, then be used in "/get-property-subset"
let currentId = 0;

// HELPER FUNCTIONS

const checkFilter = (property, filterObject) => {
  // helper function to check if a property follows a filter
  if (
    filterObject.minPrice <= property.price &&
    property.price <= filterObject.maxPrice
  ) {
    if (filterObject.minBedrooms <= property.numBeds) {
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
  propertyData = req.body;
  console.log("property data is:");
  console.log(propertyData);

  // convert address to lat and lon using AWS
  const address = propertyData.address;

  try {
    // Geocode address using Amazon Location Service
    const params = {
      IndexName: "SubHub", // Your place index name
      Text: address,
    };

    const geocodeData = await locationService
      .searchPlaceIndexForText(params)
      .promise();

    if (geocodeData && geocodeData.Results && geocodeData.Results.length > 0) {
      const firstResult = geocodeData.Results[0];
      propertyData.lat = firstResult.Place.Geometry.Point[1];
      propertyData.lon = firstResult.Place.Geometry.Point[0];

      // Add the property to the list of all properties
      propertiesAll.push(propertyData);
      console.log("Successfully added property to list of all properties");

      // Send success message
      res.status(200).send("Property data received");
    } else {
      res.status(400).send("Failed to geocode address");
    }
  } catch (error) {
    console.error("Error geocoding address:", error);
    res.status(500).send("Internal server error");
  }

  // send success message
  res.status(200).send("Property data received");
});

app.post("/filter-property", (req, res) => {
  // frontend sends filters for properties to backend
  filters = req.body;
  console.log(filters);

  // declare filter object
  let filterObj = new Filter();

  if (filters.numBeds != 0) {
    filterObj.addBedroomFilter(filters.numBeds);
  }

  if (filters.minPrice != 0) {
    filterObj.addMinPriceFilter(filters.minPrice);
  }

  if (filters.maxPrice < 6000) {
    filterObj.addMaxPriceFilter(filters.maxPrice);
  }

  // add filter object to the filters array
  allFilters.push(filterObj);

  console.log("Successfully added filter object to list of filters");
  console.log(allFilters[0]);

  // send success message
  res.status(200).send("Filter successfully added");
});

app.post("/send-property-id", (req, res) => {
  data = req.body;
  currentId = data["id"];
});

// ------------------------------ GET REQUESTS ------------------------------------------ //

app.get("/get-property", (req, res) => {
  // frontend receives one property information from backend

  propertiesAll.forEach((property) => {
    // for property in propertiesAll
    if (property.id == currentId) {
      res.json(property);
    }
  });

  // throw an error message if the id was not found
});

app.get("/get-property-subset", (req, res) => {
  // reset the filtered properties
  propertiesFiltered = [];
  console.log("in get function");
  console.log(allFilters[0]);
  // frontend receives one property information from backend

  // apply filters (propertiesFiltered is empty here)
  propertiesAll.forEach((property) => {
    if (checkFilter(property, allFilters[0])) {
      propertiesFiltered.push(property);
    }
  });

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
