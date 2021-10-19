import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading className="underline">Routes</Heading>
      <CodePane language="js" theme={lightTheme}>
          {`
            <a href="./about.html">About</a>
          `}
      </CodePane>
    </div>
  );
}
export default SubHeading;
