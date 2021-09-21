import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading>Data Types</Heading>
      <Heading fontSize="h3">Boolean</Heading>
      <CodePane language="js" theme={lightTheme}>
                {`
                  const isDone = false;
                  let isLoading = true;
                `}
            </CodePane>
    </div>
  );
}
export default SubHeading;
