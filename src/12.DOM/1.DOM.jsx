import React from 'react';
import { CodePane, Heading, Link } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading><Link href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction">DOM</Link></Heading>
      <CodePane language="js" theme={lightTheme}>
                {`
                  const paragraphs = document.querySelectorAll("p");
                  // paragraphs[0] is the first <p> element
                  // paragraphs[1] is the second <p> element, etc.
                  alert(paragraphs[0].nodeName);
                `}
            </CodePane>
    </div>
  );
}
export default SubHeading;