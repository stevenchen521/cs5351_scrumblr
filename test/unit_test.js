var	db = require('../lib/data.js').db;
var	script = require('../client/script.js').db;


function testSptBurndownChart() {
    var data = {}
    data['categories'] = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6','Day 7', 'Day 8', 'Day 9', 'Day 10']
    data['idealBurn'] = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
    data['actualBurn'] = [100, 110, 85, 60, 60, 30, 32, 23]

    script.sptBurndownChart(data)
}


function testCardTimeInsert() {
    card = {
        "id":"card95500055",
        "colour":"blue",
        "rot": '-3.340326417016475',
        "x":'316.5327377319336',
        "y":'123.85032653808594',
        "text": "" ,
        "sticker":null,
        "animationspeed":null,
        "hours":"15",
        "totalhours":"20"
    }
    db.createCard('demo', 'card95500055', card)
    db.getAllCards( 'demo' , function (cards) {
        cards.forEach(card => {
            if(card['id'] == 'card95500055' && card['hours'] == '15' )
                return true
            else  
                return false
        });
    });
}


