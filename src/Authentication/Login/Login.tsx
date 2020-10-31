import React from "react";
import { Button, View } from "react-native";

import SocialLogin from "../../Authentication/components/SocialLogin";
import { Container } from "../../components";

const Login = () => {
  const footer = (
    <>
      <SocialLogin />
    </>
  );
  return <Container {...{ footer }}></Container>;
};

export default Login;
