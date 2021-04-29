
import axios from "axios";

const APIKEY = "QuE6JFOGZzhxIH0HcjhszNQFv4fsKeHN"
export default {

    search: async function (query) {

        try {
            const apiCall = await axios.get(`https://api.tomtom.com/search/2/geocode/${query}.json?lat=37.337&lon=-121.89&key=${APIKEY}`)
            console.log(apiCall.data);
            return (apiCall.data);
        }
        catch (error) {
            console.error(error);
        }
    }
}
