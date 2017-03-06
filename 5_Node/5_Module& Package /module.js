
var name;
exports.addMethod = function (a,b) {
    return a+b;
}
exports.minusMethod = function(a,b){
    return a-b;
}
exports.setName = function (newName) {
    this.name = newName;
}
exports.callName = function(){
    return 'hello '+this.name;
}

