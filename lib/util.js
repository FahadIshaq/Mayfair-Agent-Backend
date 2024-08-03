// Utility functions to safely access localStorage
export const getLocalStorageItem = (key) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
  return null;
};

export const setLocalStorageItem = (key, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
};

export const removeLocalStorageItems = (key) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};
