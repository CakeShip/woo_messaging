import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import './header.css';
import heart from '../../icons/heart.svg'
import alarm from '../../icons/alarm.png'
import chat from '../../icons/chat.png'
import user from '../../icons/user.png'

export class Header extends Component {
  render() {
    return (
      <div>
        {/* (for the div)  style="font-size:2em;padding-top:10px" */}
        <Col xs={2}>
          {/* style="color:red" */}
          {/* <span className={heart} aria-label="heart"></span> */}
      
          <img className="heart" alt="heart" src={heart} /> 
        </Col>
        <Col xs={2}>
        </Col>
        <Col xs={2}>
        </Col>
        <Col xs={2}>
          {/* <span className="glyphicon glyphicon-bell bell"></span> */}
          <img className ="alarm" alt="alarm" src={alarm}/>
        </Col>
        <Col xs={2}>
          {/* <span className="glyphicon glyphicon-comment comment"></span> */}
          <img className="chat" alt="chat" src={chat} />
        </Col>
        <Col xs={2}>
          {/* <span className="glyphicon glyphicon-user user"></span> */}
          <img className="user" alt="user" src={user} />
        </Col>
      </div>
    );
  }
}