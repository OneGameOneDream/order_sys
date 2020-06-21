<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-type" content="text/html">
    <title>快递帮——主页</title>
    <link rel="icon" href="./static/image/icon.ico" type="image/x-icon" />
    <script src="./static/js/jquery-3.4.1.min.js"></script>
    <script src="./static/common/url.js"></script>
    <link href="./static/css/index.css" rel="stylesheet" type="text/css">
</head>
<body>
<div class="index">
    <div class="index-functionModule">
        <select id="school">
            <option value="1">西安科技大学</option>
            <option value="2">西安工程大学</option>
            <option value="3">西安美术学院</option>
            <option value="4">西安汽车职业大学</option>
        </select>
        <div class="index-functionModule-content">
            <a href="releaseOrder.html">发单</a>
            <a href="myPlacedOrder.html">我的发单</a>
            <a href="myOrder.html">我的接单</a>
<%--            <span id="nicknameSpan" onclick="showUser()">登录</span>--%>
            <span id="nicknameSpan" onclick="logout()">注销</span>
        </div>
    </div>

    <div class="index-userInfo">
        <p>用户昵称：<span id="index-userInfo-nickname"></span></p>
        <p>账号：<span id="index-userInfo-tel"></span></p>
        <p>性别：<span id="index-userInfo-sex"></span></p>
        <p>发单总数:<span id="index-userInfo-releaseOrderCount"></span></p>
        <button id="index-userInfo-logoutBtn" onclick="logoutFunc()">注销</button>
    </div>

    <div class="index-orderFormModule  clearfix">
        <div class="index-orderFormModule-content">
            <table id="tb">


            </table>
        </div>
    </div>
    <div class="index-paginationModule">
        <div class="index-paginationModule-content">
            <ul>
                <li><button id="firstPageBtn" onclick="changePage(1)">首页</button></li>
                <li><button id="prePageBtn" onclick="changePage(pageCount-1)">
                    <<</button>
                </li>
                <li><button id="nextPageBtn" onclick="changePage(pageCount+1)">>></button></li>
                <li><button id="lastPageBtn" onclick="changePage(countPage)">尾页</button></li>
            </ul>
        </div>
    </div>
</div>
<script language="javascript" src="./static/js/index.js"></script>
<script language="javascript" src="./static/common/userInfo.js"></script>
</body>
</html>
