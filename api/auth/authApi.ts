import apiService from "../apiService";
import axios from "axios";

export const registerUserApi = async (userData: any) => {
  try {
    const data = await apiService.request("/register", "POST", userData);
    return data;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const loginUserApi = async (userData: any) => {
  try {
    const data = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, userData);
    return data;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const forgotPasswordApi = async (email: any) => {
  try {
    const data = await apiService.request("/password/forgot", "POST", email);
    return data;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const resetPasswordApi = async (email: any, resetId: any) => {
  try {
    const data = await apiService.request(
      `/password/reset/${resetId}`,
      "PUT",
      email
    );
    return data;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

export const otpVerificationApi = async (user: any) => {
  try {
    const data = await apiService.request("/otp", "POST", user);
    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};
