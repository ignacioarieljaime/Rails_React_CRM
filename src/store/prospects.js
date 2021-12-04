import {
  addProspectToStore,
  updateProspectInStore,
  deleteProspectFromStore,
} from "./utils/reducerFunctions";

// ACTIONS

const GET_PROSPECTS = "GET_PROSPECTS";
const ADD_PROSPECT = "ADD_PROSPECT";
const UPDATE_PROSPECT = "UPDATE_PROSPECT";
const DELETE_PROSPECT = "DELETE_PROSPECT";

//ACTION CREATORS
export const getProspects = (prospects) => {
  return {
    type: GET_PROSPECTS,
    prospects,
  }
}

export const addProspect = (prospect) => {
  return {
    type: ADD_PROSPECT,
    prospect,
  }
}

export const updateProspect = (prospect) => {
  return {
    type: UPDATE_PROSPECT,
    prospect,
  }
}

export const deleteProspect = (id) => {
  return {
    type: DELETE_PROSPECT,
    id,
  }
}

// REDUCER

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_PROSPECTS: 
      return action.prospects;
    case ADD_PROSPECT:
      return addProspectToStore(state, action.prospect);
    case UPDATE_PROSPECT:
      return updateProspectInStore(state, action.prospect);
    case DELETE_PROSPECT:
      return deleteProspectFromStore(state, action.id);
    default:
      return state;
  }
};

export default reducer;