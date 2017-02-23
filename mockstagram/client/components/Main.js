import React from 'react'
import {Link} from 'react-router'
import Header from './Header.js';

const Main = React.createClass({
  render() {
    return (
      <div>
        <div className="topBar">
          <Link to="/"><h2>Mockstagram</h2></Link>
        </div>
        <Header></Header>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
