import baseApi from "@/redux/api/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookings: builder.query({
      query: () => `/bookings`,
    }),
  }),
});

export const { useGetAllBookingsQuery } = adminApi;
