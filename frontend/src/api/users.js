import {
    basePath,
    apiVersion
} from './config';

export function signUpApi(data) {
    const url = `${basePath}/${apiVersion}/signup`;
    const params = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch(url, params).then(response => {
        console.log(response);
        return response.json();
    }).then(result => {
        return result
    });
}