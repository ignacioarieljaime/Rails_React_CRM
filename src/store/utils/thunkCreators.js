import axios from "axios";

import { gotUser, setFetchingStatus } from "../user";


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
    console.log(data);
    dispatch(gotUser(data))
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(setFetchingStatus(false));
  }
}

export const login = (credentials) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:3000/api/login", credentials)
    localStorage.setItem("vc-crm-token", data.token);
    localStorage.setItem("token-id", data.id);
    
    dispatch(gotUser(data));
  } catch (error) {
    console.error(error);
    dispatch(gotUser({ error: error.response.data.error || "Server Error" }));
  }
}

export const logout = (id) => async (dispatch) => {
  const token = localStorage.getItem("vc-crm-token");
  const tokenId = localStorage.getItem("token-id");
  try {
    const { data } = await axios.delete(`http://localhost:3000/api/login/${tokenId}`,{
      headers: {
        'Accept': 'application/json',
				'Authorization': `Bearer ${token}`
      }
    }
    )
    localStorage.removeItem("vc-crm-token");
    localStorage.removeItem("token-id");
    dispatch(gotUser({}));
  } catch (error) {
    console.error(error);
  }
}