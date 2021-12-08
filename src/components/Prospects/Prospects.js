import React, { useState } from "react";
import Prospect from "./Prospect";

const Prospects = (props) => {
 const { prospects } = props;
 const [searchString, setSearchString] = useState("");

 let filteredProspects = !searchString
  ? prospects
  : prospects.filter(prospect => {
    return (
      `${prospect.first_name} ${prospect.last_name}`.toLowerCase().includes(searchString.toLowerCase())
    );
  });
  
  return (
    <div className="container prospects-wrapper mx-auto h-96 sm:h-3/4 w-11/12 sm:w-9/12 mb-12 sm:mt-0 border-black bg-gray-200 p-6 rounded-md shadow-lg overflow-x-hidden overflow-y-scroll">
      <div className="p-1 mb-3 border border-gray-300 rounded-md">
        <input 
          className="appearance-none  border-none w-full text-gray-700 mr-3 p-2 leading-tight focus:outline-none" 
          value={searchString} 
          onChange={e => setSearchString(e.target.value)} 
        />
      </div>
      {filteredProspects.map((prospect) => {
        return <Prospect  key={prospect.id} prospect={prospect} />
      })}
    </div>
  )
};

export default Prospects;