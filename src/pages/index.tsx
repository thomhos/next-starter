import React from 'react'
import { Link } from 'next-routing-tools'

import { withHocs } from '../utils'

class Home extends React.Component {
    public render() {
        return (
            <div>
                <p>Hello!</p>
                <ul>
                    <li>
                        <Link href="/about">
                            <a>Go to about page</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts">
                            <a>Go to posts page</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts/dynamic-slug">
                            <a>Go to post detail without refresh</a>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default withHocs(Home)
