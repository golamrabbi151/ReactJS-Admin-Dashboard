
const initState = {
  token: null,
  isLoggedIn: false,
  loading: false,
  error: null
};
export default function (state = initState, action) {
  switch (action.type) {
    case "SIGNIN_SUCCESS":
      const nstate = {
        ...state,
        token: action.payload.token,
        profile: action.payload.profile,
        isLoggedIn: true,
      };
      localStorage.setItem("auth", JSON.stringify(nstate));
      return nstate;

    case "LOGOUT_SUCCESS":
      localStorage.removeItem("auth")
      return {
        ...state,
        token: null,
        profile: null,
        isLoggedIn: false,
        error: null
      };

    case 'LOGOUT_ERROR':
      console.log('logout error')
      return { ...state, authError: action.payload.error };

    case 'SIGNIN_ERROR':
      console.log('signin error')
      return { ...state, authError: action.payload.error };

    case 'SIGNUP_ERROR':
      console.log('signup error')
      return { ...state, authError: action.payload.error };

    default:
      return state;
  }
}
