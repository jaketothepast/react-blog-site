import React, { Component } from 'react';

import './NameCard.css'
export default class NameCard extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
    	<svg viewBox="0 0 960 300">
		<symbol id="s-text">
			<text text-anchor="middle" x="50%" y="80%">Jake Windle</text>
		</symbol>

		<g class = "g-ants">
			<use xlinkHref="#s-text" class="text-copy"></use>
			<use xlinkHref="#s-text" class="text-copy"></use>
			<use xlinkHref="#s-text" class="text-copy"></use>
			<use xlinkHref="#s-text" class="text-copy"></use>
			<use xlinkHref="#s-text" class="text-copy"></use>
		</g>
		</svg>
        );
    }
}