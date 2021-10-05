import React from 'react';
import { Heading, Text, Quote } from 'spectacle';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading>Aufgabe</Heading>
      <Text>Schreiben Sie einen Code, der zwei Variablen deklariert, 'character' und 'timesToRepeat'.  Verwenden Sie eine Schleife, wiederholen, dass Zeichen, dass viele Zeit und console.log es.
</Text>
      <Quote>Beispiel: Wenn ich character 't' habe und timesToRepeat = 4, ist es console.log 'tttt'</Quote>
    </div>
  );
}
export default SubHeading;
