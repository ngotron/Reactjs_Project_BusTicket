import axios from "axios";

const API_URL_DATA = process.env.REACT_APP_API_URL + "/data";
const API_URL_SEATS = process.env.REACT_APP_API_URL + "/seats";

const getAPI = async (id)=>{
    const response = await axios.get(`${API_URL_DATA}/${id}`);
    return response.data;
}

const getAPISeats = async (endPoint)=>{
    
    const response = await axios.get(`${API_URL_SEATS}/${endPoint}`);
    return response.data;
}

const patchAPISeats = async (endPoint,seat)  => {
    const response = await axios.patch(`${API_URL_SEATS}/${endPoint}`,seat);
    return response.status;
}
export {getAPI,getAPISeats,patchAPISeats};
