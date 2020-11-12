import React from "react";
import * as Yup from "yup";
import { Container, Text, Button } from "../../components";
import TextInput from "../../components/Form/Textinput";
import { Box } from "../../components/Theme";
import Checkbox from "../../components/Form/Checkbox";
import { useFormik } from "formik";
import Footer from "../components/Footer";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too lONG!")
    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
});

const Login = () => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    values,
    setFieldValue,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: "", password: "", remember: true },
    onSubmit: (values) => console.log(values),
  });
  const footer = (
    <Footer
      title="Dont have an account?"
      action="Sign up now!"
      onPress={() => true}
    />
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
        <Box>
          <Box marginBottom="m">
            <TextInput
              icon="mail"
              placeholder="Enter your email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
              touched={touched.email}
            />
          </Box>
          <TextInput
            icon="lock"
            placeholder="Enter your password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            error={errors.password}
            touched={touched.password}
            secureTextEntry
          />
          <Box flexDirection="row" justifyContent="space-between">
            <Checkbox
              label="Remember me"
              checked={values.remember}
              onChange={() => setFieldValue("remember", !values.remember)}
            />
            <Button variant="transparent" onPress={() => true}>
              <Text color="primary">Forgot Password</Text>
            </Button>
          </Box>
          <Box alignItems="center" marginTop="m">
            <Button
              variant="button1"
              onPress={handleSubmit}
              label="Log into your account"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
