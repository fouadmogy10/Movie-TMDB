import React from 'react'
import { Helmet } from 'react-helmet'
function Meta({title,desc}) {
  return (
    <Helmet>
        <meta charSet='UTF-8'/>
        <title>{title}</title>
        <meta name="description" content={`${desc}`} />
    </Helmet>
  )
}

export default Meta