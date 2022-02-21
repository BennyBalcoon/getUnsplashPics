import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID m2_maumPVSa-boa8BND1E55cdnoMaYLfUQSqdDS0zqA",
  },
});
