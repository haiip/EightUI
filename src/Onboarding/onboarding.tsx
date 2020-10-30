import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { interpolateColor, useScrollHandler } from "react-native-redash";
import Animated, {
  divide,
  Extrapolate,
  interpolate,
  multiply,
} from "react-native-reanimated";

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

  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    borderBottomRightRadius: BORDER_RADIUS,
  },

  picture: {
    ...StyleSheet.absoluteFillObject,

    width: undefined,
    height: undefined,
    borderBottomRightRadius: BORDER_RADIUS,
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
    picture: {
      src: require("../assets/Logo1.png"),
      width: 2513,
      height: 3583,
    },
  },
  {
    title: "Tasteful",
    subtitle: "Spice Is Life",
    description:
      " He who controls the spice controls the universe - EightSoups ",
    color: "#BEECC4",
    picture: {
      src: require("../assets/spices2.png"),
      width: 2500,
      height: 4000,
    },
  },
  {
    title: "Healthy",
    subtitle: "We Bring You Healthy Food!",
    description:
      "“Keeping your body healthy is an expression of gratitude to the whole cosmos- the trees, the clouds, everything.”",
    color: "#FFE4D9",
    picture: {
      src: require("../assets/running.png"),
      width: 2300,
      height: 3000,
    },
  },
  {
    title: "Fast Delivery",
    subtitle: "WE LOVE THE ENVIRONMENT",
    description:
      "That doesn't mean we cant deliver fast without hurting the environment  ",
    color: "#FFDDDD",
    picture: {
      src: require("../assets/Delivery.png"),
      width: 1757,
      height: 2551,
    },
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
        {slides.map(({ picture }, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 0.7) * width,
              index * width,
              (index + 0.7) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View style={[styles.underlay, { opacity }]} key={index}>
              <Image source={picture.src} style={styles.picture} />
            </Animated.View>
          );
        })}

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
