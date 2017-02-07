'use strict';


let cards = [];
for (let a = 0; a < 3; a++) {
    for (let b = 0; b < 3; b++) {
        for (let c = 0; c < 3; c++) {
            for (let d = 0; d < 3; d++) {
                cards.push( (a << 6) + (b << 4) + (c << 2) + d );
            }
        }
    }
}

function cardToString( card ){
    const str = "00000000" + card.toString(2);
    return str.substring( str.length - 8 )
}

function validate( c1, c2, c3 ){

    let result = true;

    for( let p=0;p<4 && result;p++){

        const p1 = ( c1 >> p*2 ) & 0x3;
        const p2 = ( c2 >> p*2 ) & 0x3;
        const p3 = ( c3 >> p*2 ) & 0x3;

        result &= checkProperty( p1, p2, p3 );
    }

    return result;

}

function checkProperty( p1, p2, p3 ){
    return ( p1 == p2 && p1 == p3 ) || ( p1 != p2 && p1 != p3 && p2 != p3 );
}

for( let c1=0;c1<81;c1++){
    for( let c2=c1+1;c2<81;c2++){
        for( let c3=c2+1;c3<81;c3++){
            if( validate( cards[c1], cards[c2], cards[c3])){
                console.log( cardToString( cards[c1] ) + " " + cardToString( cards[c2] ) +" "+  cardToString( cards[c3] ) + " ")
            }
        }
    }
}

