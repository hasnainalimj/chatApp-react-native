import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Styles = StyleSheet.create({
  loaderWrapper: {
    width : "100%",
    height : height * 0.8,
    justifyContent : "center",
    alignItems : "center"  
  },
  parentOfAll : {
    width : "100%",
    height : height
  },
  userWrapper: {
    width : "100%",
    height : height * 0.15,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    flexDirection : "row",
    justifyContent : "flex-start",
    alignItems : "center"
  },
  profileWrapper: {
    width : width * 0.2,
    height : width * 0.2,
    borderRadius : 100,
    marginLeft : width * 0.05
  },
  profilePic: {
    width : "100%",
    height : "100%",
    borderRadius : 100,
    borderColor : "#000",
    borderWidth : 2
  },
  userName: {
    fontSize : width * 0.05,
    fontWeight : "bold",
    marginLeft : width * 0.05,
    color : "#000"
  }
});
