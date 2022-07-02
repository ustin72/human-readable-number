module.exports = function toReadable (number) {
  let units = [ '', 'one','two','three','four','five','six','seven','eight','nine', 'ten',
                'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen' ];
  let tens = [ 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety' ];
  let str = String(number);
  
  if(number === 0) {
    return 'zero';
  }

  if( (number < 0) && (number > -20) ) {
    return ( '-' + units[ Math.abs( number ) ] );
  }
  if(number < 20)  {
    return units[ number ];
  }

  if(number < 100) {
    return ( tens[ Number( str[0] ) - 2 ] + ' ' + units[ Number( str[1] ) ] ); 
  }
  if( (number > -100) && (number <= -20 ) ) {
    let str = String(  Math.abs( number ) );
    return ( '-' +  tens[ Number( str[0] ) - 2 ] + ' ' + units[ Number( str[1] ) ] ) ;
  }

  if( (number <1000) && (number - 100 * str[0]) < 20) {
    return ( units[ Number( str[0] ) ] + ' hundred ' + units[ Number( str ) % Number ( str[0] * 100 ) ]);
  } 
  if( (number > -1000) && (number <= -100) && ( Math.abs( number - 100 * str[1] ) < 20 ) ) {
    let str = String(  Math.abs( number ) );
    return ( '-' + units[ Number( str[0] ) ] + ' hundred ' + units[ Number( str ) % Number ( str[0] * 100 ) ]);
  }

  if(number < 1000) {
    return ( units[ Number( str[0] ) ] + ' hundred ' + tens[ Number( str[1] - 2) ] + ' ' + units[ Number( str[2] ) ]);
  }  
  if(number > -1000) {
    let str = String(  Math.abs( number ) );
    return ( units[ Number( str[0] ) ] + ' hundred ' + tens[ Number( str[1] - 2) ] + ' ' + units[ Number( str[2] ) ]);
  }
}