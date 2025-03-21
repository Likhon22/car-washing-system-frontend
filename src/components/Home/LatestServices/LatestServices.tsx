import ServiceCard from "@/components/Card/ServiceCard/ServiceCard";
import { useGetAllServicesQuery } from "@/redux/features/service/serviceApi";

const LatestServices = () => {
  const { data } = useGetAllServicesQuery(undefined);
  console.log(data);
  return (
    <div>
      <ServiceCard />
    </div>
  );
};

export default LatestServices;
