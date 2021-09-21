import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading>Data Types</Heading>
      <Heading fontSize="h3">Number</Heading>
      <CodePane language="js" theme={lightTheme}>
                {`
                  const age = 21;
                  const PI = 3.14;
                `}
            </CodePane>
    </div>
  );
}
export default SubHeading;
