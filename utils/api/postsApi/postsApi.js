import axios from "axios";
const SERVER_URL = "http://localhost:3001";

export async function createNewPost(post) {
  try {
    console.log(post);
    const response = await axios.post(`${SERVER_URL}/posts`, post);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
