import React from 'react';
import { Heading, CodePane, Link } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading><Link href="https://developer.mozilla.org/en-US/docs/Web/API/EventListener">EventListener</Link></Heading>
      <CodePane language="html" theme={lightTheme}>
                {`
                  <button id="btn">Click here!</button>
                  <p id="funcOutput"></p>
                `}
            </CodePane>
            <CodePane language="js" theme={lightTheme}>
                {`
                 const buttonElement = document.getElementById('btn');
                 buttonElement.addEventListener('click', function (event) {
                  funcOutput.textContent = 'Element clicked through function!';
                });
                 }
                `}
            </CodePane>
    </div>
  );
}
export default SubHeading;