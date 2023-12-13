import fetcher from "@/api/fetch";

export const postSignup = ({ name, email, password }) => {
  return fetcher('/api/signup', {
    method: 'POST',
    body: JSON.stringify({ name, email, password })
  })
}
