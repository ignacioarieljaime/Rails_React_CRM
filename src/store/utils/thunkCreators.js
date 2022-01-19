import axios from "axios";
import CONSTANT from "./constant";
import { gotUser, setFetchingStatus } from "../user";
import { getProspects, addProspect, updateProspect, deleteProspect } from "../prospects";
import { getCompanies, addCompany, updateCompany, deleteCompany } from "../companies";

const { API: { BASE } } = CONSTANT;

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("vc-crm-token");
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

// USER THUNK CREATORS
export const fetchUser = () => async (dispatch) => {
  dispatch(setFetchingStatus(true));
  try {
    const { data } = await axios.get(`${BASE}/login`);
    dispatch(gotUser(data));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(setFetchingStatus(false));
  }
};

export const login = (credentials) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${BASE}/login`, credentials);
    localStorage.setItem("vc-crm-token", data.token);
    localStorage.setItem("token-id", data.id);
    
    dispatch(gotUser(data));
  } catch (error) {
    console.error(error);
    dispatch(gotUser({ error: error.response.data.error || "Server Error" }));
  }
};

export const logout = (id) => async (dispatch) => {
  const tokenId = localStorage.getItem("token-id");
  try {
    await axios.delete(`${BASE}/login/${tokenId}`);
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
    const { data } = await axios.get(`${BASE}/prospects`);
    dispatch(getProspects(data));
  } catch (error) {
    console.error(error);
  }
};

export const postProspect = (body) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${BASE}/prospects`, body);
    dispatch(addProspect(data));
  } catch (error) {
    console.error(error);
  }
};

export const editProspect = (body, id) => async (dispatch) => {
  try {
    const { data } = await axios.put(`${BASE}/prospects/${id}`, body);
    dispatch(updateProspect(data));
  } catch (error) {
    console.error(error)
  }
}

export const destroyProspect = (id) => async (dispatch) => {
  try {
    await axios.delete(`${BASE}/prospects/${id}`);
    dispatch(deleteProspect(id))
  } catch (error) {
    console.error(error);
  }
}


// COMPANIES THUNK CREATORS
export const fetchCompanies = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE}/companies`);
    dispatch(getCompanies(data));
  } catch (error) {
    console.error(error);
  }
};

export const postCompany = (body) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${BASE}/companies`, body);
    dispatch(addCompany(data));
  } catch (error) {
    console.error(error);
  }
};

export const editCompany = (body, id) => async (dispatch) => {
  try {
    const { data } = await axios.put(`${BASE}/companies/${id}`, body);
    dispatch(updateCompany(data));
  } catch (error) {
    console.error(error)
  }
}

export const destroyCompany = (id) => async (dispatch) => {
  try {
    await axios.delete(`${BASE}/companies/${id}`);
    dispatch(deleteCompany(id));
  } catch (error) {
    console.error(error);
  }
}

