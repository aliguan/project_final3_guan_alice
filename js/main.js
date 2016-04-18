$( document ).ready( function() {
    $( '.marquee' ).marquee();
} );

$( document ).ready( function() {
    $( '#fullpage' ).fullpage();
} );

$( document ).ready( function() {
  $( '.drawer' ).drawer();
} );

/* Show secret menu when p'ressing 'z' */
window.addEventListener( 'keydown', revealMenu, false );

var keys = [];

function revealMenu( event ) {
    keys[ event.keyCode ] = true;
    if ( keys[ 90 ] ) {
        var secret = document.getElementById( 'secretmenu' );
        secret.style.display = 'block';
    }
}
