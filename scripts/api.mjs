const API_BASE_URL = "https://nf-api.onrender.com/api/v1"

const authorization = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....',
    },
  }
  const response = await fetch(`${API_BASE_URL}/api/v1/social/posts`, authorization)
  const data = await response.json()

  console.log(data);