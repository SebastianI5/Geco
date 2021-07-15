
export class Context {
  public static value = ""
}


export function accessToken( value = null ){
  if ( value ) localStorage.setItem( Context.value + "access_token", value )
  return localStorage.getItem( Context.value + 'access_token');
}




export function user(){
  let access_token = accessToken();
  access_token = access_token.substring(access_token.indexOf('.')+1, access_token.lastIndexOf('.'));
  access_token = atob(access_token);
  access_token = JSON.parse(access_token);
  return access_token;
}

 function save_access_token( ids_url, client_id ) {
  let url = window.location.href
    .substring( window.location.href.indexOf( "#" ) + 1 )
    .split( "&" )
    .reduce( ( r, e ) => {
      r[e.split( "=" )[0]] = e.split( "=" )[1]
      return r;
    }
      , {} )

  localStorage.setItem( Context.value + "id_token", url["id_token"] )
  accessToken( url["access_token"] )
  set_next_clear_time( ids_url, client_id)
}


 function redirect_to_identity_server( ids_url, client_id ) {
  let redirect = window.location.href.includes( "#" ) ? window.location.href.substring( 0, window.location.href.indexOf( "#" ) ) : window.location.href;
  window.location.href = ids_url + "?redirect_uri=" + redirect + "&client_id=" + client_id + "&response_type=token%20id_token&nonce=" + Math.random()
  //window.location.href = ids_url + "?redirect_uri=" + window.location.origin + baseHref + "&client_id=" + client_id + "&response_type=token%20id_token&nonce=" + Math.random()
}

 function is_current_access_token_valid( ids_url, client_id, fake_token ) {
  let access_token = accessToken()
  if ( access_token == fake_token ) {
    access_token = null;
    localStorage.removeItem( Context.value + "access_token" );
  }
  if ( !access_token ) {
    return false;
  }
  set_next_clear_time( ids_url, client_id )
  return true
}


 function is_access_token_available_in_url() {
  return window.location.href.indexOf( "access_token" ) != -1
}


 function set_next_clear_time( ids_url, client_id ) {
  let access_token = user()
  let now = new Date().getTime() / 1000;
  let next_clear_time = access_token['exp'] - now;

  setTimeout( () => {
    localStorage.removeItem( Context.value + "id_token" );
    localStorage.removeItem( Context.value + "access_token" );
    redirect_to_identity_server( ids_url, client_id );
  }, next_clear_time * 1000 )
}



export function logout(logout_url , baseHref ){
  localStorage.removeItem( Context.value + "id_token" );
  localStorage.removeItem( Context.value + "access_token" );
  window.location.href = logout_url + "?redirect_uri=" + window.location.origin +  baseHref
}


export function authenticate(ids_url , client_id ,   FAKE_TOKEN, fake_authentication = false ){
  if ( fake_authentication == true ) {
    console.warn( "fake_authentication active" )
     accessToken( FAKE_TOKEN )
    return
  }
  if ( !is_current_access_token_valid( ids_url, client_id , FAKE_TOKEN ) ) {
    if ( is_access_token_available_in_url() ) save_access_token( ids_url, client_id );
    else redirect_to_identity_server( ids_url, client_id );
  }
}
