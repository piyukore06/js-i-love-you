import React from 'react';
import { Heading, UnorderedList, ListItem } from 'spectacle';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading>Javascript</Heading>
      <UnorderedList>
        <ListItem>Single Threded</ListItem>
        <ListItem>Procedural</ListItem>
        <ListItem>Dynamic</ListItem>
      </UnorderedList>
    </div>
  );
}
export default SubHeading;
