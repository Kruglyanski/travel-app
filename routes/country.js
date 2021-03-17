const {Router} = require('express')
const router = Router()
const Country = require('../models/Country')
const DeCountry = require('../models/DeCountry')
const EnCountry = require('../models/EnCountry')

// /api/countries получаем список стран
router.get(
    '/countries',
    async (req, res) => {
console.log('req.params.lang', req)
        try {
            if(req.query.lang == 'ru'){
                const countries = await Country.find({})
                res.json(countries)
            } else if (req.query.lang == 'en'){
                const countries = await EnCountry.find({})
                res.json(countries)
            } else {
                const countries = await DeCountry.find({})
                res.json(countries)
            }


        } catch (e) {
            res.status(500).json({message: "Что-то пошло не так, попробуйте ещё", ok: false})
        }
    })
// /api/countries/:id
router.get('/countries/:id', async (req, res) => {
    try {
        if(req.query.lang == 'ru'){
            const country = await Country.findById(req.params.id)
            res.json(country)
        } else if (req.query.lang == 'en'){
            const country = await EnCountry.findById(req.params.id)
            res.json(country)
        } else {
            const country = await DeCountry.findById(req.params.id)
            res.json(country)
        }


    } catch (e) {
        res.status(500).json({message: "Что-то пошло не так, попробуйте ещё"})
    }
})

module.exports = router