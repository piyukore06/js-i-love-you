import React from 'react';
import { Heading, CodePane, Link } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading>Arrow Functions</Heading>
      <CodePane language="css" theme={lightTheme}>
          {`
            const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
          
            daysOfWeek.forEach((day) => {
              console.log(day)
            });

            daysOfWeek.map((day) => {
              return 'day: ' + day
            });

          `}
      </CodePane>
      <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">List of Array Methods</Link>
    </div>
  );
}
export default SubHeading;
