import baseApi from "@/redux/api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookings: builder.query({
      query: () => {
        return {
          url: `/bookings`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllBookingsQuery } = bookingApi;
