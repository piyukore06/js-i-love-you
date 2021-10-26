import React from 'react';
import { Heading, OrderedList, ListItem, Link } from 'spectacle';


function SubHeading() {
  return (
    <div className="centered">
      <Heading>Basic Form Controls</Heading>

      <OrderedList>
        <ListItem>Text, Textarea</ListItem>
        <ListItem>Password</ListItem>
        <ListItem>Number</ListItem>
        <ListItem>Range</ListItem>
        <ListItem>Checkbox and radio</ListItem>
        <ListItem>File</ListItem>
        <ListItem>Select</ListItem>
        <ListItem>Email, Search, datetime-local, color, month, time, week, tel, url</ListItem>
      </OrderedList>
      <Link target="_blank" fontSize="monospace" href="https://codepen.io/jensgro/full/MYgLeq">All form Controls</Link>
    </div>
  );
}
export default SubHeading;
