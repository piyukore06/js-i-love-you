import React from 'react';
import { Heading, Text, Quote } from 'spectacle';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading>Aufgabe</Heading>
      <Text>Schreiben Sie ein JavaScript-Programm, das die ganzen Zahlen von 1 bis 100 durchläuft. Für "multiples of three" wird jedoch "Fizz" anstelle der Zahl und für "multiples of five" "Buzz" gedruckt. Für Zahlen, die sowohl "multiples of both three and five" sind, drucke "FizzBuzz".</Text>
      <Quote>
        Sample Output: <br />
        1 <br />
        2 <br />
        Fizz <br />
        4 <br />
        Buzz <br />
        ...
      </Quote>
    </div>
  );
}
export default SubHeading;
