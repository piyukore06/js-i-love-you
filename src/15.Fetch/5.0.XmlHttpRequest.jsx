import React from 'react';
import { Heading, Link, CodePane, Text } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';
function SubHeading() {
  return (
    <div className="centered heading">
      <Heading className="underline"><Link href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest">XMLHttpRequest</Link></Heading>
      <Text>How to handle a HTTP request from Client</Text>
      <CodePane language="js" theme={lightTheme}>{`
        const httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=<city>&appid=<API_KEY>');
        httpRequest.send();
      `}</CodePane>
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

