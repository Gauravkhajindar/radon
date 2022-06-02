const printDate = function() {

    const Gaurav = new Date()
    console.log(Gaurav);
}

const printMonth = function() {
    const Gaurav = new Date()
    console.log(Gaurav.getMonth());
}
const getBatchInfo = function() {
    const Gaurav = new Date()
    console.log("Roadon, W3D3, the topic for today is Nodejs module system");
}
module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo