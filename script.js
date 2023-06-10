//гандон 100 раз айпи меняет
var url = "https://api.minetools.eu/ping/93.73.45.198/20194";
 
$.getJSON(url, function(r) {
    //при случае ошыбки, отображение онлайна и последнего зашовшого
 if(r.error){
    $('#rest').html('Невозможно подключится к серверу');
   return false;
 } 
var pl = '';
 if(r.players.sample.length > 0 ){ pl = '<br>Ник одного из игрока: '+r.players.sample[0].name;  } 
  $('#rest').html(r.description.replace(/§(.+?)/gi, '')+'<br><b>Онлайн:</b> '+r.players.online+pl);
 $('#favicon').attr('src', r.favicon);
    
});
