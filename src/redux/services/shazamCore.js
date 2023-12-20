import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://billboard-api2.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set(
        'XRAPIDAPI',
        'b20f637b45msh401561dfc9f269dp15c6dejsn5a04dae29fe8',
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
