const requiredFields = [
    "user_name", "user_email", "message"
]

const cleanObj = (obj) => {
    let flag = false
    let emptyFields =[]
    
     requiredFields.map(r => {
        if (obj[r].length === 0) {
            emptyFields.push(r)
        }
     })

     console.log(emptyFields, "<<emptyFields")
    return emptyFields.length === 0 ? !flag : flag
}

const emailValidation = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email)

}

export { cleanObj, emailValidation }