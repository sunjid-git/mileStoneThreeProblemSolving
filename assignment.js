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
// Test Cases
// console.log(kilometerToMeter(-5));
// console.log(kilometerToMeter(0));
// console.log(kilometerToMeter(5));


// problem solving 2
function budgetCalculator(watch,phone,laptop){
    
    // to avoid negative value or zero conflict
    if(watch < 0 || phone < 0 || laptop < 0){
        return 'Product number can not be negative.';
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
// Test cases
// console.log(budgetCalculator( -2 , -5 , 5 ));
// console.log(budgetCalculator( 0 , 0 , 0 ));
// console.log(budgetCalculator( 2 , 4 , 1 ));


// problem solving 3
function hotelCost(dayPassed){

    // to avoid negative conflict
    if(dayPassed < 0){

        return 'Days can not be negative.';

    }
    // first 10 days hotel cost = 100
    else if(dayPassed <= 10 ){

        var firstTenDaysCost = dayPassed*100;   

        return firstTenDaysCost;  /* Total Hotel Cost */
    }
    // second 10 days hotel cost = 80
    else if(dayPassed <= 20){

        var firstTenDaysCost = 10*100; 
        var extraDays = dayPassed-10;   
        var secondTenDaysCost = firstTenDaysCost + (extraDays*80); 

        return secondTenDaysCost;  /* Total Hotel Cost */
    }
    // after 20 days hotel cost = 50
    else{

        var firstTenDaysCost = 10*100;  
        var secondTenDaysCost = 10*80;
        var extraDays = dayPassed-20;
        var restofTheDays = firstTenDaysCost + secondTenDaysCost + (extraDays*50);

        return restofTheDays;  /* Total Hotel Cost */
    }
}
// Test cases
// console.log(hotelCost(0));
// console.log(hotelCost(-5));
// console.log(hotelCost(5));
// console.log(hotelCost(15));
// console.log(hotelCost(25));
