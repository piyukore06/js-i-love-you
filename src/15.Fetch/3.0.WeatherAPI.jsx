import React from 'react';
import { Heading, Link, Text } from 'spectacle';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading className="underline"><Link href="https://github.com/public-apis/public-apis">Collection of APIs</Link></Heading>
      <Text><Link href="https://openweathermap.org/">Weather API</Link></Text>
    </div>
  );
}
export default SubHeading;

/**
 * What is client and server
 * backend frontend
 * what are apis https://github.com/public-apis/public-apis
 * Intro to weather api
 * Bind it with search
 */

// function reqListener (res) {
//   const response = JSON.parse(this.responseText);
//   console.log(response.main.temp - 273.15);
// }

// function reqError (res) {
//   console.log('Error', this.responseText, res);
// }

// var oReq = new XMLHttpRequest();
// oReq.onload = reqListener;
// oReq.onerror = reqError;
// oReq.addEventListener("load", reqListener);
// const API_KEY = '07ab104a1980fdc77491764f81e54a7b';
// const city = 'Göppingen';
// oReq.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
// oReq.send();
// oReq.onload = reqListener;

