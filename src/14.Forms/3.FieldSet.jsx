import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

import './form.css';

function SubHeading() {
  return (
    <div className="centered">
      <Heading>FieldSet and Legend</Heading>

      <CodePane language="js" theme={lightTheme}>
          {`
            <form>
                <fieldset>
                  <legend>Fruit juice size</legend>
                  <p>
                    <input type="radio" name="size" id="size_1" value="small">
                    <label for="size_1">Small</label>
                  </p>
                  <p>
                    <input type="radio" name="size" id="size_2" value="medium">
                    <label for="size_2">Medium</label>
                  </p>
                  <p>
                    <input type="radio" name="size" id="size_3" value="large">
                    <label for="size_3">Large</label>
                  </p>
                </fieldset>
              </form>
          `}
      </CodePane>
     
    </div>
  );
}
export default SubHeading;
