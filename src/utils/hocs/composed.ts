import { compose } from 'recompose'

import { withRehydratedStyles } from './with-rehydrated-styles'
import { withRoutes } from './with-routes'

export const withHocs = compose(withRehydratedStyles, withRoutes)
