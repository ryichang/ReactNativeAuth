import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAeNk8Ia5i4xvW-y-HGDYYcngNaDi_17-Y',
      authDomain: 'react-7372d.firebaseapp.com',
      databaseURL: 'https://react-7372d.firebaseio.com',
      storageBucket: 'react-7372d.appspot.com',
      messagingSenderId: '928789320841'
  });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }

    if (this.state.loggedIn) {
      return (
        <Button>
          Log Out
        </Button>
      );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    )
  };
};

export default App;
