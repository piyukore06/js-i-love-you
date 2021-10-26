import React from 'react';
import { Text, CodePane, Link } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered heading">
      <Text>Write a JavaScript function to add rows to a table.</Text>
      <CodePane language="js" theme={lightTheme}>
          {`
            <table>
                <tr>
                    <td>Row1 cell1</td>
                    <td>Row1 cell2</td>
                </tr>
                <tr>
                    <td>Row2 cell1</td>
                    <td>Row2 cell2</td>
                </tr>
            </table>
        
        <br>
        
        <input type="button" onclick="insertRow()" value="Insert row"> 
          `}
      </CodePane>
      <Text>
        Hint: <br />
        <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement">CreateElement</Link> <br />
        <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild">AppendChild</Link> <br />
      </Text>
    </div>
  );
}
export default SubHeading;
