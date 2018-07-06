import React, { Component } from 'react';

import { Card, ImageHeader, CardBody, CardFooter } from 'react-simple-card';

import './StoryContainer.css'
import StoryCard from './StoryCard.js'

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
           return <StoryCard imgUrl={story.imgUrl} />
        });

        return(
        <div className='StoryContainer-cards'>
            {cards}
        </div>
        );
    }
}

export default StoryContainer;