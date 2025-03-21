import baseApi from "@/redux/api/baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: () => {
        return {
          url: `/services`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllServicesQuery } = serviceApi;
