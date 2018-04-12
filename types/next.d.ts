import { Request, Response } from 'express'

export interface Environment {
    PORT: number
    NODE_ENV: string
}

export interface NextWindow extends Window {
    __NEXT_DATA__: {
        ids: string[]
    }
    env: Environment
}

export interface GetInitialProps<Q = {}> {
    query: Q // query string section of URL parsed as an object
    pathname: string // path section of URL
    asPath: string // String of the actual path (including the query) shows in the browser
    req: Request
    res: Response
    jsonPageRes: Response
    err: Error
}

export interface NextComponent<P = {}, S = {}>
    extends React.ComponentLifecycle<P, S> {
    getInitialProps?(ctx: GetInitialProps<any>, ...args: any[]): Promise<any>
}

// Used on custom document
export interface RenderedPage {
    html: string
    head: { type: string; key: string; ref: any; props: any }[]
    errorHtml: string
    chunks: { names: string[]; filenames: string[] }
}

export interface CustomDocumentInitialProps {
    renderPage: () => RenderedPage
}
