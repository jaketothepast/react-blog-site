import { Card, ImageHeader, CardBody, CardFooter } from 'react-simple-card';
import React from 'react';

const StoryCard = ({imgUrl}) => (
    <Card style={{width: 300, height: 300}} className="ImageHeader-scaled">
        <ImageHeader imageSrc={imgUrl}>Header</ImageHeader>
        <CardBody>Lorem Ipsum</CardBody>
        <CardFooter>Footer</CardFooter>
    </Card>
);

export default StoryCard;