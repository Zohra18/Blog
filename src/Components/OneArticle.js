import React from 'react'

const OneArticle = (props) => {
  console.log(props.location.state);
  return(
    <div className="one-article">
        <div className="card" style={{width: 40 + "rem", height: 24 + "rem"}}>
          <div className="card-body">
            <h5 className="card-title">{props.location.state.article.title}</h5>
            <p className="card-text">{props.location.state.article.text}</p>
          </div>
        </div>
    </div>
  )
}

export default OneArticle
