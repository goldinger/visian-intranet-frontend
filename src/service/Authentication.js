export function isLoggedIn() {
    let token = localStorage.getItem("token");
    return !!token
}

export function logOut(){
    localStorage.removeItem('token');
    window.location.reload();
}

export function getToken(){
    return localStorage.getItem('token');
}

export function setToken(token){
    localStorage.setItem('token', token);
}
