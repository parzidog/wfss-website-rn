import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import {
//   loginUser,
// } from "../features/userSlice";

const Admin = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [login, setLogin] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(loginUser({ login }))
    //   .then((res) => {
    //     window.localStorage.token = res.payload.token;
    //     console.log("res", res.payload.token);
    //     navigate("/admin/dashboard");
    //   })
  };
  const handleChange = (prop) => (event) => {
    let value = event.target.value;
    if (prop === "username") {
      value = value.toLowerCase();
    }
    setLogin({
      ...login,
      [prop]: value,
    });
  };

  return (
    <View id="admin">
      <View className="login">
        <Text>Admin Login</Text>
        <hr />
        <form onSubmit={handleSubmit} autoComplete="on">
          <View className="box">
            <label htmlFor="username" className="fl fontLabel">
              {" "}
              Username:{" "}
            </label>
            <View className="fr">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="textBox"
                autoFocus="on"
                required
                onChange={handleChange("username")}
              />
            </View>
            <View className="clr"></View>
          </View>

          <View className="box">
            <label htmlFor="password" className="fl fontLabel">
              {" "}
              Password:{" "}
            </label>
            <View className="fr">
              <input
                type="password"
                required
                name="password"
                placeholder="Password"
                className="textBox"
                onChange={handleChange("password")}
              />
            </View>
            <View className="clr"></View>
          </View>

          <View className="box">
            <input
              type="submit"
              name="login"
              className="submit"
              value="Login"
            />
          </View>
        </form>
      </View>
    </View>
  )
}

export default Admin