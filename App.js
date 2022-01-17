import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import DrawerNav from "./Navigation/DrawerNavigation";
import StackNav from "./Navigation/StackNavigation";
import FindDoctors from "./Screens/FindDoctors/FindDoctors";
import Home from "./Screens/Home/Home";
import Specialists from "./Screens/Specialists/Specialists";

export default function App() {
  return (
    <NavigationContainer>
      <StackNav />
      {/* <DrawerNav /> */}
    </NavigationContainer>
  );
}
