//Задача 4

'use strict';

function summary(sum, years, engraving, shipping, regionShipping) {
  
  function totalSum(sum) {
    
    return sum;
  }
  var sumOrder = totalSum(sum);
  console.log(`Общая стоимость заказа: ${sumOrder} Q`);
  
  function costing(years) {
  var a = 1250,
      b = 2300;
  if (years == 1) {
    return a;
  }else if (years == 2) {
    return b;
  }else {
    return 0;
  }
}

var res = costing(years);
console.log(`Из них ${res} Q за гарантийное обслуживание на ${years} год/года`);


  function costEngraving(engraving) {
	if (engraving === "") {
    return 0;
  }
  var words = engraving.split(' '),
      lotWords = words.length,
      cost = lotWords * 11;
  return cost;
}
var result = costEngraving(engraving);
console.log(`Гравировка на сумму: ${result} Q`);

function shippingPlanet(shipping, regionShipping) {
  if (shipping == 'yes') {
  switch(regionShipping) {
  case 'Луна':
    return '150 Q';
  case 'Крабовидная туманность':
    return '250 Q';
  case 'Галактика Туманность Андромеды':
    return '550 Q';
  case 'Туманность Ориона':
    return '600 Q';
  case 'Звезда смерти':
    return 'договорная цена';
  default:
    return 'В ваш квадрант доставка не осуществляется';
}

  }else {
    return 'Доставка не нужна';
  }
}

var total = shippingPlanet(shipping, regionShipping);
console.log(`Доставка в область ${regionShipping}: ${total}`);
}

summary(7000, 2, 'I love you', 'yes', 'Луна');
