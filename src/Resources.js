import React from 'react';
import './Resources.css';

const Resources = () => (
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
    <div className="row">
      <button style={{ fontSize: '1.4rem' }}>Discussion</button>
      <button style={{ fontSize: '1.4rem' }}>Resources</button>
    </div>
    <div className="search-div">
      <input type="text" placeholder="Search projects, ideas, etc" className="search-box" />
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
      <div className="heading">
        Advanced Certification in Data Science and AI
      </div>
      <div className="about">
        Profile pg - sign in/sign up what tech stacks u know , projects u did, even if signed up add feature to update ur tech stacks, add projects , project description ,tech, objectives, outcomes, team invite, team request accept
      </div>
      <div className="link">
        <a
          href="https://docs.google.com/document/d/1r4XkoNFmDzq4YsQK9FQsFbsWLrL"
          style={{
            color: 'lightblue',
            fontFamily: 'Inter',
          }}
        >
          https://docs.google.com/document/d/1r4XkoNFmDzq4YsQK9FQsFbsWLrL
        </a>
      </div>
    </div>

    <div className="card">
      <div className="heading">
        Advanced Certification in Data Science and AI
      </div>
      <div className="about">
        Profile pg - sign in/sign up what tech stacks u know , projects u did, even if signed up add feature to update ur tech stacks, add projects , project description ,tech, objectives, outcomes, team invite, team request accept
      </div>
      <div className="link">
        <a
          href="https://docs.google.com/document/d/1r4XkoNFmDzq4YsQK9FQsFbsWLrL"
          style={{
            color: 'lightblue',
            fontFamily: 'Inter',
          }}
        >
          https://docs.google.com/document/d/1r4XkoNFmDzq4YsQK9FQsFbsWLrL
        </a>
      </div>
    </div>
  </div>
  </React.Fragment>
);

export default Resources;
