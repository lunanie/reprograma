import axios from 'axios'

import protocolo from './api'


export function postTweets(tweet, token){
    const url = `/tweets?X-AUTH-TOKEN=${token}`
    return protocolo.post(url, tweet)
}

