/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Image,
  View,
  Text
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingTop: 80
      }}>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png'
          }}
          style={{ width: 200, height: 200 }}
        />
        <Text>유미령</Text>
        <Text>숙제를 잘하자</Text>
      </View>
    </>
  );
};

export default App;
