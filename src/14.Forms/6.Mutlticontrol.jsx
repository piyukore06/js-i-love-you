import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered">
      <Heading>Multi Select Control</Heading>

      <CodePane language="js" theme={lightTheme}>
          {`
<select id="multi" name="multi" multiple size="2">
<optgroup label="fruits">
   <option>Banana</option>
   <option selected>Cherry</option>
   <option>Lemon</option>
 </optgroup>
 <optgroup label="vegetables">
   <option>Carrot</option>
   <option>Eggplant</option>
   <option>Potato</option>
 </optgroup>
</select>
          `}
      </CodePane>
      <select id="multi" name="multi" multiple size="2">
  <optgroup label="fruits">
     <option>Banana</option>
     <option selected>Cherry</option>
     <option>Lemon</option>
   </optgroup>
   <optgroup label="vegetables">
     <option>Carrot</option>
     <option>Eggplant</option>
     <option>Potato</option>
   </optgroup>
</select>
    </div>
  );
}
export default SubHeading;
