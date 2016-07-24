import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux'
import Button from 'react-native-button';
import { submitQuery } from './actions';

class QueryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {query: ''};
  }

  buildQuery(query) {
    //todo clean query
    return this.props.question + this.state.query;
  }

  handlePress(query) {
    this.props.dispatch(submitQuery(this.buildQuery(query)));
    this.setState({query: ''});
    this.textInput.setNativeProps({text: ''}); //clear TextInput
  }

  render() {
    return (
      <View style={styles.parent}>
        <Text>How does Google autocomplete this query?</Text>
        <View style={styles.query}>
          <Text>{this.props.question}</Text>
          <TextInput ref={component => this.textInput = component}
                     style={styles.textInput} placeholder="Type here"
                     onChangeText={(query) => this.setState({query})} />
          <Button onPress={() => this.handlePress(this.state.query)}>Click</Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    question: state.questionReducer.question
  }
}

QueryContainer = connect(mapStateToProps)(QueryContainer);

const styles = StyleSheet.create({
  parent: {
    alignItems: 'center',
    margin: 3
  },
  query: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 3
  },
  textInput: {
    width: 200,
    height: 40
  }
});

export default QueryContainer;
