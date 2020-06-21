//localstorge存储用户基本信息
// var cache=window.sessionStorage;
// var user={
//     loginStatus:cache.getItem("loginStatus"),
//     userID:cache.getItem("userID"),
//     nickname:cache.getItem("nickname"),
//     sex:cache.getItem("sex"),
// }
//传入的页数
var pageCount = 1;
var flag = 1;
//总页数
var countPage;
//每一页需要的订单数,也是最后一页
var countPerPage = 20;
//请求对应学校的订单
var school=$("#school").val();


//当浏览器加载页面就触发时间，ajax与后台请求数据接收订单信息，修改当前用户的nickname，修改订单模块的父元素高度
//计算一共有多少页的数据（最后一页请求的是第几个数据）
$(document).ready(function () {
    //加载第一页
    changePage(1);

    //index-functionModule的nickname在页面一加载就进行导入
    if (JSON.stringify(user) == "{}") {
        loginStatus = 0;
    } else {
        $("#nicknameSpan").html(user.nickname);
        loginStatus = 1;
    }
})


//分页模块的获取对应订单函数
function changePage(page) {
    if (page == 1) {
        $("#prePageBtn").attr("disabled", true);
    } else {
        $("#prePageBtn").attr("disabled", false);
    }

    if (page = countPage) {
        $("#nextPageBtn").attr("disabled", true);
    } else {
        $("#nextPageBtn").attr("disabled", false);

    }
    pageCount = page;
    var data = { "pageCount": pageCount, "countPerPage": countPerPage ,"school":school};


    //我的测试数据，可以删除
    var result = {
        isSuccess: true,
        code: 222,
        orderSize: 23,
        data: {
            list: [{ orderID: 1, specification: "衣服，小件", sex: "男", pay: "5", deadline: "2019/11/23 21:00", status: "未领取", telephone: "15319488292", claimSite: "1西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", note: "贵重物品，请轻拿轻放" },
            { orderID: 2, specification: "衣服，小件", sex: "男", pay: "5", deadline: "2019/11/23 21:00", status: "未领取", telephone: "15319488292", claimSite: "2西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", note: "贵重物品，请轻拿轻放" },
            { orderID: 3, specification: "衣服，小件", sex: "男", pay: "5", deadline: "2019/11/23 21:00", status: "未领取", telephone: "15319488292", claimSite: "西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", note: "贵重物品，请轻拿轻放" },
            { orderID: 4, specification: "衣服，小件", sex: "男", pay: "5", deadline: "2019/11/23 21:00", status: "未领取", telephone: "15319488292", claimSite: "西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", note: "贵重物品，请轻拿轻放" },
            { orderID: 5, specification: "衣服，小件", sex: "男", pay: "5", deadline: "2019/11/23 21:00", status: "未领取", telephone: "15319488292", claimSite: "西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", note: "贵重物品，请轻拿轻放" },
            { orderID: 6, specification: "衣服，小件", sex: "男", pay: "5", deadline: "2019/11/23 21:00", status: "未领取", telephone: "15319488292", claimSite: "西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", note: "贵重物品，请轻拿轻放" },
            { orderID: 7, specification: "衣服，小件", sex: "男", pay: "5", deadline: "2019/11/23 21:00", status: "未领取", telephone: "15319488292", claimSite: "西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", note: "贵重物品，请轻拿轻放" },
            { orderID: 8, specification: "衣服，小件", sex: "男", pay: "5", deadline: "2019/11/23 21:00", status: "未领取", telephone: "15319488292", claimSite: "西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", note: "贵重物品，请轻拿轻放" },
            { orderID: 9, specification: "衣服，小件", sex: "男", pay: "5", deadline: "2019/11/23 21:00", status: "未领取", telephone: "15319488292", claimSite: "西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", note: "贵重物品，请轻拿轻放" },
            { orderID: 10, specification: "衣服，小件", sex: "男", pay: "5", deadline: "2019/11/23 21:00", status: "未领取", telephone: "15319488292", claimSite: "西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", note: "贵重物品，请轻拿轻放" },
            { orderID: 11, specification: "衣服，小件", sex: "男", pay: "5", deadline: "2019/11/23 21:00", status: "未领取", telephone: "15319488292", claimSite: "西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", note: "贵重物品，请轻拿轻放" },
            { orderID: 12, specification: "衣服，小件", sex: "男", pay: "5", deadline: "2019/11/23 21:00", status: "未领取", telephone: "15319488292", claimSite: "西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", note: "贵重物品，请轻拿轻放" },
            { orderID: 13, specification: "衣服，小件", sex: "男", pay: "5", deadline: "2019/11/23 21:00", status: "未领取", telephone: "15319488292", claimSite: "西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", note: "贵重物品，请轻拿轻放" },
            { orderID: 14, specification: "衣服，小件", sex: "男", pay: "5", deadline: "2019/11/23 21:00", status: "未领取", telephone: "15319488292", claimSite: "西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", note: "贵重物品，请轻拿轻放" },
            { orderID: 15, specification: "衣服，小件", sex: "男", pay: "5", deadline: "2019/11/23 21:00", status: "未领取", telephone: "15319488292", claimSite: "西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", note: "贵重物品，请轻拿轻放" },
            { orderID: 16, specification: "衣服，小件", sex: "男", pay: "5", deadline: "2019/11/23 21:00", status: "未领取", telephone: "15319488292", claimSite: "西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", note: "贵重物品，请轻拿轻放" },
            { orderID: 17, specification: "衣服，小件", sex: "男", pay: "5", deadline: "2019/11/23 21:00", status: "未领取", telephone: "15319488292", claimSite: "西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", note: "贵重物品，请轻拿轻放" },
            { orderID: 18, specification: "衣服，小件", sex: "男", pay: "5", deadline: "2019/11/23 21:00", status: "未领取", telephone: "15319488292", claimSite: "西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", note: "贵重物品，请轻拿轻放" },
            { orderID: 19, specification: "衣服，小件", sex: "男", pay: "5", deadline: "2019/11/23 21:00", status: "未领取", telephone: "15319488292", claimSite: "西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", note: "贵重物品，请轻拿轻放" },
            { orderID: 20, specification: "衣服，小件", sex: "男", pay: "5", deadline: "2019/11/23 21:00", status: "未领取", telephone: "15319488292", claimSite: "西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", note: "贵重物品，请轻拿轻放" }
            ]
        }
    }


    var bodyContent = "<table id=\"tb\"><tr><th class=\"tb-sequence\">序号</th><th class=\"tb-goodSize\">商品规格</th><th class=\"tb-sex\">性别要求</th><th class=\"tb-wage\">金额</th><th class=\"tb-deadline\">配送截止时间</th><th class=\"tb-more\">详情</th><th class=\"tb-getBtn\">点击领取</th></tr>";
    // $.ajax({
    //     url: "/orderInfo/showAllOrderInfoList",
    //     async: true,
    //     data: JSON.stringify(data),
    //     dataType: "json",
    //     type: "GET",
    //     contentType: "application/json",
    //     success: function (result) {
    if (result.isSuccess) {
        if (result.code == 222) {
            //计算总页数countPage,也是最后一页的页数
            countPage = Math.ceil(result.orderSize / 20);
            //获取页面信息列表
            var pageInfoList = result.data.list;
            var listBody;
            pageInfoList.forEach((list) => {
                //js语法
                bodyContent += "<tr><td>" + list.orderID + "</td>";
                bodyContent += "<td>" + list.specification + "</td>";
                bodyContent += "<td>" + list.sex + "</td>";
                bodyContent += "<td>" + list.pay + "元</td>";
                bodyContent += "<td>" + list.deadline + "</td>";
                bodyContent += "<td class=\"unfoldTD\" onclick=\"getMore(" + list.orderID + ",this)\">展开</td>";
                bodyContent += "<td><button onclick=\"changeStatus(" + list.orderID + ",this)\">领取</button></td></tr>";

                bodyContent += "<tr class=\"hidden\" id=" + list.orderID + "><td colspan=\"7\"><div>";
                bodyContent += "<span class=\"hidden-title\">联系方式</span>:<span class=\"hidden-info\">" + list.telephone + "</span>";
                bodyContent += "<span class=\"hidden-title\">取货地点</span>:<span class=\"hidden-info\">" + list.claimSite + "</span>";
                bodyContent += "<span class=\"hidden-title\">送货地点</span>:<span class=\"hidden-info\">" + list.deliverSite + "</span>";
                bodyContent += "<span class=\"hidden-title\">备注</span>:<span class=\"hidden-info\">" + list.note + "</span></div></td></tr>";
            });
            $("#tb").html(listBody);

            //使用js语法时将下面的语句注释取消
            bodyContent += "</table>";
            $(".index-orderFormModule-content:first").append(bodyContent);
        }
    }
}

// 查看详情函数
function getMore(OID, obj) {
    var tr = document.getElementById(OID);
    if (flag == 1) {
        tr.style.setProperty("display", "table-row", "important");
        obj.innerHTML = "折叠";
        flag = 0;
    } else {
        tr.style.setProperty("display", "none", "important");
        obj.innerHTML = "展开";
        flag = 1;
    }
}

//修改订单状态函数
function changeStatus(OID, obj) {
    if (user) {
        //判断是否已经登陆
        alert("请先去登录");
    } else {
        var orderInfoID = OID;
        var userID = userID;
        var data = { "orderInfoID": orderInfoID, "userID": userID,"school":school };
        $.ajax({
            url: "/orderInfo/handleOrder",
            type: "GET",
            dataType: "json",
            async: true,
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function (result) {
                if (result.isSuccess) {
                    obj.innerHTML = "已领取";
                    obj.setAttribute("disabled", true);
                } else {
                    alert("领取失败");
                }
            }
        });
    }
}


//查询用户信息
function showUser() {
    if (loginStatus == 0) {
        window.location.href = "login.html";
        $("#nicknameSpan").html("登录");
    } else {
        console.log(loginStatus);
        $(".index-userInfo:first").toggle();
        $("#index-userInfo-nickname").text(user.nickname);
        $("#index-userInfo-tel").text(user.userID);
        $("#index-userInfo-sex").text(user.sex);
        $.ajax({
            url: "",
            async: true,
            data: JSON.stringify(data),
            type: "GET",
            dataType: "json",
            contentType: "application/json",
            success: function (result) {

            }
        });
    }
}

/**
 * 注销
 */
function logout(){
    $.ajax({
        url: "http://localhost:8080/order_sys/logout.do",
        type: "POST",
        dataType: "json",
        data: $('#login-Tel').serialize(),
        success: function (data) {
            if (data.code == 200) {
                window.location.href = "login.do";
            } else {
                $('.login-errorInfo').text(data.msg);
            }
        },
        error: function () {
            alert("服务器错误!");
        }
    });
}