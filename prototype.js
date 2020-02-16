var myObjectNumber={
    getNumber:function(){
        return this.number;
    }
}
var a ={
    number:22,
    _proto_:myObjectNumber
}
var b = {
    number:50,
    _proto_:myObjectNumber
}

