export const requestHeaders = () => {
  const token = import.meta.env.VITE_CREDENTIAL_TOKEN;
  
  return{
    headers: {
      Authorization: `token ${token}`
    },
  }
}