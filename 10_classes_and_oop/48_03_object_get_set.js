/* ++++++++++++++++lecture 48 continued++++++++++++++++++++++ */

/* below is another way (though this way is a little bit complicated so not much used. 90-95% cases mei class method is used and in some old databases code you can see functional method as well) */

const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);


/* ++++++++++++++++++++lecture 48 finished++++++++++++++++++++++ */