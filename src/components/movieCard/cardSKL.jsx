import React from 'react'
import ContentLoader from 'react-content-loader'

const CardSkelton = props => (
  <ContentLoader viewBox="0 0 500 700" height={"100%"} width={"100%"}
  backgroundColor="#0e3264"

  {...props}>


    <rect x="3" y="3" rx="10" ry="10" width="100%" height="600px" />
    <rect x="100" y="620" rx="0" ry="0" width="292" height="20" />
    <rect x="120" y="660" rx="0" ry="0" width="239" height="20" />
  </ContentLoader>
)

CardSkelton.metadata = {
  filename: 'CardSkelton',
}

export default CardSkelton