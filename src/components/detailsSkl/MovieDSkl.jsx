import React from 'react'
import ContentLoader from 'react-content-loader'

const DetailsLoader = props => (
  <ContentLoader
    width={"100%"}
    height={"100%"}
    viewBox="0 0 700 500"
    backgroundColor="#0e3264"
    foregroundColor="#dbdbdb"
    {...props}
  >
    <rect x="55" y="42" rx="16" ry="16" width="274" height="400px" />
    <rect x="412" y="133" rx="3" ry="3" width="102" height="7" />
    <rect x="402" y="122" rx="3" ry="3" width="178" height="6" />
    <rect x="405" y="159" rx="3" ry="3" width="178" height="6" />
    <rect x="416" y="182" rx="3" ry="3" width="102" height="7" />
    <rect x="405" y="109" rx="3" ry="3" width="178" height="6" />
    <rect x="405" y="246" rx="3" ry="3" width="178" height="6" />
    <rect x="405" y="260" rx="3" ry="3" width="178" height="6" />
    <rect x="405" y="286" rx="3" ry="3" width="178" height="6" />
    <rect x="406" y="309" rx="14" ry="14" width="72" height="32" />
    <rect x="505" y="309" rx="14" ry="14" width="72" height="32" />
    <rect x="376" y="61" rx="3" ry="3" width="231" height="29" />
  </ContentLoader>
)

DetailsLoader.metadata = {
  filename: 'DetailsLoader',
}

export default DetailsLoader