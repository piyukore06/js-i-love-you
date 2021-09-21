import React from 'react';
import { Heading, CodePane, Link } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading>Looping over Arrays</Heading>
      <CodePane language="js" theme={lightTheme}>
          {`

            const someFunction = function() { return 5; };
            const someOtherFunction = function(fn) { return fn(); };

            someOtherFunction()

            const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
          
            daysOfWeek.forEach(function(day) {
              console.log(day)
            });

            daysOfWeek.map(function(day) {
              return 'day: ' + day
            });

          `}
      </CodePane>
      <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">List of Array Methods</Link>
    </div>
  );
}
export default SubHeading;
