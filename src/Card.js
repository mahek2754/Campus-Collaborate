const Card = (props) => {
    return (
      <div className="container">
        <div className="card">
          <div className="content">
            <h2>{props.title}</h2>
            <p>
              {props.body}
            </p>
            <a href="" className="link">
              {props.link}
            </a>
          </div>
          <div className="image">
            <img src="goal.png" alt="" />
            <div className="collab">Collaborate +</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  