import ServiceCard from "@/components/Card/ServiceCard/ServiceCard";
import { TService } from "@/interface/services";
import { useGetAllServicesQuery } from "@/redux/features/service/serviceApi";

const LatestServices = () => {
  const { data, isLoading } = useGetAllServicesQuery(undefined);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore our comprehensive range of professional car washing services
            designed to keep your vehicle looking its best.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse text-blue-500">
              Loading services...
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {data?.data?.map((service: TService) => (
              <ServiceCard service={service} key={service._id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestServices;
