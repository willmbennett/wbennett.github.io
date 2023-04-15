import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';

const Blogcard = ({title, image, link}) => {
    return (
        <Card>
            <Image src={image} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{title}</Card.Header>
            </Card.Content>
            <Card.Content extra>
            <a href={link}>Read The Article</a>
            </Card.Content>
        </Card>
    );
};

export default Blogcard;