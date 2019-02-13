import React from 'react'
import axios from 'axios'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Pagination from '../components/Pagination'

// const defaultArtists = [...Array(3).keys()]

class SearchPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      submitted: false,
      error: false,
      emptyValue: false,
      value: '',
      artists: [],
      pageOfItems: [],
    }

    this.onChangePage = this.onChangePage.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/token').catch(err => {
      console.log('err : ', err)
    })
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems })
  }

  handleSearch(value) {
    //request to server with the serched value
    axios
      .get('http://localhost:3001/api/search?artist=' + value)
      .then(items => {
        if (items.data.length > 0) {
          this.setState({
            isLoading: false,
            error: false,
            value: '',
            artists: items.data,
          })
        } else {
          this.setState({
            isLoading: false,
            error: true,
            submitted: true,
            emptyValue: false,
          })
        }
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          submitted: false,
          error: true,
        })
        console.log('err : ', err)
      })
  }

  handleChange(e) {
    e.preventDefault()
    const { name, value } = e.target
    this.setState({ [name]: value, submitted: false })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { value } = this.state
    if (value === '') {
      this.setState({
        emptyValue: true,
        submitted: true,
      })
    } else {
      this.setState({
        submitted: true,
        error: false,
        isLoading: true,
        emptyValue: false,
      })
      this.handleSearch(value)
    }
  }

  render() {
    const {
      artists,
      value,
      error,
      submitted,
      isLoading,
      emptyValue,
    } = this.state
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
                <Button
                  variant="primary"
                  disabled={isLoading}
                  onClick={!isLoading ? this.handleSubmit : null}>
                  {isLoading ? 'Loading…' : 'Click to load'}
                </Button>
              </form>
            </div>
          </div>
        </div>
        {error &&
          submitted &&
          isLoading && (
            <Alert variant="danger">
              Une erreure est survenue, recharger la page.
            </Alert>
          )}

        {emptyValue &&
          submitted && (
            <Alert variant="warning">Le champs de recherche est vide...</Alert>
          )}

        {error &&
          !isLoading &&
          submitted &&
          !emptyValue && (
            <Alert variant="danger">
              Aucun artiste ne correspond à cette recherche...
            </Alert>
          )}

        <div className="container artists">
          {artists.length > 0 &&
            !isLoading &&
            submitted &&
            this.state.pageOfItems.map((artist, index) => (
              <div key={artist.id} className="media-container">
                <Link to={`/artist/${artist.id}`}>
                  <div className="media">
                    {artist.images.length > 0 && (
                      <img
                        className="align-self-start mr-3"
                        src={artist.images[artist.images.length - 1].url}
                        height="64"
                        width="64"
                        alt="cover"
                      />
                    )}
                    {artist.images.length === 0 && (
                      <img
                        className="align-self-start mr-3"
                        src="http://placehold.it/64x64"
                        alt="Generic placeholder image"
                      />
                    )}
                    <div className="media-body">
                      <h5 className="mt-0">{artist.name}</h5>
                      {artist.genres[0]}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          {submitted && (
            <Pagination
              items={this.state.artists}
              onChangePage={this.onChangePage}
            />
          )}
        </div>
      </div>
    )
  }
}

export default SearchPage
