import { NULL_LOGO } from "./brands/null";
import { BRANDS } from "./const";

// export function user(){
//     let access_token = localStorage.getItem('access_token') ;
//     if ( !access_token ) return ;
//     access_token = access_token.substring(access_token.indexOf('.')+1, access_token.lastIndexOf('.'));
//     access_token = atob(access_token);
//     access_token = JSON.parse(access_token);
//     return access_token;
// }
export function brand_image( brand_id ) {
  return BRANDS.find(e => e.value == brand_id )?.image || NULL_LOGO ;
}







