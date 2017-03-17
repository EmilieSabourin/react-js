import * as request from 'request-promise'


/* FREE JSON API EXAMPLE */
/* https://www.apixu.com/api-explorer.aspx */
const URL = 'https://tranquil-savannah-17310.herokuapp.com/'

export const ENDPOINTS = {

    PET_URL: URL + 'http://api.petfinder.com/pet.find',

}

/* REQUEST (Promise) DOCUMENTATION */
/* https://github.com/request/request-promise */

export function get( url, queryParameters ) {

    //returns a Promise which can be used with the async - await syntax

    return request.get( {
        json: true,
        uri: url,
        qs: queryParameters
    })
}