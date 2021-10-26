import React from 'react';
import { Text, OrderedList, ListItem } from 'spectacle';

function SubHeading() {
  return (
    <div className="centered heading">
      <Text className="underline">A web form's HTML is made up of one or more form controls.</Text>
      <OrderedList>
        <ListItem>Single or multiline text fields</ListItem>
        <ListItem>Dropdown boxes</ListItem>
        <ListItem>Buttons</ListItem>
        <ListItem>Checkboxes</ListItem>
        <ListItem>Radio buttons</ListItem>
      </OrderedList>
    </div>
  );
}
export default SubHeading;
