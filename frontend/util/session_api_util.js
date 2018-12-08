
export const signupUser = (user) => (
  $.ajax({
    url: '/api/users',
    method: 'post',
    data: {user}
  })
)

export const loginUser = (user) => (
  $.ajax({
    url: '/api/session',
    method: 'post',
    data: {user}
  })
)
export const logoutUser = () => (
  $.ajax({
    url: '/api/session',
    method: 'delete'
  })
)