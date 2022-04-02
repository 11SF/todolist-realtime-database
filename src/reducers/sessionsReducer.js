const sessionsReducer = (
  state = {
    userData: "",
    isLogin: false,
  },
  action
) => {
  switch (action.type) {
    case "LOGIN":
      return (state = {
        userData: action.userData,
        isLogin: true,
      });
    case "LOGOUT":
      return (state = {userData: "", isLogin: false});
    default:
      return state;
  }
};

export default sessionsReducer;
