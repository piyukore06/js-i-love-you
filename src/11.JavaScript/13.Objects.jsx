import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading>Objects</Heading>
      <CodePane language="js" theme={lightTheme}>
          {`
            const person = {
              name: 'Priyanka Shete',
              city: 'Stuttgart',
              company: 'Adesso'
            };
            console.log(person);
            console.log(person.name);
            console.log(person.['name']);
          `}
      </CodePane>
    </div>
  );
}
export default SubHeading;
