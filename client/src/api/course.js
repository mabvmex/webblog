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

export function getCoursesDataUdemyApi( id ) {
    const baseUrl = `https://www.udemy.com/api-2.0/courses/${id}`
    const coursesParams = `?fields[course]=title,headline,url,price,image_480x280`
    const url = baseUrl + coursesParams;

    return fetch(url)
    .then(async response => {
        return { code: response.status, data: await response.json() };
    })
    .then(result => {
        return result;
    })
    .catch(err => {
        return err;
    });
}