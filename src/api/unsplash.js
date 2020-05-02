import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID KJLpMhznKhIWiOInK1Cvioojr0h3RRjMeb64RSLN9MY"
  }
});
