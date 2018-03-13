class Pessoa {

    constructor(id, firstName, lastName, avatar) {
        this._id = id
        this._firstName = firstName
        this._lastName = lastName
        this._avatar = avatar
    }

    get id() {
        return this._id
    }

    get firstName() {
        return this._firstName
    }

    get lastName() {
        return this._lastName
    }

    get avatar() {
        return this._avatar
    }

}