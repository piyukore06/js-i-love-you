
import React from 'react';
import { UnorderedList, ListItem, Heading, Link } from 'spectacle';
import '../1.Intro/image.css';

function SubHeading() {
    return (
        <div>
            <Heading>Agenda</Heading>
            <UnorderedList className="centered heading">
                <ListItem><Link href="">Introduction to HTML</Link></ListItem>
                <ListItem><Link href="">Introduction to CSS</Link></ListItem>
                <ListItem><Link href="">Introduction to JavaScript</Link></ListItem>
                <ListItem><Link href="">DOM and Routes</Link></ListItem>
                <ListItem><Link href="">JavaScript Events</Link></ListItem>
                <ListItem><Link href="">JavaScript Forms</Link></ListItem>
                <ListItem><Link href="">Fetching Data</Link></ListItem>
                <ListItem><Link href="">Introduction to a JavaScript Framework</Link></ListItem>
                <ListItem><Link href="https://dribbble.com/shots/14788580-Personal-Portfolio-HTML5-Template/attachments/6494715?mode=media">Portfolio</Link></ListItem>
            </UnorderedList>
        </div>
    );
}
export default SubHeading;
