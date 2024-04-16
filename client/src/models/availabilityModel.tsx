import axios from "axios";

const API_URL = "http://localhost:7070/";

export const createAvailability = () => {
  return axios
    .post(`${API_URL}api/availability/create`)
    .then((response: any) => {
      if (response && response.data && response.data.hash)
        return response.data.hash;
      else return null;
    })
    .catch((error) => {
      console.error(error);
    });
};
