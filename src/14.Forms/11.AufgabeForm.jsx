import React from 'react';
import { Heading, Text, Image } from 'spectacle';

function SubHeading() {
  return (
    <div className="centered">
      <Heading>Aufgabe</Heading>
      <Text>Build the following form with required elements</Text>
      <div className="hori-flex-centered" style={{width: '100%'}}>
        <Image src="frontend/form.png" />
      </div>
    </div>
  );
}
export default SubHeading;
