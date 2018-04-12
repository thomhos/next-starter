import { rehydrate } from 'glamor'
import React from 'react'

import { NextWindow, GetInitialProps, NextComponent } from 'types/next'

import { isBrowser } from '../env/is-browser'

export function withRehydratedStyles<P>(Component: React.ComponentType<P>) {
    return class WithRehydratedStylesHoc extends React.Component<P> {
        public static async getInitialProps(ctx: GetInitialProps) {
            const Comp = Component as NextComponent<P>
            return Comp.getInitialProps ? Comp.getInitialProps(ctx) : {}
        }

        public componentWillMount() {
            if (isBrowser) {
                const ids = (window as NextWindow).__NEXT_DATA__
                    ? (window as NextWindow).__NEXT_DATA__.ids
                    : []
                rehydrate(ids)
            }
        }

        public render() {
            return <Component {...this.props} />
        }
    }
}
