import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#516BEB",
    height: 30,
    marginHorizontal: 10,
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    height: 25,
  },
  backBtnIcon: {
    height: 25,
    width: 20,
  },
  backBtnText: {
    fontSize: 16,
    color: "#fff",
    height: 25,
  },
  title: {
    height: 30,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  location: {
    flexDirection: "row",
    height: 30,
  },
  locationText: {
    color: "#fff",
    fontSize: 16,
  },
  locationIcon: {
    height: 20,
    width: 20,
  },
});
export default styles;
