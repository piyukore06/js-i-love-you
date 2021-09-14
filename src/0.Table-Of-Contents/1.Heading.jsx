import React from 'react';
import { Heading, Link } from 'spectacle';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading className="underline">JS I Love you</Heading>
      <Link style={{ textAlign: 'center' }} className="hori-centered" href="https://js-i-love-you.netlify.app/">https://js-i-love-you.netlify.app/</Link>
    </div>
  );
}
export default SubHeading;
