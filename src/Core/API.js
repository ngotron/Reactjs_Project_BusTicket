import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;
const getAPI = async (id)=>{
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
}
export default getAPI;