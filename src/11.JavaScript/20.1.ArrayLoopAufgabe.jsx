import React from 'react';
import { Heading, CodePane, Link, Text } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading>Aufgabe</Heading>
      <Text>Schreiben Sie eine Methode, Durchschnitt von Elemente in der Array zu berechnen</Text>
      <CodePane language="js" theme={lightTheme}>
          {`

            const daysOfWeek = [12, 24, 36, 89, 35, 12];
          
            let average;
            // Your Logic here

            console.log(average);
          `}
      </CodePane>
      <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">List of Array Methods</Link>
    </div>
  );
}
export default SubHeading;
