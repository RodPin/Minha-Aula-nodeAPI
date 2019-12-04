import React, {useState} from 'react';
import {StyleSheet, Button, View, Text, TouchableOpacity} from 'react-native';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.30.6.45:8085/rest',
});

const App = ({}) => {
  const [lista, setLista] = useState([]);
  async function pingar() {
    try {
      const response = await api.get('/tarefas', {
        data: {},
      });
      setLista(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <Button title="Pingar" onPress={() => pingar()}></Button>
      {lista.length > 0 ? (
        lista.map(each => {
          return (
            <TouchableOpacity onPress={() => alert(each.id)} key={each.id}>
              <View style={styles.myView}>
                <Text style={styles.myText}>{each.id}</Text>
                <Text style={styles.myText}>{each.titulo}</Text>
              </View>
            </TouchableOpacity>
          );
        })
      ) : (
        <Text>lista nao carregada</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  myText: {
    fontSize: 20,
  },
  myView: {
    backgroundColor: 'green',
  },
});

export default App;
