/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import FormComponent from './components/FormComponent';
import TodoList from './components/ToDoList';
import {View} from 'react-native';

const App = () => {
  return (
    <View>
      <FormComponent />
      <TodoList />
    </View>
  );
};

export default App;
