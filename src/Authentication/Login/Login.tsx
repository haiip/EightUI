import React from "react";
import { KeyboardAvoidingView } from "react-native";

import SocialLogin from "../../Authentication/components/SocialLogin";
import { Container, Text, Button } from "../../components";
import TextInput from "../../components/Form/Textinput";
import { Box } from "../../components/Theme";

const emailValidator = (email: string) =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

const passwordValidator = (password: string) => true;

const Login = () => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button variant="transparent" onPress={() => alert("Ny sida")}>
          <Box flexDirection="row">
            <Text variant="button" color="white">
              Dont have an account?
            </Text>
            <Text marginLeft="s" variant="button" color="primary">
              Sign up now!
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );

  // Lägg till keyboard viewing från react native //
  // Kolla  https://reactnative.dev/docs/keyboardavoidingview //

  return (
    <Container {...{ footer }}>
      <Box padding="xl">
        <Text variant="title2" marginBottom="m">
          {" "}
          Welcome back{" "}
        </Text>
        <Text variant="title3" textAlign="center" marginBottom="l">
          Use your login information below and login to your account
        </Text>
        <Box marginBottom="m">
          <TextInput
            icon="mail"
            placeholder="Enter your email"
            validator={emailValidator}
          />
        </Box>
        <TextInput
          icon="lock"
          placeholder="Enter your password"
          validator={passwordValidator}
        />
      </Box>
    </Container>
  );
};

export default Login;
