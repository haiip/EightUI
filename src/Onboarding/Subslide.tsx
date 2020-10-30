import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "../components";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../components/Theme";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
    flex: 1,
  },
  subtitle: {
    fontFamily: "SFProText-Semibold",
    fontSize: 30,
    lineHeight: 30,
    marginBottom: 12,
    textAlign: "center",
    color: "#0C0D34",
  },

  description: {
    fontFamily: "SFProText-Regular",
    fontSize: 16,
    color: "#0C0D34",
    lineHeight: 24,
    textAlign: "center",
    textShadowRadius: 1,
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
      <Text variant="title1">{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Let's Order!" : "Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
};

export default Sublide;
