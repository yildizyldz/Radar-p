import axios from "axios";

const api = axios.create({
  baseURL: "https://flight-radar1.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "d368752766mshace6e5bbbe6917bp128d7ejsn1b019c9192df",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
});
export default api;
