import http from "./http-common.js";

class PropertyService {
    async getProperties(data) {
        try {
            return http.get("get-property-all/");
        } catch (err) {
            console.log(err);
        }
    }

    async getProperty(data) {
        try {
            return http.post("send-property-id/", data);
        } catch (err) {
            console.log(err);
        }
    }

    async createProperty(data) {
        try {
            return http.post("create-property/", data);
        } catch (err) {
            console.log(err);
        }
    }

    async filterProperty(data) {
        try {
            return http.post("send-property-id/", data);
        } catch (err) {
            console.log(err);
        }
    }
}

export default new PropertyService();
