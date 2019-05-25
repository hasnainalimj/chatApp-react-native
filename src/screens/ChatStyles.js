import { StyleSheet, Dimensions } from "react-native";

import { Colors } from "../../../constants/styles/color";

const { width, height } = Dimensions.get("window");

export const Styles = StyleSheet.create({
  container: {
    flex: 1
  },
  CoverPhotoContainer: {
    width: "100%",
    height: height * 0.3,
    backgroundColor: Colors.seekerPrimary,
    position: "relative",
    top: -height * 0.1,
    zIndex: -30
  },
  coverImageStyle: {
    width: width,
    height: "100%"
  },
  profileImgContainer: {
    position: "relative",
    top: -height * 0.25,
    alignItems: "center"
  },
  profileImgBtn: {
    width: width * 0.5,
    backgroundColor: Colors.lightGrey,
    height: height * 0.3,
    borderWidth: 2,
    borderColor: "#333",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.8,
    shadowRadius: 16.0,
    justifyContent : "center",
    alignItems : "center",
    elevation: 28
  },
  fieldsContainer: {
    position: "relative",
    top: -height * 0.16,
    paddingHorizontal: width * 0.1
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.1,
    borderColor: Colors.lightGrey,
    borderWidth: 0.5,
    width: "16%"
  },
  iconStyle: {
    width : 25,
    height : 25
  },
  inputStyle: {
    borderRadius: 6,
    height: height * 0.1,
    marginBottom : height * 0.03
  },
  buttonsWrapper: {
    width : "100%",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center"
  },
  parentOfButtons: {
    width : width * 0.5,
    height : height * 0.14,
    marginTop : height * 0.03
  },
  profileBtns: {
    width : "100%",
    height : "100%"
  },
  pickerContainer: {
    alignSelf: "center",
    borderColor: "#bfc0c1",
    paddingRight: height * 0.02,
    borderRadius: 6,
    height: height * 0.1,
    marginBottom : height * 0.03
  },
});
