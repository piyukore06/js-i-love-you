import React from 'react';
import { Heading, Link, OrderedList, ListItem } from 'spectacle';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading>Common DOM APIs / Interacting with Webpage</Heading>
      <OrderedList>
        <ListItem><Link href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector">document.querySelector</Link></ListItem>
        <ListItem><Link href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll">document.querySelectorAll</Link></ListItem>
        <ListItem><Link href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText">element.innerText</Link></ListItem>
        <ListItem><Link href="https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML">element.innerHTML</Link></ListItem>
        <ListItem><Link href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style">element.style.top</Link></ListItem>
        <ListItem><Link href="https://developer.mozilla.org/en-US/docs/Web/API/Element/classList">element.classList</Link></ListItem>
      </OrderedList>
    </div>
  );
}
export default SubHeading;