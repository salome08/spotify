import React from 'react'
import axios from 'axios'

const defaultArtists = [...Array(3).keys()]

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      submitted: false,
      error: false,
      emptyValue: false,
      value: '',
      artists: []
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/token')
    .then(res => {
      console.log('res : ', res);
    })
    .catch(err => {
      console.log('err : ', err);
    })
  }

  handleSearch(value) {
    //request to server with the serched value
    axios.get('http://localhost:3001/api/search?artist=' + value , )
    .then(items => {
      console.log('items : ', items.data);
      this.setState({
        isLoading : false,
        submitted : false,
        error : false,
        value : '',
        artists: items.data
      });
    })
    .catch(err => {
      this.setState({
        isLoading : false,
        submitted : false,
        error : true,
      });
      console.log('err : ', err);
    })
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { value } = this.state;
    if (value === '') {
      this.setState({emptyValue: true})
    }
    else {
      this.setState({
        submitted: true,
        isLoading: true,
        emptyValue: false
      });
      this.handleSearch(value);
    }
  }

  render () {
    const { value } = this.state;
    const { artists } = this.state;
    return (
        <div>
          <div className="container">
            <div className="page-header">
              <h1>Artistes</h1>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">Rechercher un artiste Spotify</div>
              <div className="panel-body">
                <form onSubmit={this.handleSubmit} className="form-inline">
                  <div className="form-group">
                    <input
                      type="search"
                      name="value"
                      value={value}
                      className="form-control"
                      placeholder="Mot(s)-clé(s)"
                      onChange={this.handleChange}
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
            {artists.map((artist,index) => (
              <div key={artist.id} className="media-container">
                <div  className="media">
                  <img
                    className="align-self-start mr-3"
                    src={artist.images[2].url}
                    alt="Generic placeholder image"
                  />
                  <div className="media-body">
                    <h5 className="mt-0">{artist.name}</h5>
                    {artist.genres[0]}
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
