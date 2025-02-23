import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

import { data } from "react-router-dom";

export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  //paremetlerı belırle
  const params = {
    bl_lat: "34.488131",
    bl_lng: "25.479116",
    tr_lat: "42.940058",
    tr_lng: "42.79308",
    limit: "300",
    speed: "2,99999",
  };

  // api istegi at
  const res = await api.get("/flights/list-in-boundary", { params });
  const formatted = res.data.aircraft.map((i) => ({
    id: i[0],
    code: i[1],
    lat: i[2],
    lng: i[3],
    deg: i[4],
  }));
  console.log(res.data.aircraft);

  // slice'a aktarılacak payload'ı belirle
  return formatted;
});

export const getDetails = createAsyncThunk("detail/getDetails", async (id) => {
  // parametrelerı belırle
  const params = {
    flight: id,
  };

  // api ' dan detaları al
  const res = await api.get("/flights/detail", { params });
  console.log(res);

  // aksiyonun payload
  return res.data;
});
