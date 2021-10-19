import React from 'react';
import { Heading, CodePane, Link } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading><Link href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Events</Link></Heading>
      <CodePane language="html" theme={lightTheme}>
                {`
                  <input type="checkbox" id="myCheck" onmouseover="myFunction()" onclick="alert('click event occurred')">
                `}
            </CodePane>
            <CodePane language="js" theme={lightTheme}>
                {`
                 // Programatically induce click event
                 function myFunction() {
                   document.getElementById("myCheck").click();
                 }
                `}
            </CodePane>
            <CodePane language="js" theme={lightTheme}>
                {`
                 // On click, execute myFunction
                 const element = document.getElementById("myCheck");
                 element.onclick = () => {
                  // 
                 }
                `}
            </CodePane>
    </div>
  );
}
export default SubHeading;