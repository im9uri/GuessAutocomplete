import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Title extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.basicFont}> 자동완성 맞추기 (How Google are You?)</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center'
  },
  basicFont: {
    fontSize: 20
  }
});

export default Title;
