import React from 'react'
import { Link } from 'next-routing-tools'

import { withHocs } from '../../utils'

class PostDetail extends React.Component {
    public render() {
        return (
            <div>
                <p>Post detail!</p>
                <Link href="/">
                    <a>Go to home page</a>
                </Link>
            </div>
        )
    }
}

export default withHocs(PostDetail)
