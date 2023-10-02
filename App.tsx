import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {ServiceStoreWithZustand} from './src/store/testStore';

const App = () => {
  const bears = ServiceStoreWithZustand(state => state.bears);
  const increasePopulation = ServiceStoreWithZustand(
    state => state.increasePopulation,
  );
  const removeAllBears = ServiceStoreWithZustand(state => state.removeAllBears);

  return (
    <View style={styles.background}>
      <Text style={styles.title}>Cantidad de osos: {bears}</Text>
      <TouchableOpacity style={styles.button} onPress={increasePopulation}>
        <Text style={styles.text}>Querés más osos?</Text>
        <Text style={styles.text}>{'>>PRESIONA ACA!<<'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={removeAllBears}>
        <Text style={styles.text}>Querés vender todos los ositos?</Text>
        <Text style={styles.text}>{'>>PRESIONA ACA 😪<<'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#202020',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
  },
});

export default App;
