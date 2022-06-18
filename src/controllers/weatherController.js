let axios = require("axios")

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>get weather of city>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let getweather = async function (req, res) {
    try {
        let city = req.query.q
        let ket = req.query.appid
        console.log(`query params are: ${city} ${ket}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ket}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>temp of city>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

let gettemp = async function (req, res) {
    try {
        let city = req.query.q
        let ket = req.query.appid
        console.log(`query params are: ${city} ${ket}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ket}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: `temp ${result.data.main.temp} k` })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>sort cities their increasing temp >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const sortcities=async function(req,res){
    try{
        let cities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityArr=[]
        for(let i=0;i<cities.length;i++){
            let obj={city:cities[i]}
            let resp= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=b4ad378e529202d506f0200d3dae8555 `)
            console.log(resp.data.main.temp)
            obj.temp=resp.data.main.temp
            cityArr.push(obj)
        }
        let sorting=cityArr.sort(function(a,b){return a.temp-b.temp})
        console.log(sorting)
        res.status(200).send({status:true,data:sorting})
    }catch(err){
        console.log(err.message)
        res.status(500).send({msg:err.message})

    }
}

module.exports.getweather = getweather
module.exports.gettemp = gettemp
module.exports.sortcities = sortcities