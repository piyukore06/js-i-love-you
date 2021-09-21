import React from 'react';
import { Heading, CodePane, Link } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading>Looping over Arrays</Heading>
      <CodePane language="js" theme={lightTheme}>
          {`
            const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            
            for (let i = 0; i < daysOfWeek.length; i++) {
              console.log(daysOfWeek[0])
            }

            // What happens here?
            for (let i = 0; i < daysOfWeek.length; i++) {
              daysOfWeek.push('today')
            }
          `}
      </CodePane>
      <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">List of Array Methods</Link>
    </div>
  );
}
export default SubHeading;
