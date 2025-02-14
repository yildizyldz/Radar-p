import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  //paremetlerı belırle
  const params = {
    bl_lat: "34.488131",
    bl_lng: "25.479116",
    tr_lat: "25.479116",
    tr_lng: "44.79308",
    speed: "2,99999",
  };

  // api istegi at
  const res = await api.get("/flights/list-in-boundary", params);

  // slice'a aktarılacak payload'ı belirle
  console.log(res.deta);
});
