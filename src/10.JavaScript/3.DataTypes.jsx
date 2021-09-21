import React from 'react';
import { Heading, UnorderedList, ListItem } from 'spectacle';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading>Data Types - Primitives</Heading>
      <UnorderedList>
        <ListItem>String</ListItem>
        <ListItem>Boolean</ListItem>
        <ListItem>Number</ListItem>
      </UnorderedList>
    </div>
  );
}
export default SubHeading;
