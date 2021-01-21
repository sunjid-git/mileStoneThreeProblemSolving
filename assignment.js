// https://github.com/sunjid-git/mileStoneThreeProblemSolving

//  kilometerToMeter
//  budgetCalculator
//  hotelCost
//  megaFriend

// problem solving 1
function kilometerToMeter(killometer){
    
    // to avoid negative value or
    if(killometer <= 0){
        return 'Distance can not be negative or zero.';
    }
    // killometer to meter calculation
    else{
        var meter = killometer*1000;  
        return meter;
    }
}
//console.log(kilometerToMeter());



