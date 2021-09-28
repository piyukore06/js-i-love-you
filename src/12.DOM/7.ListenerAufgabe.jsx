import React from 'react';
import { Heading,Text, Link } from 'spectacle';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading>Aufgabe</Heading>
      <Text>Eingegebenen Text zu einem div mit der Klasse container hinzufügen</Text>
      <Link href="https://codepen.io/piyukore06/pen/OJgrdGL">Codepen Starting point</Link>
      <Text>Hint:
        <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement">document.createElement</Link>
        <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild">element.appendChild</Link>
        <Link href="https://developer.mozilla.org/en-US/docs/Web/API/EventListener#javascript">Click EventListener</Link>
      </Text>
    </div>
  );
}
export default SubHeading;