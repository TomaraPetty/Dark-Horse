import axios from "axios";
export default {
    // Get all bands
    getBands: function() {
        return axios.get("/api/band");
    },
    // Get the bands with the given id
    getOneBand: function(id) {
        return axios.get("/api/band/" + id);
    },
    // Delete the bands with the given id
    deleteBands: function(id) {
        return axios.delete("/api/band/" + id);
    },
    // Save a bands to the database
    saveBands: function(bandData) {
        return axios.post("/api/band", bandData);
    }
};


