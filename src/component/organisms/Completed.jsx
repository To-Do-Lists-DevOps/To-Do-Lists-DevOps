import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Lists from "../molecules/Lists";

function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-6 w-5 ml-2 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }

const Completed = () => {
    const [open, setOpen] = React.useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return(
        <div>
            <Accordion open={open === 1} icon={<Icon id={1} open={open}/>} className="z-0">
                <AccordionHeader onClick={() => handleOpen(1)} className="w-fit p-2 rounded-lg bg-[#2A2A2A]">
                    Completed
                </AccordionHeader>
                <AccordionBody>
                    <Lists />
                </AccordionBody>
            </Accordion>
        </div>
    );
}

export default Completed;