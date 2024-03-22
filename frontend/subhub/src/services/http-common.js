import axios from "axios";

const headers = {
    "Content-type": "application/json",
};

export default axios.create({
    baseURL: "http://localhost:8000/",
    headers: headers,
});
