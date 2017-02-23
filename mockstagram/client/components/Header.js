import React from 'react'
import {Link} from 'react-router'

const Header = React.createClass({
  render() {
    return (
      <header>
        <Link to="/"><div className="account-ico">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="15.3 342.6 583.1 110" enable-background="new 15.3 342.6 583.1 110">
              <path fill="#57696D" d="M97.3 369.1c-2-4.8-11.1-22.2-29.4-22.2H42.3v45.7h11.8c10.5 0 19.8-4 19.8-17.8h2v37.4h-2c0-13.7-9.1-17.3-19.8-17.3H42.3v37.2c0 11.8-1.2 16.7 12.3 16.7v1.6H15.3V449c13.4 0 12.3-4.9 12.3-16.7v-69.4c0-11.8 1.2-16.7-12.3-16.7v-1.6h75.5l8.1 23.8-1.6.7zm60.2 83.5c-27.4 0-53.7-20.4-53.7-55.1 0-34.5 26.3-54.8 53.7-54.8 27.6 0 53.8 20.4 53.8 54.8.1 34.7-26.2 55.1-53.8 55.1zm0-107.7c-26.8 0-37.5 30.5-37.5 52.5 0 22.1 10.7 52.8 37.5 52.8 27 0 37.7-30.7 37.7-52.8 0-21.9-10.7-52.5-37.7-52.5zm123 107.7c-27.4 0-53.7-20.4-53.7-55.1 0-34.5 26.3-54.8 53.7-54.8 27.6 0 53.8 20.4 53.8 54.8.1 34.7-26.2 55.1-53.8 55.1zm0-107.7c-26.8 0-37.5 30.5-37.5 52.5 0 22.1 10.7 52.8 37.5 52.8 27 0 37.7-30.7 37.7-52.8 0-21.9-10.7-52.5-37.7-52.5zm100 105.9c-12.8-.1-25.7-.3-38.8-.3V449c13.4 0 12.3-4.9 12.3-16.7v-69.4c0-11.8 1.2-16.7-12.3-16.7v-1.6c14.6 0 29.4-.3 43.7-.3 14.6-.1 63.1-.3 63.1 53.3-.1 46.7-35 53.5-68 53.2zm2.3-104.2c-14.7 0-14.1 5.3-14.1 17v67.7c0 11.8.9 17 14.1 17 21.8 0 49.5-10 49.5-51.1 0-47.1-34.8-50.6-49.5-50.6z"></path>
              <path fill="#3D3D3D" d="M494.1 379.9c-.9 0-1.9 0-2.8.1-7 .5-11.8-.8-14.1-3.8-2.3-2.9-1.5-6.3-1.5-6.5 1.3-6.2 3.8-18.5 4.3-20.4v-.1h.1c2.6 0 23-.2 23.4-.2h13.8c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2-.2 0-.3 0-.5.1h-40.9l-7.5 39.3c-.1.1-.1.2-.1.2 0 .1-1.2 6.5-1.6 8.2-.3 1.4-.1 2.8.5 3.5.3.4.8.6 1.2.6 1 0 2.2-.8 3.6-2.4l.1-.1h.1l.1-.1c6.7-8.4 13-10.1 21.7-10.1 16.8 0 30.5 14.3 30.5 31.9 0 16.9-13.9 31.2-30.3 31.2-15.7 0-28.6-11.8-30.5-28.2v-.1c0-1.2-1-2.3-2.3-2.3-1.1 0-2.1.8-2.3 2v.2l.1.6c2.1 18.3 17 32.1 34.8 32.1 19.3 0 35-16.2 35-36.1 0-19.5-15.7-35.2-34.9-35.2zm103 51.9c-.8-.3-1.6 0-2.3.8-.4.5-.8 1.2-.8 1.5-.1.2-6.2 12.6-21.5 12.6-8.3 0-16.5-5-19.7-8.6-1.9-2.1-5.1-9.2 2.4-16.6 0 0 .6-.6 1.4-1.5 4.1-4.3 16.4-17.5 22-23.6l.1-.1c.8-.9 1.7-1.8 2.5-2.6 5.6-6.2 8.1-12.3 8.1-20 0-16.8-12.6-30-28.6-30.1h-.8c-.6 0-1.2 0-1.9.1-.8.1-1.6.1-2.5.3h-.3c-14.5 2.3-24.2 14.7-24.6 31.6v.3c.1 1.1 1.1 2 2.2 2 1.2 0 2.2-1 2.2-2.2 0-.2 0-.4-.1-.6.3-6.8 2.1-12.8 5.2-17.5 4.8-6.7 11-8.8 14.2-9.5 1.7-.3 3.6-.5 5.4-.5 14.5 0 25.1 10.8 25.1 25.8 0 8.7-2 12.4-12.6 23.3h-.1l-.2.1c-1.3 1.3-39.1 40.3-42.8 44.2-1.2 1.2-4.7 4.9-2.6 7.1.4.4.8.6 1.4.6 1.3 0 3-1.1 4.9-2.3 2.7-1.7 6.1-3.8 9.5-3.8 3.3 0 6.5 1.3 10.2 2.9.8.3 1.6.7 2.5 1.1 4.8 2.2 10.9 4.8 17.7 4.8 13.3 0 22.7-10.7 25-15.5l.1-.3c.6-1.4 1.2-3-.7-3.8z"></path>
            </svg>
        </div></Link>
        <div className="bio">
          <h3>Food52</h3>
          <h2>5,704 posts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.5m followers &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 633 following</h2>
          <p>We believe that if you want to eat better, and you want to help change our food system, you need to cook. Maybe not all the time, but some. You don't have to eat local foods every day; you don't have to shop at the farmers market every week.</p>
        </div>
      </header>
    )
  }
});

export default Header;