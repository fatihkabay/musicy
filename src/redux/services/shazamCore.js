import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b20f637b45msh401561dfc9f269dp15c6dejsn5a04dae29fe8',
    'X-RapidAPI-Host': 'billboard-api2.p.rapidapi.com',
  },
};

fetch('https://billboard-api2.p.rapidapi.com/billboard-200', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
});
