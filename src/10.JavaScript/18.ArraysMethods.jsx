import React from 'react';
import { Heading, CodePane, Link } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading>Array Methods</Heading>
      <CodePane language="js" theme={lightTheme}>
          {`
            const students = ['Ana', 'Mia', 'Mira', 'Ella', 'Emily'];
            const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            console.log(daysOfWeek.length);
            console.log(daysOfWeek.join(' | '));
          `}
      </CodePane>
      <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">List of Array Methods</Link>
    </div>
  );
}
export default SubHeading;
