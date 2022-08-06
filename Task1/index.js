import getData from './App.js';

getData(1)
  .then((data) => console.log(data))
  .catch((error) => console.log(error))