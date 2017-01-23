import React, { PropTypes } from 'react';
import {Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import {FormattedMessage} from 'react-intl';


const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {loading && <LoadingDots interval={100} dots={10}/>}
      <FormattedMessage id="app.greeting" defaultMessage="你好!" />
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};


export default Header;
