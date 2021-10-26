import React from 'react';
import { Heading, OrderedList, ListItem } from 'spectacle';

function SubHeading() {
  return (
    <div className="centered">
      <Heading fontSize="h3">Not all form controls are styled simillarly</Heading>
      <Heading fontSize="h4">The Good</Heading>
      <OrderedList>
        <ListItem>Form, fieldset, legend, label</ListItem>
        <ListItem>Inputs except search, textarea</ListItem>
        <ListItem>Buttons</ListItem>
      </OrderedList>
      <Heading fontSize="h4">The Bad</Heading>
      <OrderedList>
        <ListItem>Checkboxes and radio boxes</ListItem>
        <ListItem>input type search</ListItem>
      </OrderedList>
      <Heading fontSize="h4">Ugly</Heading>
      <OrderedList>
        <ListItem>Color, Datetime local, range, file, select, option</ListItem>
      </OrderedList>
    </div>
  );
}
export default SubHeading;
