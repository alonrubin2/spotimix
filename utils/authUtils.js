export const getAuth = async (setToken = () => {}) => {
  const auth = await fetch("/api/auth/getToken");
  const { access_token } = await auth.json();
  return access_token;
};
