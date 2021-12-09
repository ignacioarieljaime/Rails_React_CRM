import React from "react";
import { connect } from "react-redux";

import { postProspect } from '../../store/utils/thunkCreators';

const NewProspectForm = (props) => {
  const { companies, postProspect, toggleProspectForm } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const first_name = e.target.firstname.value;
    const last_name = e.target.lastname.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const company_name = e.target.companyname.value;
    const company_id = e.target.companyid.value;
    
    await postProspect({prospect: {first_name, last_name, email, phone, company_name, company_id}});
    e.target.reset();
    toggleProspectForm();
  }

    return (
      <form onSubmit={handleSubmit} className="w-full mx-auto mb-8 max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstname">
              First Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="firstname" name="firstname" type="text" placeholder="Jane"/>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastname">
              Last Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="lastname" name="lastname" type="text" placeholder="Doe"/>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" name="email" type="text" placeholder="example@mail.com"/>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
              Phone
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" name="phone" type="tel" placeholder="111-444-6655"/>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="companyname">
              Add Company
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="companyname" name="companyname" type="text" placeholder="Company name"/>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="companyid">
              Or Select Company
            </label>
            <div className="relative">
              <select defaultValue="selected" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="companyid" name="companyid">
                <option value="">Select</option>
                {companies.map((company) => {
                  return <option key={company.id} value={company.id}>{company.name}</option>
                })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="w-full sm:mt-5 md:w-1/3 px-3 mb-6 md:mb-0">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  };

const mapStateToProps = (state) => {
  return {
    companies: state.companies
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    postProspect: (body) => {
      dispatch(postProspect(body));
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(NewProspectForm);