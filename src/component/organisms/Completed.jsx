import React from "react";
import AccordionIcon from "../atoms/AccordionIcon";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";


const Completed = ({todos}) => {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div>
      <Accordion open={open === 1} icon={<AccordionIcon id={1} open={open} />} className="z-0 mt-12 mb-2 min-h-[29em]">
        <AccordionHeader onClick={() => handleOpen(1)} className="w-fit p-2 rounded-lg bg-[#2A2A2A]"> Completed </AccordionHeader>
        <AccordionBody className="overflow-hidden">
          <div>
          {todos.length > 0 && (
              <ul>
              {todos.map(todo => (
                  <div className="flex flex-row bg-[#2A2A2A] w-full h-10 rounded-lg py[.2em] my-2 justify-between">
                  <li key={todo.id}>
                    <label className='flex flex-row'>
                      <p className="text-lg flex items-center mx-2 my-2">
                          {todo.task}
                      </p>
                      </label>
                  </li>
              </div>
              ))}
              </ul>
          )}
          </div>
        </AccordionBody>
      </Accordion>
    </div>
  );
}

export default Completed;