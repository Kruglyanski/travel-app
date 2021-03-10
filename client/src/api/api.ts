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
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(function (response) {
            console.log(response)
            return response
        })
            .catch(function (error) {
                console.log(error)
            })
    },
    // deletePost(id: number) {
    //     return fetch(`/api/posts/deletepost?id=${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //
    //     }).then(function (response) {
    //         console.log(response)
    //         return response
    //     })
    //         .catch(function (error) {
    //             console.log(error)
    //         })
    // },
    sendFormData(formData: any) {

        return fetch('/api/formdata', {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            body: {...formData}

        }).then(function (response) {
            console.log(response)
            return response
        })
            .catch(function (error) {
                console.log(error)
            })
    }


}