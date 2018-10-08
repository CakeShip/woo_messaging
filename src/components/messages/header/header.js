import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import './header.css';
import heart from '../../../assets/icons/heart.svg';
import alarm from '../../../assets/icons/alarm.png';
import chat from '../../../assets/icons/chat.png';
import user from '../../../assets/icons/user.png';


export class Header extends Component {
  render() {
    return (
      <div className="header">
        {/* (for the div)  style="font-size:2em;padding-top:10px" */}
        <Col xs={2}>
          {/* style="color:red" */}
          {/* <span class="glyphicon glyphicon-heart"></span> */}
          <img src={heart} alt="heart" className="icon"></img>
        </Col>
        <Col xs={2}>
        </Col>
        <Col xs={2}>
        </Col>
        <Col xs={2}>
          <img src={alarm} alt="alarm" className="icon"></img>
        </Col>
        <Col xs={2}>
          <img src={chat} alt="chat" className="icon"></img>
        </Col>
        <Col xs={2}>
          <img src={user} alt="user" className="icon"></img>
        </Col>
      </div>
    );
  }
}