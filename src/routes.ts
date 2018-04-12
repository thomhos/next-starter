import { route } from 'next-routing-tools'

export const routes = {
    index: route('/'),
    about: route('/about'),
    posts: route('/posts'),
    postDetail: route('/posts/:slug', '/posts/detail'),
}
