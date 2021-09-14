import React from 'react';
import { Table, TableRow, TableCell, UnorderedList, ListItem, Image, Heading } from 'spectacle';

function SubHeading() {
    return (
        <div>
            <Table className="centered heading">
                <TableRow>
                    <TableCell>
                        <Image className="hori-centered avatar" src="frontend/priyanka.jpg"></Image>
                    </TableCell>
                    <TableCell width="50%">
                        <Heading fontSize="text">Priyanka Shete</Heading>
                        <UnorderedList>
                            <ListItem>Senior Software Engineer bei Adesso.</ListItem>
                            <ListItem>Speaker, Writer.</ListItem>
                            <ListItem>5 Jahre in der Web-Entwicklung.</ListItem>
                            <ListItem>Twittert unter @piyukore06.</ListItem>
                        </UnorderedList>
                    </TableCell>
                </TableRow>
            </Table>
        </div>
    );
}
export default SubHeading;
