/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
  Alert,
} from 'react-native';

const App: () => React$Node = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState([]);

  const onPressAdd = () => {
    if (text.length > 0) {
      setText('');
      setResult([...result, text]);
    }
  };

  const onPressDelete = (targetIndex) => {
    // Alert.alert('click');
    setResult(result.filter((e, index) => index !== targetIndex));
  };

  return (
    <>
      <View style={styles.container}>
        <View style={{flex: 5}}>
          <TextInput
            style={styles.input}
            placeholder="할 일을 입력해주세요."
            onChangeText={text => setText(text)}
            defaultValue={text}
          />
        </View>
        <View style={{flex: 1}}>
          <Button title="등록" onPress={onPressAdd} />
        </View>
      </View>
      <FlatList
        style={{padding: 10}}
        data={result}
        renderItem={({item, index}) => (
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 8}}>
              <Text style={{padding: 10}}>{item}</Text>
            </View>
            <Button title="삭제" onPress={() => onPressDelete(index)} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 30,
  },
});

export default App;
