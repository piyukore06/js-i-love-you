import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading>BuiltIns</Heading>
      <CodePane language="js" theme={lightTheme}>
                {`
                 const sentence = "ThIs HaS wEiRd CaSiNg On It";
                 console.log(sentence.toLowerCase());

                 console.log(Math.round(5.1));
                `}
            </CodePane>
    </div>
  );
}
export default SubHeading;
