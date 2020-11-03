import React from "react";
import { Box, useTheme } from "../Theme";
import {
  TextInput as FORMTextInput,
  StyleSheet,
  TextInputProps as FORMTextInputProps,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

interface TextInputProps extends FORMTextInputProps {
  icon: string;
  touched?: boolean;
  error?: string;
}

const TextInput = ({ icon, touched, error, ...props }: TextInputProps) => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.m * 2;
  const Recolor = !touched ? "text" : error ? "danger" : "primary";
  const color = theme.colors[Recolor];

  return (
    <Box
      flexDirection="row"
      height={48}
      alignItems="center"
      borderRadius="l"
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={Recolor}
    >
      <Box padding="s">
        <Icon name={icon} size={16} {...{ color }} />
      </Box>
      <Box flex={1}>
        <FORMTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          {...props}
        />
      </Box>

      {touched && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius="xl"
          justifyContent="center"
          alignItems="center"
          backgroundColor={!error ? "primary" : "danger"}
        >
          <Icon name={!error ? "check" : "x"} color="white" size={12} />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
