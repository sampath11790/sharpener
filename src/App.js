import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
// import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Welcome from "./components/Welcome/Welcome";
import HomeElement from "./components/Home/Home";
import ProfileUpdate from "./components/ProfileUpdate/ProfileUpdate";
import { Route, Switch, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthsliceAction } from "./storecontainer/Authslice";
function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  const login = useSelector((state) => state.auth.login);
  let loginLocaldata = localStorage.getItem("login") === "true";
  useEffect(() => {
    if (login === true) {
      history.push("/home");
    } else {
      history.push("/login");
    }
  }, [login]);
  useEffect(() => {
    if (loginLocaldata) {
      history.push("/home");
      dispatch(AuthsliceAction.loginmeth());
    } else {
      history.push("/login");
    }
  }, []);
  return (
    <div>
      {(loginLocaldata || login) && <Header></Header>}
      <Switch>
        <Route path="/login">
          <Form></Form>
        </Route>

        <Route path="/home">
          <HomeElement />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/update">
          <ProfileUpdate />
        </Route>
        {/* <ProfileUpdate />
      { <Welcome />} */}
      </Switch>
    </div>
  );
}

export default App;
