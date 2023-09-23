import React from 'react'
import ContentLoader from 'react-content-loader'

const Vloader = props => (
  <ContentLoader viewBox="0 0 500 400" height={"100%"} width={"100%"}
  backgroundColor="#0e3264"

  {...props}>


    <rect x="3" y="3" rx="50" ry="50" width="100%" height="300px" />
    <rect x="100" y="340" rx="20" ry="20" width="292" height="20" />
  </ContentLoader>
)

Vloader.metadata = {
  filename: 'Vloader',
}

export default Vloader