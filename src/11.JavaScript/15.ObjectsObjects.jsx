import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading >Objects can objects in them</Heading>
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
              }
            };
            console.log(me);
            console.log(me.name.first);
          `}
      </CodePane>
    </div>
  );
}
export default SubHeading;
