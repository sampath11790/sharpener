import { AuthsliceAction } from "./Authslice";
let signupurl =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCehQErMKl9OqHKw2jyLofdyeT-4HqfB6U";
let loginurl =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCehQErMKl9OqHKw2jyLofdyeT-4HqfB6U";
//reusable function
const Signupfun = async (url, obj) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (data.error) {
    alert(data.error.message);
    throw new Error(data.error.message);
  }
  //   console.log(data);
  return data;
};

export const MiddlewarAuth = ({ obj, text }) => {
  return async (dispatch) => {
    try {
      //   console.log(obj, text);
      //
      let id;
      let email;
      if (text == "login") {
        const fetchdata = await Signupfun(loginurl, obj);

        id = fetchdata.idToken;
        email = fetchdata.email;

        // console.log(fetchdata);
      } else {
        const fetchdata = await Signupfun(signupurl, obj);
        id = fetchdata.idToken;
        // console.log(fetchdata);
      }
      id && localStorage.setItem("login", true);
      id && localStorage.setItem("id", id);
      email && localStorage.setItem("email", email);
      dispatch(AuthsliceAction.loginmeth());
      //   console.log("data downloaded", fetchdata);
    } catch (error) {
      console.log(error);
    }
  };
};

export const signin = (obj) => {
  return async () => {};
};
