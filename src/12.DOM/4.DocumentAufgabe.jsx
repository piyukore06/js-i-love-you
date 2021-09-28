import React from 'react';
import { Heading, Link, OrderedList, ListItem } from 'spectacle';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading>Aufgabe</Heading>
      <OrderedList>
        <ListItem>Ändern farbe des Elemente durch JavaScript</ListItem> 
        <ListItem>Class zu dem Element hinzufügen</ListItem>  
        <ListItem>Width von Elementliste ändern</ListItem>
      </OrderedList>
      <Link href="https://codepen.io/piyukore06/pen/abwPPyO">Codepen Starting point</Link>
    </div>
  );
}
export default SubHeading;