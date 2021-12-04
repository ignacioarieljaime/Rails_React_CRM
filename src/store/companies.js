import {
  addCompanyToStore,
  updateCompanyInStore,
  deleteCompanyFromStore,
} from "./utils/reducerFunctions";

// ACTIONS

const GET_COMPANIES = "GET_COMPANIES";
const ADD_COMPANY = "ADD_COMPANY";
const UPDATE_COMPANY = "UPDATE_COMPANY";
const DELETE_COMPANY = "DELETE_COMPANY";

//ACTION CREATORS
export const getCompanies = (companies) => {
  return {
    type: GET_COMPANIES,
    companies,
  }
}

export const addCompany = (company) => {
  return {
    type: ADD_COMPANY,
    company,
  }
}

export const updateCompany = (company) => {
  return {
    type: UPDATE_COMPANY,
    company,
  }
}

export const deleteCompany = (id) => {
  return {
    type: DELETE_COMPANY,
    id,
  }
}

// REDUCER

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_COMPANIES: 
      return action.companies;
    case ADD_COMPANY:
      return addCompanyToStore(state, action.company);
    case UPDATE_COMPANY:
      return updateCompanyInStore(state, action.company);
    case DELETE_COMPANY:
      return deleteCompanyFromStore(state, action.id);
    default:
      return state;
  }
};

export default reducer;