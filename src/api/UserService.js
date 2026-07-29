const BASE_URL = "https://dummyjson.com/users";

export default class UserService {
  static async getUsers(params = {}) {
    const queryParams = new URLSearchParams(params).toString();
    const url = queryParams ? `${BASE_URL}?${queryParams}` : BASE_URL;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  static async filter(key, value, params = {}) {
    const queryParams = new URLSearchParams({
      key,
      value,
      ...params,
    }).toString();
    const url = `${BASE_URL}/filter?${queryParams}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
}
