import React, { useState } from "react";
import { connect } from "react-redux";

import { editProspect, destroyProspect } from '../../store/utils/thunkCreators';
import CloseButton from "../CloseButton";
import DeleteButton from "../DeleteButton";

const EditProspectForm = (props) => {
  const { editProspect, destroyProspect, prospect, toggleEditProspectForm } = props;

  const [firstName, setFirstName] = useState(prospect.first_name);
  const [lastName, setLastName] = useState(prospect.last_name);
  const [email, setEmail] = useState(prospect.email);
  const [phone, setPhone] = useState(prospect.phone);
  const [companyName, setCompanyName] = useState(prospect.company && prospect.company.name);
  const [stage, setStage] =  useState(prospect.stage);
  const stages = ["lead", "contacted", "diligence", "closed", "rejected"].filter(stage => stage !== prospect.stage);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await editProspect({
      prospect: {
        first_name: firstName, 
        last_name: lastName, 
        email, 
        phone, 
        company_name: companyName, 
        company_id: prospect.company.id,
        stage,
      }
    }, prospect.id);
    toggleEditProspectForm();
  }

  const handleDeleteProspect = async (id) => {
    await destroyProspect(prospect.id);
    toggleEditProspectForm();
  }

    return (
      <>
        <CloseButton onClick={props.toggleEditProspectForm} />
        <form onSubmit={handleSubmit} className="w-full mx-auto mb-4 max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="first-name">
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                id="first-name" 
                type="text" 
                placeholder="Chandra" 
                value={firstName} 
                onChange={e => setFirstName(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="last-name">
                Last Name
              </label>
              <input 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                id="last-name" 
                type="text" 
                placeholder="Lama" 
                value={lastName} 
                onChange={e => setLastName(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="stage">
                Stage
              </label>
              <div className="relative">
                <select 
                  defaultValue="selected" 
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                  id="stage"
                  onChange={e => setStage(e.target.value)} 
                >
                  <option value={prospect.stage}>{prospect.stage}</option>
                  {stages.map((stage, idx) => {
                    return <option key={idx + 1} value={stage}>{stage}</option>
                  })}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                Email
              </label>
              <input 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                id="email" 
                type="text" 
                placeholder="example@mail.com" 
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="phone">
                Phone
              </label>
              <input 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                id="phone" 
                type="tel" 
                placeholder="111-444-6655" 
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="company-name">
                Update Company
              </label>
              <input 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                id="company-name" 
                type="text" 
                placeholder="Company name" 
                value={companyName}
                onChange={e => setCompanyName(e.target.value)}
              />
            </div>
            <div className="w-full sm:mt-5 md:w-1/3 px-3 mb-6 md:mb-0">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
        <DeleteButton onClick={handleDeleteProspect} />
      </>
    );
  };


const mapDispatchToProps = (dispatch) => {
  return {
    editProspect: (body, id) => {
      dispatch(editProspect(body, id));
    },
    destroyProspect: (id) => {
      dispatch(destroyProspect(id));
    }
  }
};


export default connect(null, mapDispatchToProps)(EditProspectForm);