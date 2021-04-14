import {getToken, logOut} from "./Authentication";

const url = process.env.REACT_APP_BACKEND_URL;

export async function authenticate(email, password) {
    return await fetch(url + "api/authenticate", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: email,
            password: password
        })
    })
}

export async function getAllPersons() {
    let token = getToken();
    if (!token) {
        logOut()
    }
    return await fetch(url + "api/persons", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Token " + token
        }
    }).then(response => response.json())
}
