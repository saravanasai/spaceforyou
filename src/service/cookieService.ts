import Cookies from "js-cookie";

export const setCookie = (name: string, value: string | object) => {
  return Cookies.set(name, value,{ sameSite: 'strict' });
};

export const getCookie = (name: string) => {
  return Cookies.get(name);
};

export const removeCookie = (name: string) => {
  return Cookies.remove(name);
};
