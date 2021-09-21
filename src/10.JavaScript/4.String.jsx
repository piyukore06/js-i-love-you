import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading>Data Types</Heading>
      <Heading fontSize="h3">String</Heading>
      <CodePane language="js" theme={lightTheme}>
                {`
                  const name = 'Priyanka Shete';
                  let city = "Stuttgart";
                `}
            </CodePane>
    </div>
  );
}
export default SubHeading;
