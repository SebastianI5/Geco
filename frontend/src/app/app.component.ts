import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { authenticate, ConfigService, Context, logout } from '@eng';


const DEV_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlYyUFdKTEg3Z2dGVTJwaXRnWWNreUJEY3ZQelJhS1B3UXZWQS1PWmR3TTAifQ.eyJleHAiOjI2MTM1NTE2MDgsImlhdCI6MTYxMzU1MDcwOCwiYXV0aF90aW1lIjoxNjEzNTQ5ODA3LCJqdGkiOiJjNTI2OWIyYy05ZGZkLTRiNjctOGQ1YS00MWM5MTE4ZmMxMWYiLCJpc3MiOiJodHRwOi8vMTYxLjI3LjE0Ni4xNTo4MTgwL2F1dGgvcmVhbG1zL0dlY29fUmVhbG0iLCJzdWIiOiJmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDp1MDB0ZXN0IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiR2Vjb0xvY2FsaG9zdCIsIm5vbmNlIjoiMC41NTQzMzcxODgzMzE3MjQxIiwic2Vzc2lvbl9zdGF0ZSI6ImVjNzNiODQyLTMwMjAtNGYxNC1hM2UwLTA4MDU4MzM1MGUxNCIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo0MjAwIl0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiTGVvbmFyZG8gRGEgVmluY2kiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDp1MDB0ZXN0IiwiZ2l2ZW5fbmFtZSI6Ikxlb25hcmRvIiwiZmFtaWx5X25hbWUiOiJEYSBWaW5jaSIsImF1dGhvcml6YXRpb25zIjpbInJlY2VpdmVyIiwic2VuZGVyIiwiYWRtaW4iLCJzdXBlcnZpc29yIl19.NL1kbljTrgYimFMomfIc1_qrbwzRV78v3eZcAJRVrH0"
const RECEIVER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlYyUFdKTEg3Z2dGVTJwaXRnWWNreUJEY3ZQelJhS1B3UXZWQS1PWmR3TTAifQ.eyJleHAiOjI2MTM1NTE2MDgsImlhdCI6MTYxMzU1MDcwOCwiYXV0aF90aW1lIjoxNjEzNTQ5ODA3LCJqdGkiOiJjNTI2OWIyYy05ZGZkLTRiNjctOGQ1YS00MWM5MTE4ZmMxMWYiLCJpc3MiOiJodHRwOi8vMTYxLjI3LjE0Ni4xNTo4MTgwL2F1dGgvcmVhbG1zL0dlY29fUmVhbG0iLCJzdWIiOiJmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDp1MDB0ZXN0IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiR2Vjb0xvY2FsaG9zdCIsIm5vbmNlIjoiMC41NTQzMzcxODgzMzE3MjQxIiwic2Vzc2lvbl9zdGF0ZSI6ImVjNzNiODQyLTMwMjAtNGYxNC1hM2UwLTA4MDU4MzM1MGUxNCIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo0MjAwIl0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiQW5uYSBSaWNldml0b3JlIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiZjowOTMzOTA0Ni0wNzNjLTRlYjItOTA3ZC03ZGY3ZWRiYjFkNjA6ZjowOTMzOTA0Ni0wNzNjLTRlYjItOTA3ZC03ZGY3ZWRiYjFkNjA6ZjowOTMzOTA0Ni0wNzNjLTRlYjItOTA3ZC03ZGY3ZWRiYjFkNjA6dTAwdGVzdCIsImdpdmVuX25hbWUiOiJBbm5hIiwiZmFtaWx5X25hbWUiOiJSaWNldml0b3JlIiwiYXV0aG9yaXphdGlvbnMiOlsicmVjZWl2ZXIiXX0.g26lNjXnORdDPXVsLZXQvr9L4SffSVN9uzxNXFMxhgI"
const SENDER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlYyUFdKTEg3Z2dGVTJwaXRnWWNreUJEY3ZQelJhS1B3UXZWQS1PWmR3TTAifQ.eyJleHAiOjI2MTM1NTE2MDgsImlhdCI6MTYxMzU1MDcwOCwiYXV0aF90aW1lIjoxNjEzNTQ5ODA3LCJqdGkiOiJjNTI2OWIyYy05ZGZkLTRiNjctOGQ1YS00MWM5MTE4ZmMxMWYiLCJpc3MiOiJodHRwOi8vMTYxLjI3LjE0Ni4xNTo4MTgwL2F1dGgvcmVhbG1zL0dlY29fUmVhbG0iLCJzdWIiOiJmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDp1MDB0ZXN0IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiR2Vjb0xvY2FsaG9zdCIsIm5vbmNlIjoiMC41NTQzMzcxODgzMzE3MjQxIiwic2Vzc2lvbl9zdGF0ZSI6ImVjNzNiODQyLTMwMjAtNGYxNC1hM2UwLTA4MDU4MzM1MGUxNCIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo0MjAwIl0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiVmFsZXJpbyBNaXR0ZW50ZSIsInByZWZlcnJlZF91c2VybmFtZSI6ImY6MDkzMzkwNDYtMDczYy00ZWIyLTkwN2QtN2RmN2VkYmIxZDYwOmY6MDkzMzkwNDYtMDczYy00ZWIyLTkwN2QtN2RmN2VkYmIxZDYwOmY6MDkzMzkwNDYtMDczYy00ZWIyLTkwN2QtN2RmN2VkYmIxZDYwOnUwMHRlc3QiLCJnaXZlbl9uYW1lIjoiVmFsZXJpbyIsImZhbWlseV9uYW1lIjoiTWl0dGVudGUiLCJhdXRob3JpemF0aW9ucyI6WyJzZW5kZXIiXX0.GpVFV-oc6N_-MfmXcMkMm80rks0euzb9llCO5a1ebCc"
const ADMIN_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlYyUFdKTEg3Z2dGVTJwaXRnWWNreUJEY3ZQelJhS1B3UXZWQS1PWmR3TTAifQ.eyJleHAiOjI2MTM1NTE2MDgsImlhdCI6MTYxMzU1MDcwOCwiYXV0aF90aW1lIjoxNjEzNTQ5ODA3LCJqdGkiOiJjNTI2OWIyYy05ZGZkLTRiNjctOGQ1YS00MWM5MTE4ZmMxMWYiLCJpc3MiOiJodHRwOi8vMTYxLjI3LjE0Ni4xNTo4MTgwL2F1dGgvcmVhbG1zL0dlY29fUmVhbG0iLCJzdWIiOiJmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDp1MDB0ZXN0IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiR2Vjb0xvY2FsaG9zdCIsIm5vbmNlIjoiMC41NTQzMzcxODgzMzE3MjQxIiwic2Vzc2lvbl9zdGF0ZSI6ImVjNzNiODQyLTMwMjAtNGYxNC1hM2UwLTA4MDU4MzM1MGUxNCIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo0MjAwIl0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiRWxpc2FiZXR0YSBBbW1pbmlzdHJhdHJpY2UiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDp1MDB0ZXN0IiwiZ2l2ZW5fbmFtZSI6IkVsaXNhYmV0dGEiLCJmYW1pbHlfbmFtZSI6IkFtbWluaXN0cmF0cmljZSIsImF1dGhvcml6YXRpb25zIjpbImFkbWluIl19.G4o00Hk9T011XR4r6mUSnXTd9oCGodobYVHcYxVkQDk"
const SUPERVISOR_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlYyUFdKTEg3Z2dGVTJwaXRnWWNreUJEY3ZQelJhS1B3UXZWQS1PWmR3TTAifQ.eyJleHAiOjI2MTM1NTE2MDgsImlhdCI6MTYxMzU1MDcwOCwiYXV0aF90aW1lIjoxNjEzNTQ5ODA3LCJqdGkiOiJjNTI2OWIyYy05ZGZkLTRiNjctOGQ1YS00MWM5MTE4ZmMxMWYiLCJpc3MiOiJodHRwOi8vMTYxLjI3LjE0Ni4xNTo4MTgwL2F1dGgvcmVhbG1zL0dlY29fUmVhbG0iLCJzdWIiOiJmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDp1MDB0ZXN0IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiR2Vjb0xvY2FsaG9zdCIsIm5vbmNlIjoiMC41NTQzMzcxODgzMzE3MjQxIiwic2Vzc2lvbl9zdGF0ZSI6ImVjNzNiODQyLTMwMjAtNGYxNC1hM2UwLTA4MDU4MzM1MGUxNCIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo0MjAwIl0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiR2lvdmFubmkgU3VwZXJ2aXNvcmUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDp1MDB0ZXN0IiwiZ2l2ZW5fbmFtZSI6Ikdpb3Zhbm5pIiwiZmFtaWx5X25hbWUiOiJTdXBlcnZpc29yZSIsImF1dGhvcml6YXRpb25zIjpbInN1cGVydmlzb3IiXX0.yHn5E6LjufbOWK0vVARPEyVu-b2lNNkV_TpLR_xbci4"
const OLD_GECO = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlYyUFdKTEg3Z2dGVTJwaXRnWWNreUJEY3ZQelJhS1B3UXZWQS1PWmR3TTAifQ.eyJleHAiOjI2MTM1NTE2MDgsImlhdCI6MTYxMzU1MDcwOCwiYXV0aF90aW1lIjoxNjEzNTQ5ODA3LCJqdGkiOiJjNTI2OWIyYy05ZGZkLTRiNjctOGQ1YS00MWM5MTE4ZmMxMWYiLCJpc3MiOiJodHRwOi8vMTYxLjI3LjE0Ni4xNTo4MTgwL2F1dGgvcmVhbG1zL0dlY29fUmVhbG0iLCJzdWIiOiJmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDp1MDB0ZXN0IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiR2Vjb0xvY2FsaG9zdCIsIm5vbmNlIjoiMC41NTQzMzcxODgzMzE3MjQxIiwic2Vzc2lvbl9zdGF0ZSI6ImVjNzNiODQyLTMwMjAtNGYxNC1hM2UwLTA4MDU4MzM1MGUxNCIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo0MjAwIl0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiTGVvbmFyZG8gRGEgVmluY2kiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDpmOjA5MzM5MDQ2LTA3M2MtNGViMi05MDdkLTdkZjdlZGJiMWQ2MDp1MDB0ZXN0IiwiZ2l2ZW5fbmFtZSI6Ikxlb25hcmRvIiwiZmFtaWx5X25hbWUiOiJEYSBWaW5jaSIsInRlbmFudF9pZCI6ImdlY28ifQ.esWS4BMwoDYWwz34tnezlOtYRsVsLx00h4pNEv7on2M"

const FAKE_TOKEN = OLD_GECO;


// function save_access_token( ids_url, client_id, baseHref ) {
//   let url = window.location.href
//     .substring( window.location.href.indexOf( "#" ) + 1 )
//     .split( "&" )
//     .reduce( ( r, e ) => {
//       r[e.split( "=" )[0]] = e.split( "=" )[1]
//       return r;
//     }
//       , {} )

//   localStorage.setItem( "id_token", url["id_token"] )
//   localStorage.setItem( "access_token", url["access_token"] )

//   set_next_clear_time( ids_url, client_id, baseHref )
// }

// function redirect_to_identity_server( ids_url, client_id, baseHref ) {
//   window.location.href = ids_url + "?redirect_uri=" + window.location.origin + baseHref + "&client_id=" + client_id + "&response_type=token%20id_token&nonce=" + Math.random()
// }


// function is_current_access_token_valid( ids_url, client_id, baseHref ) {
//   let access_token = localStorage.getItem( "access_token" );
//   if ( access_token == FAKE_TOKEN ) {
//     access_token = null;
//     localStorage.removeItem( "access_token" );
//   }
//   if ( !access_token ) {
//     return false;
//   }
//   set_next_clear_time( ids_url, client_id, baseHref )
//   return true
// }

// function is_access_token_available_in_url() {
//   return window.location.href.indexOf( "access_token" ) != -1
// }



// function set_next_clear_time( ids_url, client_id, baseHref ) {
//   let access_token = user()
//   let now = new Date().getTime() / 1000;
//   let next_clear_time = access_token['exp'] - now;

//   setTimeout( () => {
//     localStorage.removeItem( "id_token" );
//     localStorage.removeItem( "access_token" );
//     redirect_to_identity_server( ids_url, client_id, baseHref );
//   }, next_clear_time * 1000 )
// }





@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
} )
export class AppComponent implements OnInit {

  sidenav_config: any[] = []

  menu_config: any[] = [
    {
      icon: "logout",
      label: "logout",
      function: () => {
         logout( this.configService.get( "logout_url" ),  this.baseHref)
      }
    }
  ]

  constructor( @Inject( APP_BASE_HREF ) public baseHref: string, private configService: ConfigService) { }

  ngOnInit() {
    let fake_authentication = this.configService.get( "fake_authentication" )
    let client_id = this.configService.get( "client_id" )
    let ids_url = this.configService.get( "ids_url" )
    Context.value = this.configService.get("context") + "_"
    authenticate(ids_url, client_id, FAKE_TOKEN, fake_authentication )


    this.sidenav_config = [{
      icon: "space_dashboard",
      link: "/dashboard",
      label: "dashboard",
      condition: true
    }, {
      icon: "account_box",
      link: "/dealers",
      label: "dealers",
      // condition: is_authorized( 'receiver', 'admin', 'supervisor', 'sender' )
      condition: true
    }, {
      icon: "request_quote",
      link: "/contracts",
      label: "contracts",
      // condition: is_authorized( 'receiver', 'admin', 'supervisor', 'sender' )
      condition: true
    }, {
      icon: "inventory_2",
      link: "/boxes",
      label: "boxes",
      // condition: is_authorized( 'receiver', 'admin', 'supervisor', 'sender' )
      condition: true
    }, {
      icon: "mail_outline",
      link: "/report_dealer_no_pec",
      label: "report_dealer_no_pec",
      // condition: is_authorized( 'receiver', 'admin', 'supervisor', 'sender' )
      condition: true
    }, {
      icon: "storage",
      link: "/report_occupation_by_pec",
      label: "report_occupation_by_pec",
      // condition: is_authorized( 'receiver', 'admin', 'supervisor', 'sender' )
      condition: true
    }]

  }
}




