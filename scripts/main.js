const FindAllStatsQuery=".StatValue";
const ShowValue="#ShowValue";
document.addEventListener("DOMContentLoaded", function(event){
    let statBlocks = document.querySelectorAll(FindAllStatsQuery);
    let minValue = FindSmallestValue();
    let maxValue = FindBiggestValue();
    for(let statBlock in statBlocks){
        statBlocks[statBlock].setAttribute("onClick","ChangedValue("+minValue+","+maxValue+","+statBlock+")");
        statBlocks[statBlock].setAttribute("onBlur","ChangedValue("+minValue+","+maxValue+","+statBlock+")");
    }
});
function FindBiggestValue(){
    let maxIndex=0;
    while(TableCost[maxIndex]!==undefined){
        maxIndex++;
    }
    return maxIndex-1;
}
function FindSmallestValue(){
    let minIndex=0;
    while(TableCost[minIndex]!==undefined){
        minIndex--;
    }
    return minIndex+1;
}

function ChangedValue(minValue,maxValue,position){
    let docElement = document.querySelectorAll(FindAllStatsQuery)[position];
    if(docElement.value>maxValue){
        docElement.value=maxValue;
    }else if(docElement.value<minValue){
        docElement.value=minValue;
    }
    CalcCost();
}
function CalcCost(){
    let statBlocks=document.querySelectorAll(FindAllStatsQuery);
    let statCostShow=document.querySelector(ShowValue);
    let sum=0;
    
    for(let element of statBlocks){
        if(element.value<0){
            for(let i = 0; i>element.value; i--){
                sum+=TableCost[i];
            }
        }else{
            for(let i = 0; i<element.value; i++){
                sum+=TableCost[i];
            }
        }
        sum+=TableCost[element.value];
    }
    statCostShow.value=sum+" SP";
}