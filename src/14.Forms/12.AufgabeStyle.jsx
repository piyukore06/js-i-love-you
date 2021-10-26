import React from 'react';
import { Heading, Text, Image } from 'spectacle';

function SubHeading() {
  return (
    <div className="centered">
      <Heading>Aufgabe</Heading>
      <Text>Build an input element with icon</Text>
      <div className="hori-flex-centered" style={{width: '100%'}}>
        <Image src="frontend/search.png" />
      </div>
    </div>
  );
}
export default SubHeading;