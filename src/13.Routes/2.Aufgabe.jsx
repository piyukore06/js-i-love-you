import React from 'react';
import { Text, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered heading">
      <Text>Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null</Text>
      <CodePane language="js" theme={lightTheme}>
          {`
            /** 
             * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3] 
             * Task Complexity: 1 of 5 
             * input  - An array of any elements 
             * returns - An array of elements, without the unnecessary elements 
           */
           const compact = (array) => {
           // put your solution here
           }
           const data = [0, 1, false, 2, undefined, '', 3, null];
           console.log(compact(data)) // [1, 2, 3]
          `}
      </CodePane>
      <Text>Hint: Look up the difference between comparator operators == and ===</Text>
    </div>
  );
}
export default SubHeading;
