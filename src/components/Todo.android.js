import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, StyleSheet, Platform,
} from 'react-native';

const Todo = ({ title }) => (
  <View>
    {Platform.OS === 'ios' ? (
      <Text style={styles.text}>iOS</Text>
    ) : (
      <Text style={styles.text}>Android</Text>
    )}
  </View>
);

Todo.defaultProps = {
  title: 'Todo padrão',
};

Todo.propTypes = {
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontWeight: 'bold',
      },
      android: {
        fontSize: 24,
      },
    }),
  },
});

export default Todo;
