import React, { Component, PropTypes } from 'react'
import { Link } from 'redux-history-sync'

class MembersPreview extends Component {

  render() {
    const { displayName, id, searchImg, intro, slug, onError } = this.props
    function handleImgError() {
      if (onError) onError(id)
      console.log('img error', slug, id)
    }
    return (
      <div className="col-xs-12 col-sm-4 col-md-3 animated fadeIn masonry-item">
        <div className="thumbnail" style={{
          background: 'rgba(243,243,243,1)',
          border: '0',
          borderRadius: '0',
          padding: '20px 10px',
        }}>
          <div>
            {
              searchImg &&
              <Link to={ `/members/${slug}` }>
                <img
                  alt={displayName}
                  src={`${searchImg.url}?w=200`}
                  onError={handleImgError}
                  style={{
                    maxHeight: '125px',
                    margin: 'auto',
                    display: 'block',
                  }}
                  title={displayName}
                />
              </Link>
            }
            <div className="caption">
              <h4 className="nomargin" style={{
                textAlign: 'center',
              }}>
                <Link to={ `/members/${slug}` }>{displayName}</Link>
              </h4>
              <p dangerouslySetInnerHTML={{ __html: intro }} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

MembersPreview.propTypes = {
  displayName: PropTypes.string.isRequired,
  searchImg: PropTypes.shape({
    url: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  intro: PropTypes.string,
  slug: PropTypes.string.isRequired,
  usState: PropTypes.string,
}

export default MembersPreview
