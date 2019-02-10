import React from 'react'

class AlbumPage extends React.Component {
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
            <li className="breadcrumb-item active" aria-current="page">
              Album
            </li>
          </ol>
        </nav>
        <div className="page-header">
          <h1>Pistes</h1>
          <h2>
            {'Artist'} - {'Album'}
          </h2>
        </div>
        <div className="container">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <div className="col">
              <img
                src={'http://placehold.it/540x540'}
                className="thumbnail img-responsive"
                alt={'Album name'}
              />
            </div>
            <div className="col">
              <ul className="list-group">
                <li className="list-group-item">
                  #. Track name <span className="badge">00:00</span>
                </li>
                <li className="list-group-item">
                  #. Track name <span className="badge">00:00</span>
                </li>
                <li className="list-group-item">
                  #. Track name <span className="badge">00:00</span>
                </li>
                <li className="list-group-item">
                  #. Track name <span className="badge">00:00</span>
                </li>
                <li className="list-group-item">
                  #. Track name <span className="badge">00:00</span>
                </li>
                <li className="list-group-item">
                  #. Track name <span className="badge">00:00</span>
                </li>
                <li className="list-group-item">
                  #. Track name <span className="badge">00:00</span>
                </li>
                <li className="list-group-item">
                  #. Track name <span className="badge">00:00</span>
                </li>
                <li className="list-group-item">
                  #. Track name <span className="badge">00:00</span>
                </li>
                <li className="list-group-item">
                  #. Track name <span className="badge">00:00</span>
                </li>
                <li className="list-group-item">
                  #. Track name <span className="badge">00:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AlbumPage
