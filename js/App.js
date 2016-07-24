import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Title from './Title';
import CategoryContainer from './CategoryContainer';
import QueryContainer from './QueryContainer';
import AnswerListContainer from './AnswerListContainer';
import StatContainer from './StatContainer';

const App = () => (
  <View style={styles.container}>
    <View style={styles.top}>
      <Title/>
      <CategoryContainer category={["문화", "인물", "이름", "질문"]}/>
      <QueryContainer/>
    </View>
    <View style={styles.bottom}>
      <AnswerListContainer/>
      <StatContainer stats={{"Round": 1, "GuessLeft": 0, "ThisRound": 0, "TotalScore": 0}}/>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  top: {
    flex: 1,
    justifyContent: 'space-around'
  },
  bottom: {
    flex:1,
    justifyContent: 'space-around'
  }
});

export default App;
