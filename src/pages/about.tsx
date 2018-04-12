import React from 'react'
import { Link } from 'next-routing-tools'

import { withHocs } from '../utils'

class About extends React.Component {
    public render() {
        return (
            <div>
                <p>About!</p>
                <Link href="/">
                    <a>Go to home page</a>
                </Link>
            </div>
        )
    }
}

export default withHocs(About)
