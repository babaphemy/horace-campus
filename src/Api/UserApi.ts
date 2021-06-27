import { tLogin, tUser } from "../util/types";
import { BASE_URL, POST_SETTINGS } from "../util/CONSTANTS";
export async function userLogin(user: tLogin) {
  try {
    const res = await fetch(`${BASE_URL}user/login`, POST_SETTINGS(user));
    const data = await res.json();
    return { data };
  } catch (error) {
    return { error };
  }
}
export async function userReg(user: tUser) {
  try {
    const res = await fetch(`${BASE_URL}user/add`, POST_SETTINGS(user));
    const data = await res.json();
    return { data };
  } catch (error) {
    return { error };
  }
}
