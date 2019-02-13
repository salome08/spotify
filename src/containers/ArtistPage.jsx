import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class ArtistPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      error: false,
      artist: '',
      albums: []
    }

  }

  componentDidMount() {
    const id = this.props.match.params.id

    axios.get('http://localhost:3001/api/artist/' + id)
    .then(items => {
      this.setState({
        isLoading : false,
        error : false,
        albums: items.data
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
    const { albums } = this.state
    if (albums[0])
    {
    return (
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/search">Recherche</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
            </li>
          </ol>
        </nav>
        <div className="page-header">
          <h1>Albums</h1>
          <h2>{albums[0].artists[0].name}</h2>
        </div>
        <div className="container">

          <div className="row" style={{ justifyContent: 'space-between' }}>


            {albums.length > 0 &&
              albums.map((album,index) => (
                <div key={album.id} className="card" style={{ width: '14rem' }}>
                <Link to={{
                  pathname: `/album/${album.id}`,
                  state : {
                    img : `${album.images[0].url}`
                  }
                }}>
                {album.images.length === 0 &&  <img
                    className="card-img-top"
                    src="http://placehold.it/300x300"
                    alt="Card image cap"
                  />
                }

                {album.images.length > 0 &&  <img
                    className="card-img-top"
                    src={album.images[1].url}
                    alt="Card image cap"
                  />
                }
                <div className="card-body">
                  <p className="card-text">{album.name}</p>
                </div>
                </Link>
                </div>
              ))
            }

            </div>
            </div>
            </div>
          )
          }
            else {
              return null;
            }
        }
      }
            // <div className="card" style={{ width: '14rem' }}>
            //
            //
            //
            // {albums[1].images.length === 0 &&  <img
            //     className="card-img-top"
            //     src="http://placehold.it/300x300"
            //     alt="Card image cap"
            //   />}
            //
            //   {albums[1].images.length > 0 &&  <img
            //       className="card-img-top"
            //       src={albums[1].images[1].url}
            //       alt="Card image cap"
            //     />
            //   }
            //
            //   <div className="card-body">
            //     <p className="card-text">{albums[1].name}</p>
            //   </div>
            // </div>
            // <div className="card" style={{ width: '14rem' }}>
            //
            //
            //
            // {albums[2].images.length === 0 &&  <img
            //     className="card-img-top"
            //     src="http://placehold.it/300x300"
            //     alt="Card image cap"
            //   />}
            //
            //   {albums[2].images.length > 0 &&  <img
            //       className="card-img-top"
            //       src={albums[2].images[1].url}
            //       alt="Card image cap"
            //     />
            //   }
            //
            //   <div className="card-body">
            //     <p className="card-text">{albums[2].name}</p>
            //   </div>
            // </div>
            // <div className="card" style={{ width: '14rem' }}>
            //
            //
            //
            // {albums[3].images.length === 0 &&  <img
            //     className="card-img-top"
            //     src="http://placehold.it/300x300"
            //     alt="Card image cap"
            //   />}
            //
            //   {albums[3].images.length > 0 &&  <img
            //       className="card-img-top"
            //       src={albums[3].images[1].url}
            //       alt="Card image cap"
            //     />
            //   }
            //
            //
            //   <div className="card-body">
            //     <p className="card-text">{albums[3].name}</p>
            //   </div>
            // </div>
          // </div>
        // </div>
      // </div>
//     )
//     }
//       else {
//         return null;
//       }
//   }
// }

export default ArtistPage
