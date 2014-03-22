function kmeans(k, points) {
  "use strict";

  /* member data */
  var _k      = k || 2;
  var _points = points || [];
  var _group  = new Array(_k);;

  /* Compute distance of two points */
  var distance = function ( p1, p2 ){
    return Math.sqrt( Math.pow((p1.x-p2.x),2) + Math.pow((p1.y-p2.y), 2) );
  }

  /* Random pick n points */
  var random_sample = function ( points ) {
    var sample = [];
    for ( var i = 0 ; i < _k && i < points.length ; i++ ) {
      var random_number = Math.floor(Math.random() * points.length);
      while ( -1 != sample.indexOf( points[random_number] ) ) { 
        // -1 : not found, if found then get another random number
        random_number = Math.floor(Math.random() * points.length);
      }
      sample.push( points[random_number] );
    }
    return sample;
  }

  var mean = function ( points ) {
    var x = 0.0, y = 0.0;
    for ( i in points ) {
      x += points[i].x;
      y += points[i].y;
    }
    return { x: x/points.length, y: y/points.length };
  }

  /* Just a main function */
  var main = function () {
    var mean_points = random_sample( _points );
    {
      for ( var i = 0 ; i < _k ; i++ ) {
        _group[i] = [];
      }
      for ( var i = 0 ; i < _points.length ; i++ ) {
        var t = new Array(_k);
        for ( var j = 0 ; j < _k ; j++ ) {
          t[j] = distance( _points[i], mean_points[j] );
        }
        var idx = t.indexOf( Math.min.apply(null, t) );
        _group[idx].push( _points[i] );
      }
    }
    return _group;
  }
  return main( points );
};
