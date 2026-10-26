const Card = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <img className="avatar" src={props._avatar} alt="" />
        <h2 className="card-title">{props._name}</h2>
        <p className="card-description">{props._desc}</p>
      </div>

      <div className="blur-overlay"></div>
    </div>
  )
}

export default Card
