import React from 'react';
import { Heading, ListItem, OrderedList, Link } from 'spectacle';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading><Link href="https://data-flair.training/blogs/javascript-event-types/">Event Types</Link></Heading>
      <OrderedList>
        <ListItem><Link href="https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent">Mouse Event</Link></ListItem>
        <ListItem><Link href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent">Keyboard Event</Link></ListItem>
      </OrderedList>
    </div>
  );
}
export default SubHeading;