import React from 'react';
import { Heading, OrderedList, ListItem, Link } from 'spectacle';

function SubHeading() {
  return (
    <div className="centered">
      <Heading>Styling Pseudo Class</Heading>
      <OrderedList>
        <ListItem><Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/:hover">:hover</Link></ListItem>
        <ListItem><Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/:focus">:focus</Link></ListItem>
        <ListItem><Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/:active">:active</Link></ListItem>
        <ListItem>
          <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/:required">:required</Link>,
          <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/:optional">:optional </Link></ListItem>
        <ListItem><Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/:valid">:valid </Link>,
         <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid">:invalid </Link>,
         <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/:in-range">:in-range </Link>,
         <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/:out-of-range">:out-of-range</Link>
         </ListItem>
        <ListItem><Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled">:enabled </Link>,
         <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled">:disabled</Link>,
         <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/:read-only">:read-only </Link>,
         <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/:read-write">:read-write</Link>
         </ListItem>
        <ListItem><Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/:checked">:checked </Link>,
         <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate">:inderminate</Link>,
         <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/:default">:default</Link>
        </ListItem>
      </OrderedList>
    </div>
  );
}
export default SubHeading;
