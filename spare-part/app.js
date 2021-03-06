const sparePartList = ["cowlscreen5", "fRont ", "decklid ", " bumpeR "];

const prefixName = "KEREMAG_";

function eliminateSpace(pSparePart){
    return pSparePart.trim();
}
function convertNamesToUpperCase(pSparePart){
    return  pSparePart.toUpperCase();
    }

function splitArray(pSparePart){
    return pSparePart.split("");
}
function eliminateNumbers(pSparePart){
    return pSparePart.replaceAll(/[0-9]/g, "");
}

function addPrefixSparePart(pSparePart){
    return prefixName.concat(pSparePart);
}

function addDate(pSparePart){
    let date = new Date().toDateString("en");
    return pSparePart + date.replaceAll(" ","");
}

sparePartList.forEach(function(pSparePart){
    let spaceEliminated = eliminateSpace(pSparePart);
   
    let convertToUpperCase = convertNamesToUpperCase(spaceEliminated);
    let numbersEliminated = eliminateNumbers(convertToUpperCase);
    let prefixSparePart = addPrefixSparePart(numbersEliminated);
    let dateAddDate= addDate(prefixSparePart);
   
    console.log(dateAddDate);
});