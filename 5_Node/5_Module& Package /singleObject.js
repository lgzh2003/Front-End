function Hello() {
    var name;
    this.setName = function (newName) {
        name = newName;
    }
    this.callName = function(){
        return 'Hello '+name;
    }
}
module.exports = Hello; // Hello now is a class