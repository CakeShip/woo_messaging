import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import { Header } from '../header/header';
import { MessageHead } from '../message_head/main';
import './main.css';

export class Messages extends Component {

  render() {
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
              <hr />
              {/*  style="margin: 10px" */}
              <div>
                {/* style="margin-bottom:10px;" */}
                <div className="tag">
                  <h2><strong>Messages</strong></h2>
                </div>
                <div>
                  <div className="form-group">
                    {/* style = "background-color: #F3EFEE" */}
                    <input type="text" className="form-control input" id="usr" placeholder="Search for a message"/>
                  </div>
                </div>

                <MessageHead roomID="1"/>
                <hr />
                <MessageHead roomID="2"/>
                <hr />
                <MessageHead roomID="3"/>

              </div>
            </Col>
          </Col>
        </Row>
      </Grid>
    );
  }
}