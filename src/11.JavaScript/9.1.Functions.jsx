import React from 'react';
import { CodePane, Heading, Link } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading><Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions">Functions</Link></Heading>
      <CodePane language="js" theme={lightTheme}>
                {`
                  function square(number) {
                    return number * number;
                  }
                `}
            </CodePane>
    </div>
  );
}
export default SubHeading;