import React, { Component } from 'react';

import { Card, ImageHeader, CardBody, CardFooter } from 'react-simple-card';

import './StoryContainer.css'

class StoryContainer extends Component {
    constructor(props) {

        super(props);

        this.state = {
            stories: [
                {_id: 0, imgUrl: "https://churchm.ag/wp-content/uploads/2014/10/Ridiculous-Stock-Images-01.jpg"}
            ]
        };
    }

    render() {

        var cards = this.state.stories.map((story) => {
                return (
                    <Card style={{width: 300, height: 300}} className="ImageHeader-scaled">
                        <ImageHeader imageSrc={story.imgUrl}>Header</ImageHeader>
                        <CardBody>Lorem Ipsum</CardBody>
                        <CardFooter>Footer</CardFooter>
                    </Card>
                )
            });

        return(
        <div className='StoryContainer-cards'>
            {cards}
        </div>
        );
    }
}

export default StoryContainer;