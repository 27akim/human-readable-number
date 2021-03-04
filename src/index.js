module.exports = function toReadable (number) {
    let result = '';
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
    }
    n = Math.floor(number/10) - Math.floor(number/100)*10;
    if(n > 1)
    {
        switch(n)
        {
            case 2 : 
                result += ' twenty';
                break;
            case 3 : 
                result += ' thirty';
                break;
            case 4 : 
                result += ' forty';
                break;
            case 5 : 
                result += ' fifty';
                break;
            case 6 : 
                result += ' sixty';
                break;
            case 7 : 
                result += ' seventy';
                break;
            case 8 : 
                result += ' eighty';
                break;
            case 9 : 
                result += ' ninety';
                break;
        }
    }
    else if(n === 1)
    {
        n = Math.floor(number%10);
        switch(n)
        {
            case 0 : 
                result += '  ten';
                break;
            case 1 : 
                result += '  eleven';
                break;
            case 2 : 
                result += ' twelve';
                break;
            case 3 : 
                result += ' thirteen';
                break;
            case 4 : 
                result += ' fourteen';
                break;
            case 5 : 
                result += ' fifteen';
                break;
            case 6 : 
                result += ' sixteen';
                break;
            case 7 : 
                result += ' seventeen';
                break;
            case 8 : 
                result += ' eighteen';
                break;
            case 9 : 
                result += ' nineteen';
                break;
        }
    }
    switch(n)
        {
            case 1 : 
                result += ' one';
                break;
            case 2 : 
                result += ' two';
                break;
            case 3 : 
                result += ' three';
                break;
            case 4 : 
                result += ' four';
                break;
            case 5 : 
                result += ' five';
                break;
            case 6 : 
                result += ' six';
                break;
            case 7 : 
                result += ' seven';
                break;
            case 8 : 
                result += ' eight';
                break;
            case 9 : 
                result += ' nine';
                break;
        }
}