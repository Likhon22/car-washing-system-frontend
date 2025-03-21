import { useGetAllBookingsQuery } from "@/redux/features/bookings/bookingApi";

const CreateAdmin = () => {
  const { data, isLoading, error } = useGetAllBookingsQuery(undefined);
  console.log(data);
  console.log(isLoading);
  console.log(error);

  return (
    <div>
      <p> create admin</p>
    </div>
  );
};

export default CreateAdmin;
