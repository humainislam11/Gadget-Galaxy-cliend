/* eslint-disable react/prop-types */
import { FiFilter } from "react-icons/fi";
import { GrPowerReset } from "react-icons/gr";

const FilterBar = ({setBrand, setCategory,handleReset}) => {
    return (
        <div className="bg-gray-300 h-full min-h-screen p-4">
            <div className="flex items-center gap-1">
            <FiFilter size={24} />
            <h1 className="text-xl font-semibold">Filter</h1>
            </div>

     {/* ///////////////// */}
            <div className="mt-7 flex flex-col gap-2 items-center">

                <div className="w-full">
                 <select onChange={(e)=> setBrand(e.target.value)} className="p-[10px] w-full border-2 border-black rounded-md">
                 <option disabled selected>Pick your favorite Simpson</option>
                <option>Brand</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
                 </select>
                </div>

                <div className="w-full">
                 <select onChange={(e)=> setCategory(e.target.value)} className="p-[10px] w-full border-2 border-black rounded-md">
                 <option disabled selected>Pick your favorite Simpson</option>
                    <option>Category</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                 </select>
                </div>
            </div>

            {/* ///////////// */}

            <button onClick={handleReset} className="btn btn-primary w-full mt-4 flex items-center font-semibold">
                <p>Reset</p>
                <GrPowerReset />

                </button>
        </div>
    );
};

export default FilterBar;