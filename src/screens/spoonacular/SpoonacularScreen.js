import React, {useState, useEffect} from 'react';
import {View, Button, Text} from 'react-native';
import axios from 'axios';

// 1set the variable
const url = 'https://api.spoonacular.com/recipes/complexSearch';
const config = {
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': '539f47c4437441e98cd6532a151d9d0d',
    query: 'pasta',
  },
};

// 2create a constant for api calls
const api = axios.create({
  baseURL: `https://api.spoonacular.com/recipes/complexSearch`,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': '539f47c4437441e98cd6532a151d9d0d',
    query: 'pasta',
  },
});

// 3you can set the defaults
axios.defaults.baseURL = `https://api.spoonacular.com/recipes/complexSearch`;
axios.defaults.headers.common['x-api-key'] = `539f47c4437441e98cd6532a151d9d0d`;
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.get['query'] = 'pasta';

export const SpoonacularScreen = ({children}) => {
  const [result, setResult] = useState();
  const [load, setLoad] = useState();
  let bar;

  useEffect(() => {
    const foo = axios
      .get()
      .then(({data}) => {
        bar = data.results;
        console.log(bar);
        setResult(JSON.stringify(data.results));
        // console.log(JSON.parse(result));
        // const x = data.results;
        // const sorted = x.sort((one, two) => one.id - two.id);
        // setResult(sorted);
        // console.log(sorted);
      })
      .catch(error => {
        console.log(error);
      })
      .then(() => {
        console.log('always');
      });
    // setLoad(false);
  }, []);
  // console.log(result);

  return (
    <View>
      <Text>{result && result}</Text>
    </View>
  );
};
