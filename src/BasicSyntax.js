export function romanToInteger(str) {
    let result = 0;
    let CurrentMaxValue = 0;
    const valueDictionary = new Map();
    valueDictionary.set('I', 1)
    .set('V', 5)
    .set('X', 10)
    .set('L', 50)
    .set('C', 100)
    .set('D', 500)
    .set('M', 1000);
    
    for(let i=str.length-1; i>=0; i--){
        if(valueDictionary.get(str[i])>=CurrentMaxValue){
            result += valueDictionary.get(str[i]);
        }
        else{
            result -= valueDictionary.get(str[i]);
        }

        if(valueDictionary.get(str[i])>CurrentMaxValue){
            CurrentMaxValue=valueDictionary.get(str[i]);
        }
    }
    return result;
}