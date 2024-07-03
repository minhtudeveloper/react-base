import Cookies, { CookieAttributes } from "js-cookie";

export const getCookie = (name: string) => {
  return Cookies.get(name) || "";
};

export const deleteCookie = (name: string) => {
  Cookies.remove(name);
};

export const setCookie = (
  name: string,
  value: string,
  options?: CookieAttributes
) => {
  Cookies.set(name, value, options);
};
