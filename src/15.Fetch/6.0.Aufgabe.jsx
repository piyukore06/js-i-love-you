import React from 'react';
import { Heading, Text, Link } from 'spectacle';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading className="underline">Aufgabe</Heading>
      <Text>Build a app to show today's COVID-19 cases of a given country</Text>
      <Link href="https://github.com/M-Media-Group/Covid-19-API">Covid-19 API</Link>
    </div>
  );
}
export default SubHeading;

