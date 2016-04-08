import React, { PropTypes } from 'react'
import map from 'lodash/map'

import InfoBox from './InfoBox'

function MemberDetailLeft(props) {
  const { address, displayName, facebook, photo, intro, links, profileTypes,
          since, statement, twitter } = props
  return (
    <div className="col-lg-3 col-md-3 col-sm-4">
      <InfoBox
        address={address}
        displayName={displayName}
        image={photo}
        intro={intro}
        since={since}
      />
      <div className="box-light margin-bottom-30">
        <div className="row margin-bottom-20">
          <div className="col-md-4 col-sm-4 col-xs-4 text-center bold">

          </div>
        </div>
        <div className="text-muted">
          <h2 className="size-18 text-muted margin-bottom-6">
            <b style={{ paddingRight: '.5em' }}>About</b>
            { displayName }
          </h2>
          {
            profileTypes &&
            <h3 className="size-11 margin-top-0 margin-bottom-10 text-info">
              { map(profileTypes, ({ label, value }) =>
                <div key={value}>{ label }</div>
              )}
            </h3>
          }
          <p dangerouslySetInnerHTML={{ __html: statement }} />
          <ul className="list-unstyled nomargin">
            { links && map(links, (link, index) => (
              <li key={index} className="margin-bottom-10">
                <i className="fa fa-globe width-20 hidden-xs hidden-sm" />
                <a href={link.url}>
                  {link.title}
                </a>
              </li>
            ))}
            {
              facebook &&
              <li className="margin-bottom-10">
                <i className="fa fa-facebook width-20 hidden-xs hidden-sm" />
                <a href="https://www.facebook.com/composersforum/">{displayName}</a>
              </li>
            }
            {
              twitter &&
              <li className="margin-bottom-10">
                <i className="fa fa-twitter width-20 hidden-xs hidden-sm" />
                <a href="http://www.twitter.com/">@member</a>
              </li>
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

MemberDetailLeft.propTypes = {
  address: PropTypes.object,
  displayName: PropTypes.string,
  facebook: PropTypes.string,
  photo: PropTypes.shape({
    url: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  intro: PropTypes.string,
  links: PropTypes.array,
  profileTypes: PropTypes.array,
  since: PropTypes.string,
  statement: PropTypes.string,
  twitter: PropTypes.string,
}

export default MemberDetailLeft
