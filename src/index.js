/*module.exports = */function toReadable (number) {
    if(number === 0)
    {
        return 'zero';
    }
    let result = '';
    let space = '';
    let n = Math.floor(number/100);
    if(n > 0)
    {
        switch(n)
        {
            case 1 : 
                result += 'one hundred';
                break;
            case 2 : 
                result += 'two hundred';
                break;
            case 3 : 
                result += 'three hundred';
                break;
            case 4 : 
                result += 'four hundred';
                break;
            case 5 : 
                result += 'five hundred';
                break;
            case 6 : 
                result += 'six hundred';
                break;
            case 7 : 
                result += 'seven hundred';
                break;
            case 8 : 
                result += 'eight hundred';
                break;
            case 9 : 
                result += 'nine hundred';
                break;
        }
        space = ' ';
    }
    n = Math.floor(number/10) - Math.floor(number/100)*10;
    if(n > 1)
    {
        switch(n)
        {
            case 2 : 
                result = result + space + 'twenty';
                break;
            case 3 : 
                result = result + space + 'thirty';
                break;
            case 4 : 
                result = result + space + 'forty';
                break;
            case 5 : 
                result = result + space + 'fifty';
                break;
            case 6 : 
                result = result + space + 'sixty';
                break;
            case 7 : 
                result = result + space + 'seventy';
                break;
            case 8 : 
                result = result + space + 'eighty';
                break;
            case 9 : 
                result = result + space + 'ninety';
                break;
        }
        space = ' ';
        n = Math.floor(number%10);
    switch(n)
        {
            case 1 : 
                result = result + space + 'one';
                break;
            case 2 : 
                result = result + space + 'two';
                break;
            case 3 : 
                result = result + space + 'three';
                break;
            case 4 : 
                result = result + space + 'four';
                break;
            case 5 : 
                result = result + space + 'five';
                break;
            case 6 : 
                result = result + space + 'six';
                break;
            case 7 : 
                result = result + space + 'seven';
                break;
            case 8 : 
                result = result + space + 'eight';
                break;
            case 9 : 
                result = result + space + 'nine';
                break;
        }
    }
    else if(n === 1)
    {
        n = Math.floor(number%10);
        switch(n)
        {
            case 0 : 
                result = result + space + 'ten';
                break;
            case 1 : 
                result = result + space + 'eleven';
                break;
            case 2 : 
                result = result + space + 'twelve';
                break;
            case 3 : 
                result = result + space + 'thirteen';
                break;
            case 4 : 
                result = result + space + 'fourteen';
                break;
            case 5 : 
                result = result + space + 'fifteen';
                break;
            case 6 : 
                result = result + space + 'sixteen';
                break;
            case 7 : 
                result = result + space + 'seventeen';
                break;
            case 8 : 
                result = result + space + 'eighteen';
                break;
            case 9 : 
                result = result + space + 'nineteen';
                break;
        }
        space = ' ';
    }
    return result;
}

console.log(toReadable(42));