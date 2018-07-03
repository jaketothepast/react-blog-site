import React, { Component } from 'react';

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
           return <li className="Nav-link">
               <a href="#" onClick={(e) => this.sayHello(link.text, e)}>{ link.text }</a>
            </li>;
        });

        return (
            <ul className="Nav-bar">
                {rows}
            </ul>
        );
    }

}

export default Nav;

