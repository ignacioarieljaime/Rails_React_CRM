import React from "react";
import { useSelector } from "react-redux";
import Prospect from "./Prospect";


const prospects = state => state.prospects;

const Prospects = (props) => {
  const prospectsList = useSelector(prospects);
  
  return (
    <div className="container prospects-wrapper mx-auto h-96 sm:h-3/4 w-11/12 sm:w-9/12 mb-12 sm:mt-0 border-black bg-gray-200 p-6 rounded-md shadow-lg overflow-x-hidden overflow-y-scroll">
      {prospectsList.map((prospect) => {
        return <Prospect  key={prospect.id} prospect={prospect} />
      })}
    </div>
  )
};

export default Prospects;