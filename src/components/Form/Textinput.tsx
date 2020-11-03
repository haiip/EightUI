import React, { useState } from "react";
import theme, { Box } from "../Theme";
import {
  TextInput as FORMTextInput,
  StyleSheet,
  TextInputProps as TextInputasFORMTextInput,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

interface TextInputProps extends FORMTextInputProps {
  icon: string;
  validator: (input: string) => boolean;
}
const SIZE = theme.borderRadii.m * 2;
const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = ({ icon, validator, ...props }: TextInputProps) => {
  const [input, setInput] = useState("");
  const [state, setState] = useState<InputState>(Pristine);
  const Recolor: keyof typeof theme.colors =
    state === Pristine ? "text" : state === Valid ? "primary" : "danger";
  const color = theme.colors[Recolor];
  const onChangeText = (text: string) => {
    setInput(text);
    if (state !== Pristine) {
      validate();
    }
  };
  const validate = () => {
    const valid = validator(input);
    setState(valid);
  };

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
          onBlur={validate}
          {...{ onChangeText }}
          {...props}
        />
      </Box>

      {(state === Valid || state === Invalid) && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius="xl"
          justifyContent="center"
          alignItems="center"
          backgroundColor={state === Valid ? "primary" : "danger"}
        >
          <Icon
            name={state === Valid ? "check" : "x"}
            color="white"
            size={16}
          />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
