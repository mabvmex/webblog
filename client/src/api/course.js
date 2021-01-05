import { basePath, apiVersion } from './config';

export function getCoursesApi() {
    const url = `${basePath}/${apiVersion}/get-courses`;

    return fetch(url)
    .then(respone => {
        return respone.json()
    })
    .then(result => {
        return result;
    })
    .catch(err => {
        return err;
    })

}