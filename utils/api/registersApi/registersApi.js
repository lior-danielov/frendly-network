import axios from "axios";
const SERVER_URL = "http://localhost:3001";

export async function createNewregister(register) {
  try {
    console.log(register);
    const response = await axios.post(`${SERVER_URL}/registers`, register);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
