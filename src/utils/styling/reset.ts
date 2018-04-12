import { css } from 'glamor'

import 'glamor/reset'

import { colors } from '../../config'
import { getFontFamily } from './helpers'

css.global('*, *:before, *:after', {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
})

css.global('html, body', {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    minWidth: '320px',
})

css.global('html', {
    fontFamily: getFontFamily('primary'),
    fontSize: '10px',
    color: colors.BLACK,
    backgroundColor: colors.WHITE,
    height: '100%',
})

css.global('.no-scroll', {
    overflow: 'hidden',
})

css.global('body', {
    display: 'flex',
    minHeight: '100%',
    height: 'auto',
    fontSize: '1.6rem',
    lineHeight: '1.3',

    hyphens: 'auto',
    wordBreak: 'normal',
})

css.global('body:after', {
    content: '""',
    minHeight: 'inherit',
    fontSize: 0,
})

css.global('#__next', {
    width: '100%',
    minHeight: '100vh',
})
