const {Router} = require('express')
const router = Router()
const Rate = require('../models/Rate')


//api/rate записываем rate в БД
router.post(
    '/rate',
    async (req, res) => {
        try {

            const rate = new Rate({
                ...req.body
            })
            await rate.save()
            res.status(201).json({message: "Счет успешно записан", ok: true})
        } catch (e) {
            res.status(500).json({message: "Что-то пошло не так, попробуйте ещё", ok: false})
        }

    })

// yarn add react-i18next i18next i18next-http-backend i18next-browser-languagedetector получаем список рейтинга
router.get(
    '/getrate',
    async (req, res) =>{

        try {
            const rate = await Rate.find({})
            res.json(rate)
        } catch (e) {
            res.status(500).json({message: "Что-то пошло не так, попробуйте ещё", ok: false})
        }
    })


module.exports = router