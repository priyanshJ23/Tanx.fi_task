

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 
export function Product({product}) {
  return (
    <Card className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
     
        <img
          src={product.image}
          alt="card-image"
          className="h-90 w-full object-cover"
        />
         <span className="h-7 text-center p-1 w-8 m-4 -mt-1 bg-green-500 text-white">
          {product?.rating}
        </span>
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {product.title}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
          ₹{product?.amount}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          More Details
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Product;
