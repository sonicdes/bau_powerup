/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

// you can access arguments passed to your iframe like so
var site = t.arg('site');

t.render(function(){
  // this function we be called once on initial load
  // and then called each time something changes that
  // you might want to react to, such as new data being
  // stored with t.set()
  // var xhr = new XMLHttpRequest();
  // xhr.open("GET", "http://obed.store:17888/update", true);
  // xhr.onload = function (e) {
  //   if (xhr.readyState === 4) {
  //     if (xhr.status === 200) {
  //       console.log(xhr.responseText);
  //     } else {
  //       console.error(xhr.statusText);
  //     }
  //   }
  // };
  // xhr.onerror = function (e) {
  //   console.error(xhr.statusText);
  // };
  // xhr.send(null);
});

// close overlay if user clicks outside our content
document.addEventListener('click', function(e) {
  if(e.target.tagName == 'BODY') {
    t.closeOverlay().done();
  }
});

// close overlay if user presses escape key
document.addEventListener('keyup', function(e) {
  if(e.keyCode == 27) {
    t.closeOverlay().done();
  }
});
