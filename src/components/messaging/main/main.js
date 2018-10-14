import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import { Header } from '../../messages/header/header';
import './main.css';
import {Message_body} from '../message/message_body/message_body'

export class Messaging extends Component {
  render() {
    // console.log(number)
    return (
      <Grid>
        {/* style="line-height:1em" */}
        <br />
        <Row className="center">
          <Col>
            {/* style="border:1px solid black; margin-top:10px" */}
            <Col xs={8} md={6} lg={4} xsOffset={2} mdOffset ={3} lgOffset={4}>
              <Header />
              <br />
              <Message_body roomID={this.props.roomID}/>
            </Col>
          </Col>
        </Row>
      </Grid>
    );
  }
}