import apiService from "../apiService";

export const contactApi = async (userData: any) => {
  try {
    const data = await apiService.request(
      "/contact/add-contact",
      "POST",
      userData
    );
    return data;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const allContactsApi = async () => {
  try {
    const data = await apiService.request("/contact/all-contacts", "GET");
    return data;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const singleContactApi = async (id: string) => {
  try {
    const data = await apiService.request(
      `/contact/single-contact/${id}`,
      "GET"
    );
    return data;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const deleteContactApi = async (id: string) => {
  try {
    const data = await apiService.request(
      `/contact/single-contact/${id}`,
      "DELETE"
    );
    return data;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
