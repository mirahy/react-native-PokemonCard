import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  titulo: {
    color: '#000000',
  },
});

export default props => (
  <Text style={styles.titulo}> {props.route.params.id} </Text>
);
