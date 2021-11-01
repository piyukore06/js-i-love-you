import React from 'react';
import { Heading, Text, UnorderedList, ListItem, Link } from 'spectacle';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading className="underline">Client Server Communication and HTTP</Heading>
      <Text>Hypertext Transfer Protocol (<Link href="https://developer.mozilla.org/en-US/docs/Web/HTTP">HTTP</Link>) is the protocol that web browsers and web servers use "under the hood" to communicate with each other over the Internet.</Text>
      <UnorderedList>
        <ListItem>
          HTTP Request
            <UnorderedList>
              <ListItem>HTTP Method: GET, POST, PUT, DELETE</ListItem>
              <ListItem>URL: path of the resource to fetch</ListItem>
              <ListItem>Headers, Body etc</ListItem>
            </UnorderedList>
        </ListItem>
        <ListItem>
          HTTP Response
          <UnorderedList>
              <ListItem>Status code</ListItem>
              <ListItem>Expected response</ListItem>
              <ListItem>Headers etc</ListItem>
            </UnorderedList>
        </ListItem>
      </UnorderedList>
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

