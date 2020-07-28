const { Router } = require('express');
const axios = require('axios');

const router = Router();

router.get("/", async (request, response) => {
    const res = await axios.get('https://www.aleatorios.com/random-words?dictionary=2&words=1').catch(
        () => response.status(501).send("mala llamada")
    )
    return response.jsonp(res.data.records[0]);
})

module.exports = router;