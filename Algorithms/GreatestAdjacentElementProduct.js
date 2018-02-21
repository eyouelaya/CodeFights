function adjacentElementsProduct(inputArray) {
    //gets the first and the second adjacent products first
    var y=inputArray[0]*inputArray[1];
    for(var x=0; x<inputArray.length-1; x++){
        //while looping through the array checks if there are any greater adjacentElements
        if(inputArray[x]*inputArray[x+1]>y){
            //when found it replaces the value on y
            y = inputArray[x]*inputArray[x+1];
            } 
        } 
    //returns the highest adjacent elements product
    return y;
}