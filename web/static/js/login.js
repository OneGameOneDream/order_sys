/**
 * 密码登录，约束账号函数
 * @returns {boolean}
 */
function checkTelForTel() {
    var Telephone = $.trim($("#login-telForTel").val());
    if (Telephone.length != 11) {
        $('.login-errorInfo').text('请输入正确的账号');
        return false;
    } else if (Telephone == "") {
        $('.login-errorInfo').text('请输入账号！');
        return false;
    } else {
        $('.login-errorInfo').html('&nbsp');
        return true;
    }
    //密码登录，约束账号不为空，长度为11位，input约束最大长度为11位
}

/**
 * 密码登录的约束密码函数
 * @returns {boolean}
 */
function checkPwd() {
    var Password = $.trim($("#login-pwdForTel").val());
    if (Password.length < 9) {
        $('.login-errorInfo').text('密码过短!');
        return false;
    } else {
        $('.login-errorInfo').html('&nbsp');
        return true;
    }
    //约束密码最小长度位9，input约束最大长度为20
}


/**
 * 密码登录，提交表单函数
 * @param event
 */
function userLoginForTel(event) {
    var tel = checkTelForTel();
    var pwd = checkPwd();
    if (tel && pwd) {
        $.ajax({
            url: "http://localhost:8080/order_sys/login.do",
            type: "POST",
            dataType: "json",
            data: $('#login-Tel').serialize(),
            success: function (data) {
                if (data.code == 200) {
                    window.location.href = "index.do";
                } else {
                    $('.login-errorInfo').text(data.msg);
                }
            },
            error: function () {
                alert("服务器错误!");
            }
        });
    }
}

/**
 * 跳转注册页
 */
function registerView() {
    window.location.href = "register.do";
}