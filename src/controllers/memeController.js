let axios = require("axios");


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>allMeme>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
let allMeme = async function (req, res) {

    try {
        var options = {
            method: "get",
            url: `https://api.imgflip.com/get_memes`,
        };
        let result = await axios(options);
        console.log(result);
        let data = result.data
        res.status(200).send({ msg: data, status: true });
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: err.message });
    }
};

//   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>CreateMeme>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
let CreateMeme = async function (req, res) {

    try {
        let id = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password

        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`,
        };
        let result = await axios(options);
        console.log(result);
        let data = result.data
        res.status(200).send({ msg: data, status: true });
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: err.message });
    }
};

module.exports.allMeme = allMeme;
module.exports.CreateMeme = CreateMeme;