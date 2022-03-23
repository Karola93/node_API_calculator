function calc(operation, a , b){
    switch(operation){
        case 'add':
        case 'plus':
            result = a+b;
            break;
        case 'subtract':
            result = a-b;
            break;
        case 'multiply':
            result = a*b;
            break;
        case 'divide':
            result = a/b;
            break;
        default:
            result = 'Operation is not supported!';
            break;
    }
    return result;
}

module.exports={
    calc: calc,
};