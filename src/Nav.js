import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Nav.css'

class Nav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            links: [
                {_id: 0, text: 'login'},
                {_id: 1, text: 'hello'}
            ]
        }

        this.sayHello = this.sayHello.bind(this);
    }

    // Eventually handle link clicks...
    sayHello(linkText) {
        console.log("Hello " + linkText);
    }

    render() {
        var rows = this.state.links.map((link) => {
           return <Link to="/stories">link.text</Link>;
        });

        return (
            <ul className="Nav-bar">
                {rows}
            </ul>
        );
    }

}

export default Nav;

