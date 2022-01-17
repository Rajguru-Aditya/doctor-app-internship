import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FindDoctors from "../Screens/FindDoctors/FindDoctors";
import Home from "../Screens/Home/Home";
import Specialists from "../Screens/Specialists/Specialists";
import { Ionicons } from "@expo/vector-icons";
import CustomDrawer from "../Components/CustomDrawer/CustomDrawer";

const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Appointments"
        component={Home}
        options={{
          title: "Appointments",
          drawerIcon: () => (
            <Ionicons name="time" size={22} color={"#4FBDBA"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Test Bookings"
        component={Home}
        options={{
          title: "Test Bookings",
          drawerIcon: () => (
            <Ionicons name="water" size={22} color={"#4FBDBA"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={Home}
        options={{
          title: "Orders",
          drawerIcon: () => (
            <Ionicons name="cube" size={22} color={"#4FBDBA"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Consultations"
        component={Home}
        options={{
          title: "Consultations",
          drawerIcon: () => (
            <Ionicons name="chatbubbles" size={22} color={"#4FBDBA"} />
          ),
        }}
      />
      <Drawer.Screen
        name="My Doctors"
        component={FindDoctors}
        options={{
          title: "My Doctors",
          drawerIcon: () => (
            <Ionicons name="medkit" size={22} color={"#4FBDBA"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Medical records"
        component={Home}
        options={{
          title: "Medical records",
          drawerIcon: () => (
            <Ionicons name="newspaper" size={22} color={"#4FBDBA"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Reminders"
        component={Home}
        options={{
          title: "Reminders",
          drawerIcon: () => (
            <Ionicons name="alarm" size={22} color={"#4FBDBA"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Payments and Health cash"
        component={Home}
        options={{
          title: "Payments and Health cash",
          drawerIcon: () => (
            <Ionicons name="wallet" size={22} color={"#4FBDBA"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Read Health Articles"
        component={Home}
        options={{
          title: "Read Health Articles",
          drawerIcon: () => (
            <Ionicons name="document-outline" size={22} color={"#aaa"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Help Center"
        component={Home}
        options={{
          title: "Help Center",
          drawerIcon: () => (
            <Ionicons name="help-circle-outline" size={22} color={"#aaa"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Home}
        options={{
          title: "Settings",
          drawerIcon: () => (
            <Ionicons name="settings-outline" size={22} color={"#aaa"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Are you a doctor?"
        component={Home}
        options={{
          title: "Are you a doctor?",
          drawerIcon: () => <Ionicons name="person" size={22} color={"#aaa"} />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNav;
