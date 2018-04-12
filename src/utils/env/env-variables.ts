import { isBrowser } from './is-browser'
import { NextWindow, Environment } from 'types/next'

const serverEnv: Environment = {
    PORT: Number(process.env.PORT) || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development',
}

export const env = isBrowser
    ? (window as NextWindow).env || serverEnv
    : serverEnv
