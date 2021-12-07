import React from "react";
import Prospect from "./Prospect";

const Prospects = (props) => {
 const { prospects } = props;
 
  
  return (
    <div className="container prospects-wrapper mx-auto h-96 sm:h-3/4 w-11/12 sm:w-9/12 mb-12 sm:mt-0 border-black bg-gray-200 p-6 rounded-md shadow-lg overflow-x-hidden overflow-y-scroll">
      <div className="p-1 mb-3 border border-gray-300 rounded-md">
        <input className="appearance-none  border-none w-full text-gray-700 mr-3 p-2 leading-tight focus:outline-none" />
      </div>
      {prospects.map((prospect) => {
        return <Prospect  key={prospect.id} prospect={prospect} />
      })}
    </div>
  )
};

export default Prospects;