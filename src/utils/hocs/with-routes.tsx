import React from 'react'
import { RouteProvider } from 'next-routing-tools'
import { GetInitialProps, NextComponent } from 'types/next'

import { routes } from '../../routes'

export function withRoutes<P>(Component: React.ComponentType<P>) {
    return class WithRoutesHoc extends React.Component<P> {
        // Call child's getInitialProps
        public static async getInitialProps(ctx: GetInitialProps) {
            const Comp = Component as NextComponent<P>
            return Comp.getInitialProps ? Comp.getInitialProps(ctx) : {}
        }

        public render() {
            return (
                <RouteProvider routes={routes}>
                    <Component {...this.props} />
                </RouteProvider>
            )
        }
    }
}
