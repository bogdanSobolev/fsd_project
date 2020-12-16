let bemjson2decl = require("bemjson-to-decl");
let html2bemjson = require("html2bemjson");

module.exports = function( content ){
    // console.log('test console');
    //console.log(content);
    // console.log('test console');
    //let test = eval(content);
    //console.log(test);
    //console.log(test());


    //if (content == null && content == "") callback("html2bemdecl requires a valid HTML.");

    let callback = this.async();
    let bemjson = html2bemjson.convert( content );
    //console.log(bemjson);
    let decl = bemjson2decl.convert( bemjson );
    //console.log(decl);

    //console.log(content);  // Проверим корректность формирования декларации
    callback(null, decl);
    //callback(null, content);

    //return decl

    // return {
    //     temp: content,
    //     decl: decl
    // }
}