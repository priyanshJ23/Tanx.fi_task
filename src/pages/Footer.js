import { Typography } from "@material-tailwind/react";
 
export function SimpleFooter() {
  return (
    <footer className="fixed bottom-0 w-full flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-green-gray-50 py-6 text-center md:justify-between bg-white">
      <Typography color="green" className="font-normal">
        &copy; Priyansh@2024
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Me
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
           Contact me
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Resume
          </Typography>
        </li>
      </ul>
    </footer>
  );
}