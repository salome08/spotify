import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class AlbumPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      error: false,
      artist: '',
      cover: '',
      titres: []
    }

  }

  componentDidMount() {
    const id = this.props.match.params.id
    const cover = this.props.location.state.img
    axios.get('http://localhost:3001/api/album/' + id)
    .then(items => {
      this.setState({
        isLoading : false,
        error : false,
        titres: items.data,
        cover: cover
      });
    })
    .catch(err => {
      this.setState({
        isLoading : false,
        submitted : false,
        error : true,
      });
    })
  }


  render () {
    const { titres, cover } = this.state
    if (titres[0])
    {
    return (
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Recherche</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link to={`/artist/${titres[0].artists[0].id}`}>{titres[0].artists[0].name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {titres[0].name}
            </li>
          </ol>
        </nav>
        <div className="page-header">
          <h1>Pistes</h1>
          <h2>
            {titres[0].artists[0].name} - {titres[0].name}
          </h2>
        </div>
        <div className="container">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <div className="col">
              {cover.length > 0 && <img
                src={cover}
                className="thumbnail img-responsive"
                alt={'Album name'}
              />}
            </div>
            <div className="col">
            <ul className="list-group">
              {
                titres.map((titre, index) => (
                  <div key={titre.id}>
                  <div className="list-group-item">
                    {titre.name} <span className="badge">{Math.trunc(titre.duration_ms/60000)} : {Math.trunc(titre.duration_ms/1000 % 60)}</span>
                  </div>
                  </div>
                ))
              }
              </ul>
              </div>



                    </div>
        </div>
      </div>
    )
  }
  else
    return null
}
}

export default AlbumPage
