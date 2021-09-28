
import React from 'react';
import { UnorderedList, ListItem, Heading, Link } from 'spectacle';
import '../1.Intro/image.css';

function SubHeading() {
    return (
        <div>
            <Heading>Agenda</Heading>
            <UnorderedList className="centered heading">
                <ListItem>Introduction to HTML and CSS</ListItem>
                <ListItem>Introduction to JavaScript</ListItem>
                <ListItem>DOM and Routes</ListItem>
                <ListItem>JavaScript Events</ListItem>
                <ListItem>JavaScript Forms</ListItem>
                <ListItem>Fetching Data</ListItem>
                <ListItem>Introduction to a JavaScript Framework</ListItem>
                <ListItem><Link href="https://dribbble.com/shots/14788580-Personal-Portfolio-HTML5-Template/attachments/6494715?mode=media">Portfolio</Link></ListItem>
            </UnorderedList>
        </div>
    );
}
export default SubHeading;
