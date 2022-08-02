function toggle(source) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != source)
            checkboxes[i].checked = source.checked;
    }
}
/*----------------Card Number 01---------------*/
function formatCardNumber(element) {
    if (element.value.length > 14) {
        var position = element.selectionStart;
        element.value = element.value.replace(/\W/gi, '').replace(/^(.{4})(.{4})(.{4})(.*)$/, "$1 $2 $3 $4");
        if (element.value.length != 19) {
            element.setSelectionRange(position, position);
        }
    } else {
        element.value = element.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    }
}

function showCardValue() {
    document.getElementById("cardNo").value = document.getElementById("cardNoSafe").value;
}

function hideCardValue(val) {
    document.getElementById("cardNoSafe").value = val;
    var len = val.length;
    if (len >= 14) {
        const regex = /\d{4}(?= \d{1})/g;
        const substr = "****";
        document.getElementById("cardNo").value = val.replace(regex, substr);
    }
}
/*----------------Card Number 02---------------*/
function formatCardNumber2(element) {
    if (element.value.length > 14) {
        var position = element.selectionStart;
        element.value = element.value.replace(/\W/gi, '').replace(/^(.{4})(.{4})(.{4})(.*)$/, "$1 $2 $3 $4");
        if (element.value.length != 19) {
            element.setSelectionRange(position, position);
        }
    } else {
        element.value = element.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    }
}

function showCardValue2() {
    document.getElementById("cardNo2").value = document.getElementById("cardNoSafe2").value;
}

function hideCardValue2(val) {
    document.getElementById("cardNoSafe2").value = val;
    var len = val.length;
    if (len >= 14) {
        const regex = /\d{4}(?= \d{1})/g;
        const substr = "****";
        document.getElementById("cardNo2").value = val.replace(regex, substr);
    }
}
/*----------------Card Number 03---------------*/
function formatCardNumber3(element) {
    if (element.value.length > 14) {
        var position = element.selectionStart;
        element.value = element.value.replace(/\W/gi, '').replace(/^(.{4})(.{4})(.{4})(.*)$/, "$1 $2 $3 $4");
        if (element.value.length != 19) {
            element.setSelectionRange(position, position);
        }
    } else {
        element.value = element.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    }
}

function showCardValue3() {
    document.getElementById("cardNo3").value = document.getElementById("cardNoSafe3").value;
}

function hideCardValue3(val) {
    document.getElementById("cardNoSafe3").value = val;
    var len = val.length;
    if (len >= 14) {
        const regex = /\d{4}(?= \d{1})/g;
        const substr = "****";
        document.getElementById("cardNo3").value = val.replace(regex, substr);
    }
}
/*----------------Card Number 04---------------*/
function formatCardNumber4(element) {
    if (element.value.length > 14) {
        var position = element.selectionStart;
        element.value = element.value.replace(/\W/gi, '').replace(/^(.{4})(.{4})(.{4})(.*)$/, "$1 $2 $3 $4");
        if (element.value.length != 19) {
            element.setSelectionRange(position, position);
        }
    } else {
        element.value = element.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    }
}

function showCardValue4() {
    document.getElementById("cardNo4").value = document.getElementById("cardNoSafe4").value;
}

function hideCardValue4(val) {
    document.getElementById("cardNoSafe4").value = val;
    var len = val.length;
    if (len >= 14) {
        const regex = /\d{4}(?= \d{1})/g;
        const substr = "****";
        document.getElementById("cardNo4").value = val.replace(regex, substr);
    }
}
/*----------------Card Number 05---------------*/
function formatCardNumber5(element) {
    if (element.value.length > 14) {
        var position = element.selectionStart;
        element.value = element.value.replace(/\W/gi, '').replace(/^(.{4})(.{4})(.{4})(.*)$/, "$1 $2 $3 $4");
        if (element.value.length != 19) {
            element.setSelectionRange(position, position);
        }
    } else {
        element.value = element.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    }
}

function showCardValue5() {
    document.getElementById("cardNo5").value = document.getElementById("cardNoSafe5").value;
}

function hideCardValue5(val) {
    document.getElementById("cardNoSafe5").value = val;
    var len = val.length;
    if (len >= 14) {
        const regex = /\d{4}(?= \d{1})/g;
        const substr = "****";
        document.getElementById("cardNo5").value = val.replace(regex, substr);
    }
}
/*----------------Card Number 06---------------*/
function formatCardNumber6(element) {
    if (element.value.length > 14) {
        var position = element.selectionStart;
        element.value = element.value.replace(/\W/gi, '').replace(/^(.{4})(.{4})(.{4})(.*)$/, "$1 $2 $3 $4");
        if (element.value.length != 19) {
            element.setSelectionRange(position, position);
        }
    } else {
        element.value = element.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    }
}

function showCardValue6() {
    document.getElementById("cardNo6").value = document.getElementById("cardNoSafe6").value;
}

function hideCardValue6(val) {
    document.getElementById("cardNoSafe6").value = val;
    var len = val.length;
    if (len >= 14) {
        const regex = /\d{4}(?= \d{1})/g;
        const substr = "****";
        document.getElementById("cardNo6").value = val.replace(regex, substr);
    }
}
/*----------------Card Number 07---------------*/
function formatCardNumber7(element) {
    if (element.value.length > 14) {
        var position = element.selectionStart;
        element.value = element.value.replace(/\W/gi, '').replace(/^(.{4})(.{4})(.{4})(.*)$/, "$1 $2 $3 $4");
        if (element.value.length != 19) {
            element.setSelectionRange(position, position);
        }
    } else {
        element.value = element.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    }
}

function showCardValue7() {
    document.getElementById("cardNo7").value = document.getElementById("cardNoSafe7").value;
}

function hideCardValue7(val) {
    document.getElementById("cardNoSafe7").value = val;
    var len = val.length;
    if (len >= 14) {
        const regex = /\d{4}(?= \d{1})/g;
        const substr = "****";
        document.getElementById("cardNo7").value = val.replace(regex, substr);
    }
}
/*----------------Card Number 08---------------*/
function formatCardNumber8(element) {
    if (element.value.length > 14) {
        var position = element.selectionStart;
        element.value = element.value.replace(/\W/gi, '').replace(/^(.{4})(.{4})(.{4})(.*)$/, "$1 $2 $3 $4");
        if (element.value.length != 19) {
            element.setSelectionRange(position, position);
        }
    } else {
        element.value = element.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    }
}

function showCardValue8() {
    document.getElementById("cardNo8").value = document.getElementById("cardNoSafe8").value;
}

function hideCardValue8(val) {
    document.getElementById("cardNoSafe8").value = val;
    var len = val.length;
    if (len >= 14) {
        const regex = /\d{4}(?= \d{1})/g;
        const substr = "****";
        document.getElementById("cardNo8").value = val.replace(regex, substr);
    }
}
/*----------------Card Number 09---------------*/
function formatCardNumber9(element) {
    if (element.value.length > 14) {
        var position = element.selectionStart;
        element.value = element.value.replace(/\W/gi, '').replace(/^(.{4})(.{4})(.{4})(.*)$/, "$1 $2 $3 $4");
        if (element.value.length != 19) {
            element.setSelectionRange(position, position);
        }
    } else {
        element.value = element.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    }
}

function showCardValue9() {
    document.getElementById("cardNo9").value = document.getElementById("cardNoSafe9").value;
}

function hideCardValue9(val) {
    document.getElementById("cardNoSafe9").value = val;
    var len = val.length;
    if (len >= 14) {
        const regex = /\d{4}(?= \d{1})/g;
        const substr = "****";
        document.getElementById("cardNo9").value = val.replace(regex, substr);
    }
}
/*----------------Card Number 10---------------*/
function formatCardNumber10(element) {
    if (element.value.length > 14) {
        var position = element.selectionStart;
        element.value = element.value.replace(/\W/gi, '').replace(/^(.{4})(.{4})(.{4})(.*)$/, "$1 $2 $3 $4");
        if (element.value.length != 19) {
            element.setSelectionRange(position, position);
        }
    } else {
        element.value = element.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    }
}

function showCardValue10() {
    document.getElementById("cardNo10").value = document.getElementById("cardNoSafe10").value;
}

function hideCardValue10(val) {
    document.getElementById("cardNoSafe10").value = val;
    var len = val.length;
    if (len >= 14) {
        const regex = /\d{4}(?= \d{1})/g;
        const substr = "****";
        document.getElementById("cardNo10").value = val.replace(regex, substr);
    }
}
/*----------------Card Number 11---------------*/
function formatCardNumber11(element) {
    if (element.value.length > 14) {
        var position = element.selectionStart;
        element.value = element.value.replace(/\W/gi, '').replace(/^(.{4})(.{4})(.{4})(.*)$/, "$1 $2 $3 $4");
        if (element.value.length != 19) {
            element.setSelectionRange(position, position);
        }
    } else {
        element.value = element.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    }
}

function showCardValue11() {
    document.getElementById("cardNo11").value = document.getElementById("cardNoSafe11").value;
}

function hideCardValue11(val) {
    document.getElementById("cardNoSafe11").value = val;
    var len = val.length;
    if (len >= 14) {
        const regex = /\d{4}(?= \d{1})/g;
        const substr = "****";
        document.getElementById("cardNo11").value = val.replace(regex, substr);
    }
}
/*----------------Card Number 12---------------*/
function formatCardNumber12(element) {
    if (element.value.length > 14) {
        var position = element.selectionStart;
        element.value = element.value.replace(/\W/gi, '').replace(/^(.{4})(.{4})(.{4})(.*)$/, "$1 $2 $3 $4");
        if (element.value.length != 19) {
            element.setSelectionRange(position, position);
        }
    } else {
        element.value = element.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    }
}

function showCardValue12() {
    document.getElementById("cardNo12").value = document.getElementById("cardNoSafe12").value;
}

function hideCardValue12(val) {
    document.getElementById("cardNoSafe12").value = val;
    var len = val.length;
    if (len >= 14) {
        const regex = /\d{4}(?= \d{1})/g;
        const substr = "****";
        document.getElementById("cardNo12").value = val.replace(regex, substr);
    }
}
/*----------------Card Number 11---------------*/
function formatCardNumber13(element) {
    if (element.value.length > 14) {
        var position = element.selectionStart;
        element.value = element.value.replace(/\W/gi, '').replace(/^(.{4})(.{4})(.{4})(.*)$/, "$1 $2 $3 $4");
        if (element.value.length != 19) {
            element.setSelectionRange(position, position);
        }
    } else {
        element.value = element.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    }
}

function showCardValue13() {
    document.getElementById("cardNo13").value = document.getElementById("cardNoSafe13").value;
}

function hideCardValue13(val) {
    document.getElementById("cardNoSafe13").value = val;
    var len = val.length;
    if (len >= 14) {
        const regex = /\d{4}(?= \d{1})/g;
        const substr = "****";
        document.getElementById("cardNo13").value = val.replace(regex, substr);
    }
}
/*----------------Card Number 14---------------*/
function formatCardNumber14(element) {
    if (element.value.length > 14) {
        var position = element.selectionStart;
        element.value = element.value.replace(/\W/gi, '').replace(/^(.{4})(.{4})(.{4})(.*)$/, "$1 $2 $3 $4");
        if (element.value.length != 19) {
            element.setSelectionRange(position, position);
        }
    } else {
        element.value = element.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    }
}

function showCardValue14() {
    document.getElementById("cardNo14").value = document.getElementById("cardNoSafe14").value;
}

function hideCardValue14(val) {
    document.getElementById("cardNoSafe14").value = val;
    var len = val.length;
    if (len >= 14) {
        const regex = /\d{4}(?= \d{1})/g;
        const substr = "****";
        document.getElementById("cardNo14").value = val.replace(regex, substr);
    }
}
/*----------------Card Number 11---------------*/
function formatCardNumber15(element) {
    if (element.value.length > 14) {
        var position = element.selectionStart;
        element.value = element.value.replace(/\W/gi, '').replace(/^(.{4})(.{4})(.{4})(.*)$/, "$1 $2 $3 $4");
        if (element.value.length != 19) {
            element.setSelectionRange(position, position);
        }
    } else {
        element.value = element.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    }
}

function showCardValue15() {
    document.getElementById("cardNo15").value = document.getElementById("cardNoSafe15").value;
}

function hideCardValue15(val) {
    document.getElementById("cardNoSafe15").value = val;
    var len = val.length;
    if (len >= 14) {
        const regex = /\d{4}(?= \d{1})/g;
        const substr = "****";
        document.getElementById("cardNo15").value = val.replace(regex, substr);
    }
}
