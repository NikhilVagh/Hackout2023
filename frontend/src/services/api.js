import axios from "axios";

const API_URI = "http://127.0.0.1:8000";
// const API_URI = "https://onlinejudge-ewmi.onrender.com";

export const Login = async (data) => {
  try {
    const response = await axios.post(`${API_URI}/login`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log("Error while login", error.message);
  }
};

export const allocateResources = async (event, data) => {
  event.preventDefault();
  console.log("form data", data);
  const reqData = {
    rCount: data.redCount,
    yCount: data.yellowCount,
    gCount: data.greenCount,
    log: data.longitude,
    lat: data.latitude,
  };
  try {
    const response = await axios.post(
      `${API_URI}/hostpitalAllocation`,
      reqData,
      {
        withCredentials: true,
      }
    );

    console.log(response);
    return response.data;
  } catch (error) {
    console.log("Error while allocating resources", error.message);
  }
};
