function kmeans(k, points) {
  "use strict";

  /* member data */
  var _k      = k || 2;
  var _points = points || [];

  var distance = function ( p1, p2 ){
    return Math.sqrt( Math.pow((p1.x-p2.x),2) + Math.pow((p1.y1-p2.y), 2) );
  }

  /* random pick n points */
  var random_sample = function ( points ) {
    var sample = [];
    for ( var i = 0 ; i < _k && i < points.length ; i++ ) {
      var random_number = Math.floor(Math.random() * points.length);
      var max = 100;
      while ( -1 == sample.indexOf( points[random_number] ) && max-- ) {
        console.log("not hit", random_number);
        random_number = Math.floor(Math.random() * points.length);
      }
      console.log("hit", random_number);
      sample.push( points[random_number] );
    }
    console.log( sample );
  }


  var main = function () {
    random_sample( _points );
    return _points;
  }

  return main( points );
};
