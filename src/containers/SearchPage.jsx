import React from 'react'

const defaultArtists = [...Array(3).keys()]

class SearchPage extends React.Component {
  render () {
    return (
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
    )
  }
}

export default SearchPage
