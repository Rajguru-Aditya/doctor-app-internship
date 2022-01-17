import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  customDrawer: {
    flex: 1,
  },
  customDrawerHeader: {
    height: 160,
    marginTop: 20,
    marginLeft: 10,
  },
  headerImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  textContainer: {
    marginLeft: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
  },
  editProfile: {
    fontSize: 16,
    marginVertical: 5,
    fontWeight: "bold",
    color: "#84DFFF",
  },
  profileComplete: {
    fontSize: 14,
    color: "#6ECB63",
  },
  customDrawerProfile: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    height: 100,
    padding: 10,
    flexDirection: "row",
    paddingBottom: 20,
  },
  practoPlus: {
    padding: 10,
  },
  practo: {
    fontSize: 16,
    fontWeight: "bold",
  },
  plus: {
    flexDirection: "row",
  },
  plusContainer: {
    backgroundColor: "#E28F83",
    height: 20,
    width: 40,
    alignItems: "center",
    marginLeft: 5,
    borderRadius: 5,
  },
  subtitle: {
    fontSize: 12,
    color: "#aaa",
  },
});

export default styles;
