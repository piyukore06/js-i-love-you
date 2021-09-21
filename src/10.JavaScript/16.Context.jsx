import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading>Context</Heading>
      <CodePane language="js" theme={lightTheme}>
          {`
            const me = {
              name: {
                first: 'Priyanka',
                last: 'Shete',
              },
              location: {
                country: 'Germany',
                state: 'BW',
                city: 'Stuttgart',
              },
              getFullName() {
                return this.name.first + this.name.last
              }
            };
            console.log(me.getFullName());
          `}
      </CodePane>
    </div>
  );
}
export default SubHeading;
