const {Router} = require('express')
const router = Router()
const Country = require('../models/Country')


//api/generate записываем страну в БД
router.post(
    '/generate',
    async (req, res) =>{
        console.log(req.body)
        try {
            // const date = new Date().toLocaleString()
            const country = new Country({
                ...req.body
            })
            await country.save()
            res.status(201).json({message: "Счет успешно записан", ok: true})
        } catch (e) {
            res.status(500).json({message: "Что-то пошло не так, попробуйте ещё", ok: false})
        }

    })

// /api/countries получаем список стран
router.get(
    '/countries',
    async (req, res) =>{

        try {
            const countries= await Country.find({})
            console.log(countries)
            res.json(countries)
        } catch (e) {
            res.status(500).json({message: "Что-то пошло не так, попробуйте ещё", ok: false})
        }
    })
module.exports = router