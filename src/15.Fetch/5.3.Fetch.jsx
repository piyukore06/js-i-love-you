import React from 'react';
import { Heading, Link, CodePane, Text } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';
function SubHeading() {
  return (
    <div className="centered heading">
      <Heading className="underline"><Link href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch">Fetch API</Link></Heading>
      <Text> Returns a <Link href="">Promise</Link> </Text>
      <CodePane language="js" theme={lightTheme}>{`
        fetch('https://api.openweathermap.org/data/2.5/weather?q=<city>&appid=<API_KEY>', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(response => response.json())
          .then((jsonRes) => {console.log(jsonRes)})
      `}</CodePane>
    </div>
  );
}
export default SubHeading;
