import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading>Objects can have their own functions</Heading>
      <CodePane language="js" theme={lightTheme}>
          {`
            const dog = {
              name: 'Bruno',
              speak() {
                console.log('woof woof')
              },
            };
            console.log(dog.speak());
          `}
      </CodePane>
    </div>
  );
}
export default SubHeading;
