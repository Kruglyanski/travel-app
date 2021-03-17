import {LoginFormType, RegistrationFormType} from '../redux/authReducer'

export const api = {
    register(registrationForm: RegistrationFormType) {
        return fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registrationForm)
        }).then(function (response) {
            console.log(response)
            return response
        }).catch(function (error) {
            console.log(error)
        })
    },

    login(loginForm: LoginFormType) {

        return fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...loginForm
            })
        }).then(function (response) {
            console.log(response)
            return response
        }).catch(function (error) {
            console.log(error)
        })
    },

    getAvatar(userId: string) {

        return fetch('/api/me', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId
            })
        }).then(function (response) {
            console.log(response)
            return response
        }).catch(function (error) {
            console.log(error)
        })
    },

    fetchCountries() {
        return fetch(`/api/countries`, {
            method: 'GET'
        }).then(function (response) {
            console.log(response)
            return response
        })
            .catch(function (error) {
                console.log(error)
            })
    },

    fetchCountry(id:string) {
        return fetch(`/api/countries/${id}`, {
            method: 'GET'
        }).then(function (response) {
            console.log(response)
            return response
        })
            .catch(function (error) {
                console.log(error)
            })
    },

    getCurrency() {
        return fetch(`https://openexchangerates.org/api/latest.json?app_id=b3ec4cfefd864b3e949e6fd7d3442370`, {
            method: 'GET'
        }).then(function (response) {
            console.log(response)
            return response
        })
            .catch(function (error) {
                console.log(error)
            })
    },

    getWeather(id: string) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&lang=ru&appid=8b62af4ed23abd41a5e906b7a4198515`, {
            method: 'GET'
        }).then(function (response) {
            console.log(response)
            return response
        })
            .catch(function (error) {
                console.log(error)
            })
    },

    setRate({value, userId, countryId}:{value: string, userId: string, countryId: string}) {
        return fetch('/api/rate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                value, userId, countryId
            })
        }).then(function (response) {
            console.log(response)
            return response
        }).catch(function (error) {
            console.log(error)
        })
    },

    getRate() {
        return fetch('/api/getrate', {
            method: 'GET'
        }).then(function (response) {
            console.log(response)
            return response
        })
            .catch(function (error) {
                console.log(error)
            })

    }
}