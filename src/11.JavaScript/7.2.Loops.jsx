import React from 'react';
import { CodePane, Heading, Link } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading><Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration">Loops</Link></Heading>
      <CodePane language="js" theme={lightTheme}>
                {`
                  for (let step = 0; step < 5; step++) {
                    // Runs 5 times, with values of step 0 through 4.
                    console.log('Walking east one step');
                  }
                `}
            </CodePane>
    </div>
  );
}
export default SubHeading;