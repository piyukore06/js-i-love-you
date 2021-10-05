import React from 'react';
import { Heading, Text, Quote } from 'spectacle';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading>Aufgabe</Heading>
      <Text>Schreiben Sie eine JavaScript for-Schleife, die von 0 bis 15 iteriert. Bei jeder Iteration wird geprüft, ob die aktuelle Zahl "odd" oder "even" ist, und eine Meldung auf dem Bildschirm angezeigt.</Text>
      <Quote>
        Sample Output: <br />
        0 is even <br />
        1 is odd <br />
        2 is even <br />
        ... 
      </Quote>
    </div>
  );
}
export default SubHeading;
