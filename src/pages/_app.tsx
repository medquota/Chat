import type { AppProps } from 'next/app'
import { getLoggedUserId } from '../utils/getLoggedUserId'
import '../styles/globals.css'
import '../styles/conversations.scss'
import '../styles/messages.scss'

// Default way to get a logged user
export const loggedUserId = getLoggedUserId()

function MyApp({ Component, pageProps, }: AppProps) {
  return <div> <Component {...pageProps} /> </div>
}

export default MyApp
