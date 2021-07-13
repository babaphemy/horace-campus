import { AUTH, BASE_URL } from "../util/CONSTANTS";

export const getFreeCourses = async () => {
  const response = await fetch(`${BASE_URL}course/lessthan/1`, AUTH);
  if (!response.ok) {
    return { error: response.status };
  }
  const data = await response.json();
  return { data };
};
