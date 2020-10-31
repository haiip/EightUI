import React from "react";
import { Image, Dimensions } from "react-native";
import { Button } from "../components";
import theme, { Box, Text } from "../components/Theme";

const { width } = Dimensions.get("window");
const picture = {
  src: require("../assets/Nylogga1.png"),
  width: 1500,
  height: 1600,
};

export const assets = [picture.src];

export const Welcome = () => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl"
          flex={1}
        >
          <Text variant="title2">Let's get started</Text>
          <Text variant="body" textAlign="center">
            Login in to your account or signup for a better experience
          </Text>
          <Button variant="primary" label="Already a member" />
          <Button label="Join us it's free" />
          <Button variant="transparent" label="Forgot Password" />
        </Box>
      </Box>
    </Box>
  );
};
