let inputValue = document.querySelector("#inpu-value")
let buttons = document.querySelectorAll(".btns")

let button = Array.from(buttons)

button.forEach((btns) => {
    // console.log(btns)
    btns.addEventListener('click', (btn) => {

        if (btn.target.innerHTML == '=') {
            str = eval(str)
            inputValue.value = str
        }
        else if (btn.target.innerHTML == 'AC') {
            str = ""
            inputValue.value = str
        }
        else if (btn.target.innerHTML == 'Del') {
            str = str.substring(str.valueOf, str.length - 1)
            inputValue.value = str
        }
        else if (!str.includes(".")) {
            str += ".";
            //  inputValue.value = str;
        }
        else {
            let show = btn.target.innerHTML;
            str += show;
            inputValue.value = str
        }

    })
})
