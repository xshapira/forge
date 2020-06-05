import { userApi } from "./api";

/**
 * Perform a login
 *
 * @return User Info
 */
const login = async (username, password) => {
  const response = await userApi.post("token/", {
    username: username,
    password: password
  });

  const result = response.data.result;

  return {
    token: result.access
  };
};

export { login };
