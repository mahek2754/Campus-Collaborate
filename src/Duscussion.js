import React from 'react';
import './Discussion.css'; 

const Discussion = () => (

  <React.Fragment>
    {/* <Helmet> */}
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter&family=Nunito:wght@500&family=Roboto:wght@400;500;700&display=swap"
      rel="stylesheet"
    />




  <div className="main">

    <div className="add-btn-div">
      <button className="add-btn">Ask A Question
        <span className="material-icons">
          add_box
        </span>
      </button>
    </div>
    <div className="row">
      <button style={{ fontSize: '1.4rem' }}>Discussion</button>
      <button style={{ fontSize: '1.4rem' }}>Resources</button>
    </div>
    <div className="search-div">
      <input type="text" placeholder="Search projects, ideas, etc" className="search-box"></input>
      <button style={{
        backgroundColor: '#012530',
        color: 'white',
        border: 'none',
        marginLeft: '-25%',
      }}>
        <span className="material-icons">
          search
        </span>
      </button>
      <div className="choose">
        <div className="options">
          Sort
          <span className="material-icons">
            sort
          </span>
        </div>
        <div className="options">
          Filter
          <span className="material-icons">
            filter_alt
          </span>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="card-left-section">
        <div className="card-text">
          How can we integrate third-party tools seamlessly into our software collaboration environment?
          How can we integrate third-party tools seamlessly into our software collaboration environment?
        </div>
        <div className="card-details">
          Posted by ISHANYA SHARMA | 3rd Sep 2023
        </div>
      </div>
      <div className="card-right-section">
        <button style={{
          backgroundColor: '#012530',
          color: 'white',
          border: 'none',
        }}>
          <span className="material-icons">
            expand_more
          </span>
        </button>
      </div>
    </div>

    <div className="answer-card">
      <div className="details">
        RAHUL KUMAR | B.Tech | 2026
      </div>
      <div className="paragraph">
        One way to seamlessly integrate third-party tools into our software collaboration environment is by leveraging APIs (Application Programming Interfaces). APIs allow different software systems to communicate with each other, enabling smooth data exchange and functionality integration. Firstly, we need to identify the third-party tools that would add value to our collaboration platform, such as project management tools, version control systems, or testing frameworks. Next, we can explore the documentation provided by these tools to understand their API capabilities. Many modern tools offer well-documented APIs with clear endpoints and authentication mechanisms.
      </div>
    </div>

    <div className="card">
      <div className="card-left-section">
        <div className="card-text">
          How can we integrate third-party tools seamlessly into our software collaboration environment?
          How can we integrate third-party tools seamlessly into our software collaboration environment?
        </div>
        <div className="card-details">
          Posted by ISHANYA SHARMA | 3rd Sep 2023
        </div>
      </div>
      <div className="card-right-section">
        <button style={{
          backgroundColor: '#012530',
          color: 'white',
          border: 'none',
        }}>
          <span className="material-icons">
            expand_more
          </span>
        </button>
      </div>
    </div>

    <div className="card">
      <div className="card-left-section">
        <div className="card-text">
          How can we integrate third-party tools seamlessly into our software collaboration environment?
          How can we integrate third-party tools seamlessly into our software collaboration environment?
        </div>
        <div className="card-details">
          Posted by ISHANYA SHARMA | 3rd Sep 2023
        </div>
      </div>
      <div className="card-right-section">
        <button style={{
          backgroundColor: '#012530',
          color: 'white',
          border: 'none',
        }}>
          <span className="material-icons">
            expand_more
          </span>
        </button>
      </div>
    </div>
  </div>
  </React.Fragment>
);

export default Discussion;
