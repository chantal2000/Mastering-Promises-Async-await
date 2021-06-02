const isMumhappy = true;
const willgetNewPhone = new Promise((resolve, reject) => {
    if (isMumhappy) {
        let phone = {
            name: "Iphone",
            amount: 10000000

        }
        resolve(phone)
    } else {
        let reason = new error("She is sad")
        reject(reason)
    }
});
async function showPhone(phone) {
    return new promise((resolve, reject) => {
        let message = "Hy friends i have" + phone.name + "Phone  and i bought it " + phone.amount
        resolve(message)

    })

}
async function AskMumy() {
    try {
        console.log("Before asking Mum")
        let phone = await willgetNewPhone;
        let message = await showPhone(phone)
        console.log(message);
        console.log("After Asking Mum")
    } catch (error) {
        console.log(err.message);
    }
}