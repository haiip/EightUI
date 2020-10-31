import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "../components";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
    flex: 1,
  },
  subtitle: {
    marginBottom: 12,
    textAlign: "center",
    color: "#0C0D34",
  },

  description: {
    color: "#0C0D34",
    textAlign: "center",
    marginBottom: 40,
  },
});

interface SublideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const Sublide = ({ subtitle, description, last, onPress }: SublideProps) => {
  return (
    <View style={styles.container}>
      <Text variant="title2">{subtitle}</Text>
      <Text variant="body" style={styles.description}>
        {description}
      </Text>
      <Button
        label={last ? "Awesome!" : "Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
};

export default Sublide;
