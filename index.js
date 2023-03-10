//HomePage
const thirdPage = document.getElementById("thirdPage")
const btnYes = document.getElementById("btnYes")
const btnNo = document.getElementById("btnNo")
const rejectMsg = document.getElementById("rejectMsg")
const mainPage = document.getElementById("mainPage")
const secondPage = document.getElementById("secondPage")
const nama = document.getElementById("nama")
const password = document.getElementById("password")
const btnSend = document.getElementById("btnSend")
const errMsg= document.getElementById("errMsg")

btnSend.addEventListener("click",function namas() {
    if (nama.value == 0 || password.value == 0) {
        errMsg.classList.remove('hidden')
        errMsg.innerHTML = "Please Enter Your Name and Password"
    }
    else{
        if (nama.value.toLowerCase().includes("yolanda") && password.value.includes("0302")) {
            errMsg.classList.add('hidden')
            mainPage.classList.add('animate__animated','animate__fadeOut')
            setTimeout(() => {
                mainPage.classList.add('hidden')
                secondPage.classList.remove('hidden')
                secondPage.classList.add('animate__animated','animate__fadeIn')
            }, 600);

        }
        else{
            errMsg.classList.remove('hidden')
            errMsg.innerHTML = "Wrong Name And Password"
        }
    }
})

btnYes.addEventListener('click',function yes() {
    secondPage.classList.add('animate__animated','animate__fadeOut')
    setTimeout(() => {
        secondPage.classList.add('hidden')
        thirdPage.classList.remove('hidden')
        thirdPage.classList.add('animate__animated','animate__fadeIn')
    }, 600);
})
btnNo.addEventListener('click',function () {
    rejectMsg.classList.remove("hidden")
    rejectMsg.classList.add('animate__animated','animate__bounceIn')
})


