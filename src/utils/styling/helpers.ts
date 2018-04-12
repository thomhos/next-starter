import { CSSProperties } from 'glamorous'

import { breakpoints, fonts } from '../../config'

/**
 * Returns a font family from config as a string
 */
export function getFontFamily(f: keyof typeof fonts) {
    const family = fonts[f]
    if (!family) {
        return ''
    }
    return family.join(', ')
}

/**
 * Helper for media queries in css objects
 *
 * [media.min('sm)]: {
 *  .. styles
 * }
 */
export const media = {
    min: (bp: keyof typeof breakpoints) =>
        `@media(min-width: ${breakpoints[bp]}px)`,
    max: (bp: keyof typeof breakpoints) =>
        `@media(max-width: ${breakpoints[bp]}px)`,
}

/**
 * Helpers for defining simple media queries like propStyles
 * [
 *  mediaStyles({
 *    sm: { ... },
 *    md: { ... },
 *    lg: { ... }
 *  })
 * ]
 */
type bpStyles = { [key in keyof Partial<typeof breakpoints>]: CSSProperties }

export const mediaStyles = (styles: bpStyles) => () =>
    Object.keys(styles).map((bp: keyof typeof breakpoints) => ({
        [media.min(bp)]: styles[bp],
    }))

/**
 * Helper to define styles based on props
 * [
 *  propStyles({
 *    prop: { ... },
 *    anotherProp: ({ anotherProp }) => ({ ... })
 *  })
 * ]
 */
type StyleFunction<P> = (props: P) => CSSProperties
type Style<P> = CSSProperties | StyleFunction<P>
type Styles<P> = { [key in keyof P]: Style<P> }

export const propStyles = <P>(styles: Styles<P>) => (props: P) =>
    Object.keys(props).map((key: keyof P) => {
        const style: Style<P> = styles[key]
        return props[key]
            ? style && typeof style === 'function'
                ? style(props)
                : style
            : {}
    })
