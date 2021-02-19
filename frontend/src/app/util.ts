export function user(){
    let access_token = localStorage.getItem('access_token');
    access_token = access_token.substring(access_token.indexOf('.')+1, access_token.lastIndexOf('.'));
    access_token = atob(access_token);
    access_token = JSON.parse(access_token);
    return access_token;
}

export const base_url="http://localhost:8070";