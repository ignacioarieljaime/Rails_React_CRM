import axios from "axios";

import { gotUser, setFetchingStatus } from "../user";
import { getProspects, addProspect, updateProspect, deleteProspect } from "../prospects";
import { getCompanies, addCompany, updateCompany, deleteCompany } from "../companies";


// USER THUNK CREATORS
export const fetchUser = () => async (dispatch) => {
  const token = localStorage.getItem("vc-crm-token");
  dispatch(setFetchingStatus(true));
  try {
    const { data } = await axios.get("http://localhost:3000/api/login", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    dispatch(gotUser(data));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(setFetchingStatus(false));
  }
};

export const login = (credentials) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:3000/api/login", credentials);
    localStorage.setItem("vc-crm-token", data.token);
    localStorage.setItem("token-id", data.id);
    
    dispatch(gotUser(data));
  } catch (error) {
    console.error(error);
    dispatch(gotUser({ error: error.response.data.error || "Server Error" }));
  }
};

export const logout = (id) => async (dispatch) => {
  const token = localStorage.getItem("vc-crm-token");
  const tokenId = localStorage.getItem("token-id");
  try {
    await axios.delete(`http://localhost:3000/api/login/${tokenId}`,{
      headers: {
				'Authorization': `Bearer ${token}`
      }
    });
    localStorage.removeItem("vc-crm-token");
    localStorage.removeItem("token-id");
    dispatch(gotUser({}));
  } catch (error) {
    console.error(error);
  }
};

// PROSPECTS THUNK CREATORS
export const fetchProspects = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/prospects");
    dispatch(getProspects(data));
  } catch (error) {
    console.error(error);
  }
};

export const postProspect = (body) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:3000/api/prospects", body);
    dispatch(addProspect(data));
  } catch (error) {
    console.error(error);
  }
};

export const editProspect = (body, id) => async (dispatch) => {
  try {
    const { data } = await axios.put(`http://localhost:3000/api/prospects/${id}`, body);
    dispatch(updateProspect(data));
  } catch (error) {
    console.error(error)
  }
}

export const destroyProspect = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3000/api/prospects/${id}`);
    dispatch(deleteProspect(id))
  } catch (error) {
    console.error(error);
  }
}


// COMPANIES THUNK CREATORS
export const fetchCompanies = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/companies");
    dispatch(getCompanies(data));
  } catch (error) {
    console.error(error);
  }
};

export const postCompany = (body) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:3000/api/companies", body);
    console.log(data);
    dispatch(addCompany(data));
  } catch (error) {
    console.error(error);
  }
};

export const editCompany = (body, id) => async (dispatch) => {
  try {
    const { data } = await axios.put(`http://localhost:3000/api/companies/${id}`, body);
    dispatch(updateCompany(data));
  } catch (error) {
    console.error(error)
  }
}

export const destroyCompany = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3000/api/companies/${id}`);
    dispatch(deleteCompany(id));
  } catch (error) {
    console.error(error);
  }
}

