import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';
import './header.css'; 

export class Header extends Component {
  render() {
    return (
      <div>
        {/* (for the div)  style="font-size:2em;padding-top:10px" */}
        <Col xs={2}>
          {/* style="color:red" */}
          <span class="glyphicon glyphicon-heart"></span>
        </Col>
        <Col xs={2}>
        </Col>
        <Col xs={2}>
        </Col>
        <Col xs={2}>
          <span class="glyphicon glyphicon-bell"></span>
        </Col>
        <Col xs={2}>
          <a><span class="glyphicon glyphicon-comment"></span></a>
        </Col>
        <Col xs={2}>
          <span class="glyphicon glyphicon-user"></span>
        </Col>
      </div>
    );
  }
}