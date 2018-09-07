function GetStats(player,match) {
    var obj = {
        avg: 0,
        avg9: 0,
        doubles: 0,
        sixty: 0,
        tonne: 0,
        tonne40: 0,
        tonne80: 0,
        checkouts: [],
        bestlegs :[],
        misseddoubles : 0
    }
    var totalscore = 0
    var totalscoreFirstNine = 0
    var totalDarts = 0
    var totalDartsFirstNine = 0
    var misseddoubles = 0
    var totalFinishes = 0
    var checkouts = []
    var bestlegs = []

    var legs = [];
    match.scores.forEach(function (score) {
        if (legs.indexOf(score.leg) === -1) {
            legs.push(score.leg);
        }
    });

    match.scores.forEach(function (score) {
        if (score.player == player.playername) {
            var scored = parseFloat(score.score);
            totalscore += scored;
            totalscoreFirstNine += (score.visit < 4) ? scored : 0;
            totalDarts += parseFloat(score.dartsthrown);
            totalDartsFirstNine += (score.visit < 4) ? 3 : 0;
            misseddoubles += score.misseddoubles;
            obj.sixty = (scored > 59 && scored < 100) ? obj.sixty + 1 : obj.sixty
            obj.tonne = (scored > 99 && scored < 140) ? obj.tonne + 1 : obj.tonne
            obj.tonne40 = (scored > 139 && scored < 180) ? obj.tonne40 + 1 : obj.tonne40
            obj.tonne80 = (scored == 180) ? obj.tonne80 + 1 : obj.tonne80
            if (score.finished) {
                totalFinishes += 1
                checkouts.push(scored)
                bestlegs.push((score.visit * 3) - 3 + score.dartsthrown)
            }
        }

    })
    console.log("totalFinishes: " + totalFinishes)
    console.log("misseddoubles: " + misseddoubles)
    obj.avg = totalDarts == 0 ? 0 : totalscore / totalDarts * 3
    obj.avg9 = totalDartsFirstNine == 0 ? 0 : totalscoreFirstNine / totalDartsFirstNine * 3
    obj.misseddoubles = misseddoubles
    obj.doubles = (misseddoubles +totalFinishes == 0) ? 0 : totalFinishes / (misseddoubles +totalFinishes) * 100
    obj.checkouts = checkouts.sort(function (a, b) {
        return b - a
    });
    obj.bestlegs =bestlegs.sort(function (a, b) {
        return a - b
    });
  
    return obj
}




function postToDb(match){
    var results1 = getStats(match.players[0].playername,match)
    var results2 = getStats(match.players[1].playername,match)
    var obj = {
        venue: match.venue,
        season:"1",
        matchType: "League",
        matchRound:"",
        division: match.division,
        status: "played", 
        datePlayed: match.date,
        dateSubmitted: match.date,
        players:[],
        scores: match.scores
    }
    var player1 ={
        playerName: match.players[0].playername, 
        division:  match.division,
        legsWon: results1.checkouts.length,
        total180s: results1.tonne80,
        checkouts: results1.checkouts.filter(checkout => checkout > 79),
        bestlegs: results1.bestlegs.filter(bestleg => bestleg < 21)
    }
    

    var player2 ={
        playerName: match.players[1].playername, 
        division:  match.division,
        legsWon: results2.checkouts.length,
        total180s: results2.tonne80,
        checkouts: results2.checkouts.filter(checkout => checkout > 79),
        bestlegs: results2.bestlegs.filter(bestleg => bestleg < 21)
    }
    obj.players.push(player1);
    obj.players.push(player2);




}