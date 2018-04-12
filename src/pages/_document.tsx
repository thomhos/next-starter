import { ServerResult, renderStatic } from 'glamor/server'
import Document, { DocumentProps, Head, Main, NextScript } from 'next/document'
import React from 'react'
import { CustomDocumentInitialProps } from 'types/next'

import { env } from '../utils'

import '../utils/styling/reset'

export default class CustomDocument extends Document {
    public static async getInitialProps({
        renderPage,
    }: CustomDocumentInitialProps) {
        const page = renderPage()
        const styles = renderStatic(() => page.html || page.errorHtml)
        return { ...page, ...styles }
    }

    constructor(props: DocumentProps & ServerResult) {
        super(props)
        const { __NEXT_DATA__, ids } = props
        if (ids) {
            __NEXT_DATA__.ids = ids
        }
    }

    public render() {
        const { NODE_ENV } = env

        return (
            <html>
                <Head>
                    <style
                        dangerouslySetInnerHTML={{ __html: this.props.css }}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `window.env = { NODE_ENV: '${NODE_ENV}' };`,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
