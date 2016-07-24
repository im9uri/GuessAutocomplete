import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import { selectCategory, selectQuestion } from './actions';
import { getQuestion } from '../data/Data';

class CategoryContainer extends Component {
  handlePress(subject) {
    this.props.dispatch(selectCategory(subject));
    this.props.dispatch(selectQuestion(getQuestion(subject)));
  }

  render() {
    return (
      <View style={styles.parent}>
        <Text style={styles.basicFont}> 카테고리를 선택하세요 </Text>
        <View style={styles.buttonContainer}>
          {this.props.category.map((subject) =>
            <Button key={subject} style={styles.button}
                    onPress={() => this.handlePress(subject)}>{subject}
            </Button>)}
        </View>
      </View>
    );
  }
}




CategoryContainer = connect()(CategoryContainer);

const styles = StyleSheet.create({
  parent: {
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    margin: 10
  },
  button: {
    margin: 10
  },
  basicFont: {
    fontSize: 20
  }
});

export default CategoryContainer;
