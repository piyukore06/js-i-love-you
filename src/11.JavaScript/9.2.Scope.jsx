import React from 'react';
import { CodePane, Heading, Link } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading><Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_scope">Functions Scope</Link></Heading>
      <CodePane language="js" theme={lightTheme}>
                {`
// The following variables are defined in the global scope
var num1 = 20,
    num2 = 3,
    name = 'Chamakh';

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60

// A nested function example
function getScore() {
  var num1 = 2,
      num2 = 3;

  function add() {
    return name + ' scored ' + (num1 + num2);
  }

  return add();
}

getScore(); // Returns "Chamakh scored 5"

                `}
            </CodePane>
    </div>
  );
}
export default SubHeading;