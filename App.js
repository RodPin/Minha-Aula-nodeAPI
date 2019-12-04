import React from 'react';
import {StyleSheet, Button, Text} from 'react-native';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.30.6.45:8085/rest',
});

const App = ({}) => {
  async function pingar() {
    try {
      const response = await api.get('/tarefas', {
        data: {},
      });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <Button title="Pingar" onPress={() => pingar()}></Button>
      <Text style={styles.myText}>Oi </Text>
    </>
  );
};

const styles = StyleSheet.create({
  myText: {
    fontSize: 70,
  },
});

export default App;
