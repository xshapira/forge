import { userApi } from './api';

/**
 * Perform a login
 *
 * @return User Info
 */
const login = async (email, password) => {
  const response = await userApi.post('account/token/', {
    email: email,
    password: password,
  });

  const result = response.data.result;

  return {
    token: result.access,
  };
};

export { login };
