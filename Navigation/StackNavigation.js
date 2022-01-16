import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FindDoctors from "../Screens/FindDoctors/FindDoctors";
import Home from "../Screens/Home/Home";
import Specialists from "../Screens/Specialists/Specialists";

const Stack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FindDoctors" component={FindDoctors} />
      <Stack.Screen name="Specialists" component={Specialists} />
    </Stack.Navigator>
  );
}

export default StackNav;
