import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading>Array</Heading>
      <CodePane language="js" theme={lightTheme}>
          {`
            const students = ['Ana', 'Mia', 'Mira', 'Ella', 'Emily'];
            const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            console.log(daysOfWeek[0]);
            console.log(daysOfWeek[1]);
            console.log(daysOfWeek[6]);
          `}
      </CodePane>
    </div>
  );
}
export default SubHeading;
