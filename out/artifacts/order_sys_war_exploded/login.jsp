<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-type" content="text/html">
    <title>快递帮——登陆页面</title>
    <script src="./static/js/jquery-3.4.1.min.js"></script>
    <script src="./static/common/userInfo.js"></script>
    <script src="./static/common/url.js"></script>
    <link href="./static/css/login.css" rel="stylesheet" type="text/css">
</head>
<body>
<div class="login">
    <div class="login-content">
        <div class="login-logo-module">
            <img class="login-logo" src="./static/image/logo.png" alt="logo">
        </div>
        <div class="login-main-module">
            <div class="login-error">
                <p class="login-errorInfo">&nbsp</p>
            </div>
            <!--手机登录-->
            <form id="login-Tel" onsubmit="userLoginForTel(event)">
                <input id="login-telForTel" type="text" placeholder="电话号码"
                       maxlength="11"/>
                <br>
                <input id="login-pwdForTel" type="password" placeholder="请输入密码" maxlength="20"
                />
                <br>
                <input class="login-submitForTel" type="submit" value="登录">
                <%--                <input class="login-cancel" type="button" value="取消登录" onclick="concelLoginForTel()">--%>
            </form>
            <!-- display:none 验证码登录-->
            <form id="login-Msg" onsubmit="userLoginForMsg()">
                <input id="login-telForMsg" type="text" placeholder="电话号码" onblur="checkTelForMsg()"
                       maxlength="11"/>
                <br>
                <input id="login-securityCode" type="text" placeholder="请输入验证码" maxlength="6"
                       onblur="checkSecurityCode()"/><input type="button" id="login-getCodeBtn" value="获取验证码"
                                                            onclick="getSecurityCode(this)"/>
                <br>
                <input class="login-submitForMsg" type="submit" value="点我登录">
                <input class="login-cancel" type="button" value="取消登录" onclick="concelLoginForMsg()">
            </form>
        </div>
<%--        <div class="login-way">--%>
<%--            <span class="login-forMsg" onclick="loginChangeForMsg()">验证码登陆</span>--%>
<%--            <!-- display:none -->--%>
<%--            <span class="login-forTel" onclick="loginChangeForTel()">账号登录</span>--%>
<%--            <span class="login-forgetPwd" onclick="loginForget()">忘记密码</span>--%>
<%--        </div>--%>

        <div class="login-register-module">
            <p class="login-toRegister">还没有账号？<span class="login-registerSpan"
                                                    onclick="getRegisterhtml()">进行注册</span>
            </p>
        </div>
    </div>
</div>
<script type="text/javascript" src="./static/js/login.js">
</script>
</body>
</html>
