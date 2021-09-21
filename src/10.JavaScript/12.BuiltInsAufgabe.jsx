import React from 'react';
import { Heading, Text } from 'spectacle';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading className="underline">Aufgabe</Heading>
      <Text>Schreiben Sie eine JavaScript-Funktion, die eine Zeichenkette als Parameter akzeptiert und den ersten Buchstaben jedes Wortes der Zeichenkette in Großbuchstaben umwandelt</Text>
      <Text>Input: 'the quick brown fox' </Text>
      <Text>Output: 'The Quick Brown Fox' </Text>
      <Text>Hint: String BuiltIn: `split`, `join` and `toUpperCase`</Text>
    </div>
  );
}
export default SubHeading;
