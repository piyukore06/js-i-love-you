import React from 'react';
import { CodePane, Heading, Link } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading><Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else">Control flow</Link></Heading>
      <CodePane language="js" theme={lightTheme}>
                {`
                  function testNum(a) {
                    let result;
                    if (a > 0) {
                      result = 'positive';
                    } else {
                      result = 'NOT positive';
                    }
                    return result;
                  }
                  
                  console.log(testNum(-5));
                `}
            </CodePane>
    </div>
  );
}
export default SubHeading;
