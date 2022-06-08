import axios from "axios";
const API = `http://localhost:4000/data`
const callAPI = async (id)=>{
    const response = await axios.get(`${API}/${id}`);
    return response.data;
}
export default callAPI;