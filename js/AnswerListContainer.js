import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import AnswerContainer from './AnswerContainer';

class AnswerListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {correctIndexList: []};
  }

  componentWillReceiveProps(nextProps) {
    if(!!nextProps.answers) {
      const index = nextProps.answers.findIndex(item => item === nextProps.query);
      if(index !== -1) {
        this.setState({correctIndexList: [...this.state.correctIndexList, index]})
      }
    }
  }

  getAnswerContainers() {
    const container = this.props.answers ? this.props.answers.map((answer, i) =>
      (this.state.correctIndexList.findIndex(item => item === i) !== -1 ) ?
      <AnswerContainer key={i} answer={answer} index={i}/> :
      <AnswerContainer key={i} index={i}/> ) : null;;
    return container;
  }

  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.answer}>
          {this.getAnswerContainers()}
        </View>
        <View style={styles.wrong}>

        </View>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    answers: state.questionReducer.answerList,
    query: state.queryReducer
  }
}

AnswerListContainer = connect(mapStateToProps)(AnswerListContainer);

const styles = StyleSheet.create({
  parent: {
    height:200,
    backgroundColor: 'yellow'
  },
  wrong: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue'
  },
  answer: {
    // flex:1,
    // backgroundColor: 'red'
    // width: 100,
    // height:100,
    // position: 'relative',
    // backgroundColor: 'red'
  }
});

export default AnswerListContainer;
