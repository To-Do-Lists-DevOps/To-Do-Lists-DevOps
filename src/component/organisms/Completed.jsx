import React from "react";
import AccordionIcon from "../atoms/AccordionIcon";
import Lists from "../molecules/Lists";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";


const Completed = () => {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <div>
      <Accordion open={open === 1} icon={<AccordionIcon id={1} open={open} />} className="z-0 mt-12 mb-2 min-h-[29em]">
        <AccordionHeader onClick={() => handleOpen(1)} className="w-fit p-2 rounded-lg bg-[#2A2A2A]"> Completed </AccordionHeader>
        <AccordionBody className="overflow-hidden">
          <Lists />
          <Lists />
          <Lists />
          <Lists />
          <Lists />
        </AccordionBody>
      </Accordion>
    </div>
  );
}

export default Completed;