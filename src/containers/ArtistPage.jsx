import React from 'react'

class ArtistPage extends React.Component {
  render () {
    return (
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Recherche</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Artist
            </li>
          </ol>
        </nav>
        <div className="page-header">
          <h1>Albums</h1>
          <h2>{'Artist'}</h2>
        </div>

        <div className="container">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <div className="card" style={{ width: '14rem' }}>
              <img
                className="card-img-top"
                src="http://placehold.it/300x300"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">{'Album name'}</p>
              </div>
            </div>
            <div className="card" style={{ width: '14rem' }}>
              <img
                className="card-img-top"
                src="http://placehold.it/300x300"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">{'Album name'}</p>
              </div>
            </div>
            <div className="card" style={{ width: '14rem' }}>
              <img
                className="card-img-top"
                src="http://placehold.it/300x300"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">{'Album name'}</p>
              </div>
            </div>
            <div className="card" style={{ width: '14rem' }}>
              <img
                className="card-img-top"
                src="http://placehold.it/300x300"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">{'Album name'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ArtistPage
