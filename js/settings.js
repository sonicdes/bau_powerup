/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

var updateUrlInput = document.getElementById('update-url');

t.render(function(){
  return Promise.all([
    t.get('board', 'shared', 'update-url'),
  ])
  .spread(function(savedUpdateUrl){
    if(savedUpdateUrl){
      updateUrlInput.value = savedUpdateUrl;
    }
  })
  .then(function(){
    t.sizeTo('#content')
    .done();
  })
});

document.getElementById('save').addEventListener('click', function(){
  return t.set('board', 'shared', 'updateUrl', updateUrlInput.value)
  .then(function(){
    t.closePopup();
  })
})
