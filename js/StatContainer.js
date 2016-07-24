import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class StatContainer extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.child}>
          <Text>Round</Text>
          <Text>{this.props.stats.Round}</Text>
        </View>
        <View style={styles.child}>
          <Text>Guess Left</Text>
          <Text>{this.props.stats.GuessLeft}</Text>
        </View>
        <View style={styles.child}>
          <Text>This Round</Text>
          <Text>{this.props.stats.ThisRound}</Text>
        </View>
        <View style={styles.child}>
          <Text>Total Score</Text>
          <Text>{this.props.stats.TotalScore}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5
  },
  child: {
    alignItems: 'center',
    margin: 5
  }
});

export default StatContainer;
