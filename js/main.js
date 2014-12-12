var Main = (function (my) {
    my.switchMovie = function(id, wid, len) {
      var dimensions = wid==undefined || len == undefined ? "-728x410" : "-"+wid+"x"+len;
      get('currentMovie').src = "http://thevideos.tv/embed-" + id + dimensions + ".html";
      if(len==undefined || wid==undefined) {
      } else {
         if(len!=undefined) get('currentMovie').length = len;
         if(wid!=undefined) get('currentMovie').width = wid;
      } 
    };

    my.fillMovieList = function(list) {
      for(var prop in list) {
        var el = document.createElement('div');
        el.setAttribute('id', prop);
        el.setAttribute('name', list[prop].name);
        el.setAttribute('style', '');
        el.setAttribute('onclick', "Main.switchMovie('"+prop+"');");
        el.innerHTML= '<img src="'+list[prop].image+'" style="width:70px;margin:0 auto;border-radius:4px">';
        get('movieList').appendChild(el);
      }
    };

    var get = function(id, type) {
      type = type ? type : 'id';
      switch(type) {
        case 'id':    return document.getElementById(id); break;
        case 'tag':   return document.getElementsByTagName(id); break;
        case 'class': return document.getElementsByClassName(id); break;
        default:      break;
      }
    };

    return my;

}(Main || {}))

var movies1 = {
  'x09cp3l3vh87': {
    name: 'Fast and Furious',
    image: 'http://ecx.images-amazon.com/images/I/61bsCmq2tTL._SL75_.jpg' ,
  },
  'x09cp3l3vh872': {
    name: 'Fast and Furious',
    image: 'http://cdn.appato.com/deluxe-digital-studios/fast-furious-virtual-car-garage-2-0/icon/256',
  },
  'x09cp3l3vh873': {
    name: 'Fast and Furious',
    image: 'http://ecx.images-amazon.com/images/I/61bsCmq2tTL._SL75_.jpg',
  },
  'x09cp3l3vh874': {
    name: 'Fast and Furious',
    image: 'http://ecx.images-amazon.com/images/I/61bsCmq2tTL._SL75_.jpg',
  },
  'x09cp3l3vh875': {
    name: 'Fast and Furiousasdasda',
    image: 'http://ecx.images-amazon.com/images/I/61bsCmq2tTL._SL75_.jpg',
  },
  'x09cp3l3vh876': {
    name: 'Fast and Furious',
    image: 'http://ecx.images-amazon.com/images/I/61bsCmq2tTL._SL75_.jpg',
  },
  'x09cp3l3vh877': {
    name: 'Fast and Furiousasdasda',
    image: 'http://ecx.images-amazon.com/images/I/61bsCmq2tTL._SL75_.jpg',
  },
};

//window.onload = function() {
$(document).ready(function(){
  Main.fillMovieList(movies1);

  $('#movieList').slick({
    centerMode: true,
    dots: true,
    centerPadding: '10px',
    slidesToShow: 5,
      });

});
