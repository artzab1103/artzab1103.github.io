//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/176.37.35.75/20194";
 
$.getJSON(url, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest').html('Невозможно подключится к серверу');
   return false;
 } 
var pl = '';
 if(r.players.sample.length > 0 ){ pl = '<br>Последний зашовший: '+r.players.sample[0].name;  } 
  $('#rest').html(r.description.replace(/§(.+?)/gi, '')+'<br><b>Онлайн:</b> '+r.players.online+pl);
 $('#favicon').attr('src', r.favicon);
    
});
