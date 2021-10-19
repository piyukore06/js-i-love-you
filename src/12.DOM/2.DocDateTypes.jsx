import React from 'react';
import { Heading, Link, OrderedList, ListItem } from 'spectacle';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading>Common Data Types</Heading>
      <OrderedList>
        <ListItem><Link href="https://developer.mozilla.org/en-US/docs/Web/API/Document">Document</Link></ListItem>
        <ListItem><Link href="https://developer.mozilla.org/en-US/docs/Web/API/Node">Node - any DOM object (document, html, text node, etc)</Link></ListItem>
        <ListItem><Link href="https://developer.mozilla.org/en-US/docs/Web/API/Element">Element </Link></ListItem>
        <ListItem><Link href="https://developer.mozilla.org/en-US/docs/Web/API/NodeList">NodeList</Link></ListItem>
      </OrderedList>
    </div>
  );
}
export default SubHeading;
