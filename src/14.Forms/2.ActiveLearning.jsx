import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

import './form.css';

function SubHeading() {
  return (
    <div className="centered">
      <Heading>Let's make a form together</Heading>
      <div className="hori-centered">
        <form action="/my-handling-form-page" method="post">
          <ul>
            <li>
              <label for="name">Username: </label>
              <input type="text" id="name" name="userName" />
            </li>
            <li>
              <label for="password">Password: </label>
              <input type="password" id="password" name="userPassword" />
            </li>
            <li class="button">
              <button type="submit">Login</button>
            </li>
          </ul>
        </form>
      </div>

      <CodePane language="js" theme={lightTheme}>
          {`
            <form action="/my-handling-form-page" method="post">
              <ul>
                <li>
                  <label for="name">Username: </label>
                  <input type="text" id="name" name="user_name" />
                </li>
                <li>
                  <label for="mail">Password: </label>
                  <input type="email" id="mail" name="user_email" />
                </li>
                <li class="button">
                  <button type="submit">Login</button>
                </li>
              </ul>
            </form>
          `}
      </CodePane>
     
    </div>
  );
}
export default SubHeading;
