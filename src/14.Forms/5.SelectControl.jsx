import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered">
      <Heading>Select Control</Heading>

      <CodePane language="js" theme={lightTheme}>
          {`
          <select id="simple" name="simple">
            <option value="banana">Big, beautiful yellow banana</option>
            <option value="cherry">Succulent, juicy cherry</option>
            <option value="lemon">Sharp, powerful lemon</option>
          </select>
          `}
      </CodePane>
      <select id="simple" name="simple">
        <option value="banana">Big, beautiful yellow banana</option>
        <option value="cherry">Succulent, juicy cherry</option>
        <option value="lemon">Sharp, powerful lemon</option>
      </select>
    </div>
  );
}
export default SubHeading;
