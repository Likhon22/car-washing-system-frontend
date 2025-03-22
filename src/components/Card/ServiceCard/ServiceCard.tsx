import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TService } from "@/interface/services";
import { Clock, DollarSign } from "lucide-react";

const ServiceCard = ({ service }: { service: TService }) => {
  const { name, description, duration, price } = service;
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-200">
      <CardHeader className="pb-2 bg-gray-50">
        <CardTitle className="text-xl font-bold text-gray-800">
          {name}
        </CardTitle>
        <CardDescription className="line-clamp-2 text-sm text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center text-gray-700 space-x-2">
            <Clock className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium">
              Duration: {duration} min
            </span>
          </div>
          <div className="flex items-center text-gray-700 space-x-2">
            <DollarSign className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium">
              Price: ${price.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
          <button className="text-blue-500 text-sm font-medium hover:text-blue-700 transition-colors">
            Learn more →
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
