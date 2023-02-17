import {useRouter} from 'next/router'

import React from 'react'

const post = () => {
    const router = useRouter()
    const {sno} = router.query
  return (
    <div>posts: {sno}</div>
  )
}

export default post