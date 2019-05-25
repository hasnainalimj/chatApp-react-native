import React, { Component } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator , Image } from "react-native";

import { getAllUsers } from "../config/settings";
import { Styles } from "./HomeStyles";
import { ScrollView } from "react-native-gesture-handler";

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);

    this.state = {
      loader: true,
      allUsers: []
    };
  }

  componentDidMount() {
    this.fetchedUsers();
  }

  fetchedUsers = () => {
    getAllUsers()
      .then(res => {
        const arr = [];
        res.forEach(doc => {
          arr.push(doc.data())
          console.log(doc.data())
        });

        console.log(arr);
        this.setState({
          loader : false,
          allUsers : arr
        })
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  render() {
    const { loader, allUsers } = this.state;
    return (
      <View>
        {loader ? (
          <View style={Styles.loaderWrapper}>
            <ActivityIndicator size="large" color="#000" />
          </View>
        ) : (
          <ScrollView contentContainerStyle={Styles.parentOfAll}>
          {allUsers.map( (value , index) => {
            return <TouchableOpacity style={Styles.userWrapper}>
            <View style={Styles.profileWrapper}>
            <Image
            source={ require("../../assets/images/profile.jpg") }
            style={Styles.profilePic}
            />
            </View>
            <Text style={Styles.userName}>{value.name}</Text>
            </TouchableOpacity>
          })}
          </ScrollView>
        )}
      </View>
    );
  }
}
