// https://github.com/sunjid-git/mileStoneThreeProblemSolving

//  kilometerToMeter
//  budgetCalculator
//  hotelCost
//  megaFriend


// problem solving 1
function kilometerToMeter(killometer){
    
    // to avoid negative value or conflict
    if(killometer <= 0){
        return 'Distance can not be negative or zero.';
    }
    // killometer to meter calculation
    else{
        var meter = killometer*1000;  
        return meter;
    }
}
//console.log(kilometerToMeter( ));


// problem solving 2
function budgetCalculator(watch,phone,laptop){
    
    // to avoid negative value or zero conflict
    if(watch < 0 || phone < 0 || laptop < 0){
        return 'Product number can not be negative. ';
    }
     // total cost calculation
    else{
        // watch price = 50
        var watchCost = watch*50;
        
        // phone price = 100
        var phoneCost = phone*100;
        
        // laptop price = 300
        var laptopCost = laptop*500;

        // total ost
        var totalCost = (watchCost+phoneCost+laptopCost);
        
        return totalCost;
    }
}
//  console.log(budgetCalculator(  ,  ,  ));

