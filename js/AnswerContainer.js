import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class AnswerContainer extends Component {
  render() {
    return (
      <View style={styles.parent}>
        {(this.props.answer) ?
          <Text>{this.props.answer}</Text> :
          <Text>{this.props.index + 1}</Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    alignItems: 'center',
    margin: 5
  }
});

export default AnswerContainer;
