import getCookie from "../lib/getCookie";
import { BASE_URL } from "./baseUrl";

const apiService = {
  async request(url: string, method: string, data?: any) {
    const authToken = getCookie("token");
    const headers: Record<string, string> = {
      credentials: "include",
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    };

    if (authToken) {
      headers["Authorization"] = `Bearer ${authToken}`;
    }

    let options: RequestInit = {
      method,
      headers,
    };

    if (method !== "GET" && data) {
      options.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(`${BASE_URL}${url}`, options);
      const responseData = await response.json();
      return responseData;
    } catch (error: any) {
      console.error("Error fetching data:", error);
      throw new Error(error.message);
    }
  },
};

export default apiService;
