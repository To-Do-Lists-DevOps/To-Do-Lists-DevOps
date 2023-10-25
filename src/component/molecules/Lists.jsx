import React, {useState} from 'react';
import EditIcon from "../atoms/EditIcon";
import DeleteIcon from "../atoms/DeleteIcon";

const Lists = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleChange = () => {
        setIsChecked(!isChecked);
    };

    const labelStyle = {
        textDecoration: isChecked ? 'line-through' : 'none',
    };

    return(
        <div>
            <div className="flex flex-row bg-[#2A2A2A] w-full h-10 rounded-lg py[.2em] my-2 justify-between">
                <label className='flex flex-row'>
                    <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={toggleChange}
                    className="mx-3 text-2xl"
                    />
                    <p className="text-lg flex items-center" style={labelStyle}>
                        Mengerjakan tugas 1
                    </p>
                </label>
                <div className="flex items-center">
                    <EditIcon />
                    <DeleteIcon />
                </div>
            </div>
        </div>
    );
}

export default Lists;