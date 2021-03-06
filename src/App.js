import React, { Component } from 'react';
import { Messages } from './components/messages/main/main';
import { Messaging } from './components/messaging/main/main';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  test(){
    
  }
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossOrigin="anonymous"></link>
        <Router>
          <Switch>
            <Route path="/messages" component={Messaging} />
            <Route path="*" component={Messages} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
