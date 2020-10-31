import { RouteProp, ParamListBase } from "@react-navigation/native";

export interface StackNavigationProp<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string
> {
  navigate(arg0: string);
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

export type Routes = {
  Onboarding: undefined;
  Welcome: undefined;
  Login: undefined;
};
