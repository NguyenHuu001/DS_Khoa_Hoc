Validator = (option) => {
    let formID = document.getElementById(option.form)
    if (formID) {
        option.rules.forEach(function (rule) {
            let inputOne = formID.querySelector(rule.selector)
            if (inputOne) {
                inputOne.onkeydown = function () {
                    let errorMess = rule.check(inputOne.value)
                    formID = document.getElementById(option.form)
                    let title = formID.querySelector('.Notification')
                    let fm = rule.format(inputOne)
                    if (errorMess) {
                        title.innerHTML = errorMess
                        title.style.color = 'red'
                    }
                    else {
                        title.innerHTML = ''
                    }
                }
            }
        })
    }
}

Validator.checkNumber_from = (selector) => {
    return {
        selector: selector,
        check: (value) => {
            var num = value.replace(/\./g, '');
            if (num > 10000000) {
                return 'Giá từ phải nhỏ hơn 10.000.000 VNĐ'
            }
        },
        format: (n) => {
            var num = n.value.replace(/\./g, '');
            if (num != '') {
                num = parseInt(num).toString();
                if (num.length > 3) {
                    var num2 = '';
                    for (var i = num.length - 1; i >= 0; i--) {
                        num2 = num.charAt(i) + num2;
                        if ((num.length - i) % 3 == 0 && i > 0) num2 = '.' + num2;
                    }
                    n.value = num2;
                    return n.value
                }
            }
        }
    }
}

Validator.checkNumber_arrive = (selector) => {
    return {
        selector: selector,
        check: (value) => {
            var num = value.replace(/\./g, '');
            if (num > 10000000) {
                return 'Giá đến phải nhỏ hơn 10,000,000 VNĐ'
            }
        },
        format: (n) => {
            var num = n.value.replace(/\./g, '');
            if (num != '') {
                num = parseInt(num).toString();
                if (num.length > 3) {
                    var num2 = '';
                    for (var i = num.length - 1; i >= 0; i--) {
                        num2 = num.charAt(i) + num2;
                        if ((num.length - i) % 3 == 0 && i > 0) num2 = '.' + num2;
                    }
                    n.value = num2;
                    return n.value
                }
            }
        }
    }
}

Count = (count) => {
    var count = document.getElementsByClassName("item_count").length;
    let soLuong = document.querySelector('.soluonggg')
    soLuong.innerHTML = count
}

Open_Close = () => {
    // $(document).ready(function(){
    //     $('#bars').click(function() {
    //         $('.coating').slideToggle()
    //     })
    // })

    var iconBar = document.getElementById('bars')
    var coating = document.getElementById('coating')
    var close_coating = document.getElementById('close_coating')
    iconBar.onclick = function () {
        coating.style.display = 'block'
        coating.style.width = '100%'
    }
    close_coating.onclick = function () {
        coating.style.display = 'none'
        coating.style.transition = 'all 10s linear';
    }
    // coating.onclick = function () {
    //     coating.style.display = 'none'
    //     coating.style.transition = 'all 10s linear';
    // }
}

Open_Close_SideBar = () => {
    var width = window.innerWidth;
    if (width < 570) {
        var priceRange = document.getElementById('Khoang_gia')
        var studyForm = document.getElementById('HT_Hoc')
        var level = document.getElementById('Trinh_Do')
        var field = document.getElementById('Linh_Vuc')
        var clickPR = document.getElementById('onclick_block_one')
        var clickSF = document.getElementById('onclick_block_two')
        var clickLevel = document.getElementById('onclick_block_three')
        var clickField = document.getElementById('onclick_block_four')
        clickPR.onclick = function () {
            if (priceRange.style.display == 'none') {
                priceRange.style.display = 'block'
            } else {
                priceRange.style.display = 'none'
            }
        }

        clickSF.onclick = function () {
            if (studyForm.style.display === 'none') {
                studyForm.style.display = 'block'
            } else {
                studyForm.style.display = 'none'
            }
        }

        clickLevel.onclick = function () {
            if (level.style.display === 'none') {
                level.style.display = 'block'
            }
            else {
                level.style.display = 'none'
            }
        }

        clickField.onclick = function () {
            if (field.style.display === 'none') {
                field.style.display = 'block'
            } else {
                field.style.display = 'none'
            }
        }
    }





}