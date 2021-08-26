import React from 'react';
import {StyleSheet, Text, View, Linking} from 'react-native';
import {Divider} from 'react-native-elements';
import PieChart from 'react-native-pie-chart';
import {Button} from 'react-native-elements';
import {useStateValue} from '../stateProvider';
const congratScreen = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [{user, score}] = useStateValue();
  const widthAndHeight = 150;
  const series = [score, 10 - score];
  const sliceColor = ['#00FF00'];
  return (
    <View style={styles.cogratsScreen}>
      <Text style={styles.congratsText}>
        Congratulations {user}, You've scored {score} points
      </Text>
      <PieChart
        widthAndHeight={widthAndHeight}
        series={series}
        sliceColor={sliceColor}
        doughnut={true}
        coverRadius={0.55}
        coverFill={'#FFF'}
      />
      <Divider width={100} />
      <Text style={styles.congratsText}>Liked it?</Text>
      <Button
        title="Give a ⭐ on github"
        type="outline"
        onPress={() => {
          Linking.openURL(
            'https://www.github.com/vivekkj123/quiz-app-react-native',
          );
        }}
      />
    </View>
  );
};

export default congratScreen;

const styles = StyleSheet.create({
  cogratsScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  congratsText: {
    fontSize: 26,
    textAlign: 'center',
  },
});
