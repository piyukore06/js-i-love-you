import React from 'react';
import { Heading, OrderedList, ListItem, Link } from 'spectacle';

function SubHeading() {
  return (
    <div className="centered">
      <Heading>Built in Form Validation</Heading>
      <OrderedList>
        <ListItem><Link href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required">required</Link></ListItem>
        <ListItem>
          <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/minlength">minlength</Link>,
          <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/maxlength">maxlength</Link>
        </ListItem>
        <ListItem>
          <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/min">min</Link>,
          <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/max">max</Link>
        </ListItem>
        <ListItem><Link href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input">type</Link></ListItem>
        <ListItem><Link href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern">pattern</Link></ListItem>
      </OrderedList>
    </div>
  );
}
export default SubHeading;
