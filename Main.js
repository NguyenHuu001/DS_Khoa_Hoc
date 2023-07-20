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
    let  soLuong = document.querySelector('.soluonggg')
    soLuong.innerHTML = count
}