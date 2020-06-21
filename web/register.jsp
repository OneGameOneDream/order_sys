<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-type" content="text/html" />
    <title>快递帮——注册</title>
    <link href="./static/css/register.css" type="text/css" rel="stylesheet">
    <script src="./static/js/jquery-3.4.1.min.js"></script>
    <script src="./static/common/url.js"></script>
</head>

<body>
    <div class="register">
        <form class="register-form" onsubmit="submitForm(event)">
            <label for="register-nickname">昵称:</label><input type="text" id="register-nickname" onblur="checkNM()" />
            <span class="register-nicknameSpan"></span>
            <br>
            <label for="register-school">学校:</label>
            <select id="register-school">
                <option value="1">西安科技大学</option>
                <option value="2">西安工程大学</option>
                <option value="3">西安美术学院</option>
                <option value="4">西安汽车职业大学</option>
            </select>
            <br>
            <label for="register-tel">账号:</label><input type="text" id="register-tel" maxlength="11"
                placeholder="请输入手机号码" onblur="checkTel()" />
            <span class="register-telSpan"></span>
            <br>
            <label for="register-verification">验证码:</label>
            <input id="register-verification" onblur="checkVerification()" maxlength="6" /><input type="button"
                id="register-verify" value="发送验证码" onclick="getSecurityCode(this)" />
            <span class="register-verificationSpan"></span>
            <br>
            <label for="register-pwd">密码:</label><input type="password" id="register-pwd" maxlength="20"
                onblur="checkPwd()" placeholder="请输入9-20位密码，由任意字母和数字组成" />
            <span class="register-pwdSpan"></span>
            <br>
            <label for="register-confirmPwd">确认密码:</label><input type="password" id="register-confirmPwd" maxlength="20"
                onblur="checkConfirmPwd()" />
            <span class="register-confirmPwdSpan"></span>
            <br>
            <label for="">性别:</label><input type="radio" name="sex" value="true" checked />男<input type="radio"
                name="sex" value="false" />女
            <br>
            <input id="register-submit" type="submit" value="注册"></button>
        </form>

    </div>
    <script type="text/javascript" src="./static/js/register.js">

    </script>
</body>

</html>