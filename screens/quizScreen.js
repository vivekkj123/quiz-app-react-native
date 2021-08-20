/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function quizScreen() {
  return (
    <View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Text style={styles.questionNo}>1/10</Text>
        <Text style={styles.timer}>10s</Text>
      </View>
      <View>
        <Text style={styles.Question}>Everything in React is a __________</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  questionNo: {
    color: 'red',
    fontSize: 25,
    margin: 20,
  },
  timer: {
    color: '#FFB802',
    fontWeight: '900',
    fontSize: 25,
    margin: 20,
    alignItems: 'flex-end',
  },
  Question: {
    fontSize: 30,
    margin: 25,
  },
});
