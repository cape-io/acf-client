import React, { PropTypes } from 'react'

import Right from './Right'

const boxClassName = 'box-flip box-icon box-icon-center box-icon-round box-icon-large'

function MemberDetailRight({ bio, displayName, twitter, recentWorks, reviews }) {
  return (
    <div className="col-lg-9 col-md-9 col-sm-8">
      {/* FLIP BOX */}
      <div className={`${boxClassName} text-center nomargin`}>
        <div className="front">
          <div className="box1 noradius">
            <div className="box-icon-title">
              <i className="fa fa-user" />
              <h2>{displayName} – Profile</h2>
            </div>
            <p dangerouslySetInnerHTML={{ __html: bio }} />
          </div>
        </div>
      </div>
      <Right
        displayName={displayName}
        twitter={twitter}
        recentWorks={recentWorks}
        reviews={reviews}
      />
    </div>
  )
}
MemberDetailRight.propTypes = {
  bio: PropTypes.string,
  displayName: PropTypes.string,
  recentWorks: PropTypes.string,
  reviews: PropTypes.string,
  twitter: PropTypes.array,
}
export default MemberDetailRight
