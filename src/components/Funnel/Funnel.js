import React, { useState } from 'react';
import { connect } from 'react-redux';
import { 
  leadCount, 
  contactedCount, 
  diligenceCount, 
  closedCount, 
  rejectedCount} from "./utils/filters";

const Funnel = (props) => {
  const { prospects } = props;
  const [showLeadCount, setShowLeadCount] = useState(true);
  const [showContactedCount, setShowContactedCount] = useState(false);
  const [showDiligenceCount, setShowDiligenceCount] = useState(false);
  const [showClosedCount, setShowClosedCount] = useState(false);
  const [showRejectedCount, setShowRejectedCount] = useState(false);

  const lead = leadCount(prospects);
  const contacted = contactedCount(prospects);
  const diligence = diligenceCount(prospects);
  const closed = closedCount(prospects);
  const rejected = rejectedCount(prospects);

  return (
    <>
      <div onClick={() => setShowLeadCount(!showLeadCount)} id="lead" className="flex justify-center items-center cursor-pointer h-12 sm:h-16 bg-blue-600 hover:bg-blue-700 w-4/5 mb-2 sm:mb-5 rounded-xl">
        {!showLeadCount && <p className="text-center text-xl font-bold">LEAD</p>}
        {showLeadCount && <p className="text-center text-xl font-bold">{lead} {`(${(lead*100/prospects.length).toFixed(2)}%)`}</p>}
      </div>
      <div onClick={() => setShowContactedCount(!showContactedCount)} id="contacted" className="flex justify-center items-center cursor-pointer h-12 sm:h-16 bg-blue-400 hover:bg-blue-500 w-3/4 mb-2 sm:mb-5 rounded-xl">
        {!showContactedCount && <p className="text-center text-lg font-bold">CONTACTED</p>}
        {showContactedCount && <p className="text-center text-lg font-bold">{contacted} {`(${(contacted*100/prospects.length).toFixed(2)}%)`}</p>}
      </div>
      <div onClick={() => setShowDiligenceCount(!showDiligenceCount)} id="diligence" className="flex justify-center items-center cursor-pointer h-12 sm:h-16 bg-green-400 hover:bg-green-500 w-3/5 mb-2 sm:mb-5 rounded-xl">
        {!showDiligenceCount && <p className="text-center font-bold">DILIGENCE</p>}
        {showDiligenceCount && <p className="text-center font-bold">{diligence} {`(${(diligence*100/prospects.length).toFixed(2)}%)`}</p>}
      </div>
      <div onClick={() => setShowClosedCount(!showClosedCount)} id="closed" className="flex justify-center items-center cursor-pointer h-12 sm:h-16 bg-green-700 hover:bg-green-800 w-2/4 mb-2 sm:mb-5 rounded-xl">
        {!showClosedCount && <p className="text-center font-bold">CLOSED</p>}
        {showClosedCount && <p className="text-center font-bold">{closed} {`(${(closed*100/prospects.length).toFixed(2)}%)`}</p>}
      </div>
      <div onClick={() => setShowRejectedCount(!showRejectedCount)} id="rejected" className="flex justify-center items-center cursor-pointer h-12 sm:h-16 bg-red-600 hover:bg-red-700 w-2/4 mb-2 sm:mb-5 rounded-xl">
        {!showRejectedCount && <p className="text-center font-bold">REJECTED</p>}
        {showRejectedCount && <p className="text-center font-bold">{rejected} {`(${(rejected*100/prospects.length).toFixed(2)}%)`}</p>}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    prospects: state.prospects
  }
};

export default connect(mapStateToProps, null)(Funnel);