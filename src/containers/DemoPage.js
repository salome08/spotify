import React from 'react'

const defaultArtists = [...Array(3).keys()]

class DemoPage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className="container">
            <div className="page-header">
              <h1>Artistes</h1>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">Rechercher un artiste Spotify</div>
              <div className="panel-body">
                <form className="form-inline">
                  <div className="form-group">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Mot(s)-clé(s)"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Chercher
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="container artists">
            {defaultArtists.map(() => (
              <div className="media-container">
                <div className="media">
                  <img
                    className="align-self-start mr-3"
                    src="http://placehold.it/64x64"
                    alt="Generic placeholder image"
                  />
                  <div className="media-body">
                    <h5 className="mt-0">Name</h5>
                    Genres
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="container text-center">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <hr />

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

        <hr />

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
      </div>
    )
  }
}

export default DemoPage
