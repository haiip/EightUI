import React, { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { interpolateColor, useScrollHandler } from "react-native-redash";
import Animated, { divide, multiply } from "react-native-reanimated";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot";

const BORDER_RADIUS = 75;
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,

    borderBottomRightRadius: BORDER_RADIUS,
  },

  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },

  pagination: {
    ...StyleSheet.absoluteFillObject,
    width,
    height: BORDER_RADIUS,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

const slides = [
  {
    title: "Eightsoups",
    subtitle: "Eight Soups Is Like ",
    description:
      "Family each ingredient enhances the others; each batch has its own characteristics; and it needs time to simmer to reach full flavor.",
    color: "#BFEAF5",
    picture: require("../assets/Logo1.png"),
  },
  {
    title: "Tasteful",
    subtitle: "Spice Is Life",
    description:
      " He who controls the spice controls the universe - EightSoups ",
    color: "#BEECC4",
    picture: require("../assets/spices2.png"),
  },
  {
    title: "Healthy",
    subtitle: "We Bring You Healthy Food!",
    description:
      "“Keeping your body healthy is an expression of gratitude to the whole cosmos- the trees, the clouds, everything.”",
    color: "#FFE4D9",
    picture: require("../assets/healthy.png"),
  },
  {
    title: "Fast Delivery",
    subtitle: "WE LOVE THE ENVIRONMENT",
    description:
      "That doesn't mean we cant deliver fast without hurting the environment  ",
    color: "#FFDDDD",
    picture: require("../assets/Delivery.png"),
  },
];

export const Onboarding = () => {
  const scroll = useRef<Animated.ScrollView>(null);

  // TODO scrollHandler useScrollHandler?
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View style={{ ...StyleSheet.absoluteFillObject }} />

        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ subtitle, description }, index) => (
              <Subslide
                key={index}
                onPress={() => {
                  if (scroll.current) {
                    scroll.current
                      .getNode()
                      .scrollTo({ x: width * (index + 1), animated: true });
                  }
                }}
                last={index === slides.length - 1}
                {...{ subtitle, description }}
              />
            ))}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};
