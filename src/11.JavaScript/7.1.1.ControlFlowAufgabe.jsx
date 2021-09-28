import React from 'react';
import { Heading, Text, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading>Aufgabe</Heading>
     <Text>Schreibe ein Programm, um die größere von zwei Zahlen zu finden</Text>
     <CodePane language="js" theme={lightTheme}>
                {`
                  const num1 = 23;
                  const num 2 = 899;
                  
                  let biggerNum;
                  
                  // Your logic here
                  
                  console.log(biggerNum)
                `}
            </CodePane>
    </div>
  );
}
export default SubHeading;
