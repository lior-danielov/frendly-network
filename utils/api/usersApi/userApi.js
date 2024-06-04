import axios from "axios";
const SERVER_URL = "http://localhost:3001";

export async function createNewUser(user) {
  try {
    console.log(user);
    const response = await axios.post(`${SERVER_URL}/users`, user);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}