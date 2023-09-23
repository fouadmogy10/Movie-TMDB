import React from 'react'
import ContentLoader from 'react-content-loader'

const CastLoader = props => (
  <ContentLoader
    width={"100%"}
    height={100}
    viewBox="0 0 500 300"
    backgroundColor="#0e3264"
    {...props}
  >
   
    <circle cx="300" cy="100" r="100" />
    <rect x="124" y="220" rx="5" ry="5" width="100%" height="30" />
    <rect x="200" y="260" rx="5" ry="5" width="200px" height="30" />
    
  </ContentLoader>
)

CastLoader.metadata = {
  filename: 'CastLoader'
}

export default CastLoader