//请求各个状态的订单
$(document).ready(
    function () {
        // $.ajax({
        //     url: "",
        //     async: false,
        //     data: JSON.stringify(data),
        //     dataType: "json",
        //     type: "GET",
        //     contentType: "application/json",
        //     success: function (result) {
        //         if (result.isSuccess) {
        //             if (result.code == 222) {
        //                 alert("加载成功");
        result = {
            isSuccess: true,
            code: 222,
            data: {
                processingOrder: [
                    { orderID: 1, orderTime: "2019/12/23 13:21", deadline: "2019/12/24 16:00", specification: "小件", sex: "不限", pay: "2.1", claimSite: "1西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", callNumber: "15316153726", remark: "取货码18181" },
                    { orderID: 2, orderTime: "2019/12/23 13:21", deadline: "2019/12/24 16:00", specification: "小件", sex: "不限", pay: "2.1", claimSite: "2西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", callNumber: "15316153726", remark: "取货码18181" },
                    { orderID: 3, orderTime: "2019/12/23 13:21", deadline: "2019/12/24 16:00", specification: "小件", sex: "不限", pay: "2.1", claimSite: "3西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", callNumber: "15316153726", remark: "取货码18181" },
                    { orderID: 4, orderTime: "2019/12/23 13:21", deadline: "2019/12/24 16:00", specification: "小件", sex: "不限", pay: "2.1", claimSite: "4西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", callNumber: "15316153726", remark: "取货码18181" }
                ],
                receivedOrder: [
                    { orderID: 5, orderTime: "2019/12/23 13:21", deadline: "2019/12/24 16:00", specification: "小件", sex: "不限", pay: "2.1", claimSite: "5西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", callNumber: "15316153726", remark: "取货码18181" },
                    { orderID: 6, orderTime: "2019/12/23 13:21", deadline: "2019/12/24 16:00", specification: "小件", sex: "不限", pay: "2.1", claimSite: "6西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", callNumber: "15316153726", remark: "取货码18181" },
                    { orderID: 7, orderTime: "2019/12/23 13:21", deadline: "2019/12/24 16:00", specification: "小件", sex: "不限", pay: "2.1", claimSite: "7西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", callNumber: "15316153726", remark: "取货码18181" },
                    { orderID: 8, orderTime: "2019/12/23 13:21", deadline: "2019/12/24 16:00", specification: "小件", sex: "不限", pay: "2.1", claimSite: "8西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", callNumber: "15316153726", remark: "取货码18181" },
                ],
                finishedOrder: [
                    { orderID: 9, orderTime: "2019/12/23 13:21", deadline: "2019/12/24 16:00", specification: "小件", sex: "不限", pay: "2.1", claimSite: "9西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", callNumber: "15316153726", remark: "取货码18181" },
                    { orderID: 10, orderTime: "2019/12/23 13:21", deadline: "2019/12/24 16:00", specification: "小件", sex: "不限", pay: "2.1", claimSite: "10西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", callNumber: "15316153726", remark: "取货码18181" },
                    { orderID: 11, orderTime: "2019/12/23 13:21", deadline: "2019/12/24 16:00", specification: "小件", sex: "不限", pay: "2.1", claimSite: "11西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", callNumber: "15316153726", remark: "取货码18181" }
                ],
                failedOrder: [
                    { orderID: 12, orderTime: "2019/12/23 13:21", deadline: "2019/12/24 16:00", specification: "小件", sex: "不限", pay: "2.1", claimSite: "12西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", callNumber: "15316153726", remark: "取货码18181" },
                    { orderID: 13, orderTime: "2019/12/23 13:21", deadline: "2019/12/24 16:00", specification: "小件", sex: "不限", pay: "2.1", claimSite: "13西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", callNumber: "15316153726", remark: "取货码18181" },
                    { orderID: 14, orderTime: "2019/12/23 13:21", deadline: "2019/12/24 16:00", specification: "小件", sex: "不限", pay: "2.1", claimSite: "14西安电子科技大学南校区，综合楼二楼韵达快递", deliverSite: "西安电子科技大学南校区，2号宿舍楼509室", callNumber: "15316153726", remark: "取货码18181" }
                ]
            }
        }
        for (var order in result.data) {
            result.data[order].forEach((orderList) => {
                var bodyContent = "<div class=\""+order+"-content\" id=\""+orderList.orderID+"\">";
                bodyContent+="<div class=\"flex-item\"><span class=\"title\">订单时间:</span><span>"+orderList.orderTime+"</span><span class=\"title\">配送截止时间:</span><span>"+orderList.deadline+"</span><span class=\"title\">商品规格:</span><span>"+orderList.specification+"</span><span class=\"title\">要求:</span><span>【"+orderList.sex+"】</span><span class=\"title\">配送费:</span><span>"+orderList.pay+"元</span></div>";
                bodyContent+="<div class=\"flex-item\"><span class=\"title\">取货地点:</span><span>"+orderList.claimSite+"</span></div>";
                bodyContent+="<div class=\"flex-item\"><span class=\"title\">送货地点:</span><span>"+orderList.deliverSite+"</span></div>";
                bodyContent+="<div class=\"flex-item\"><span class=\"title\">联系电话:</span><span>"+orderList.callNumber+"</span></div>";
                if (order == 'processingOrder') {
                    bodyContent += "<div class=\"flex-item\"><span class=\"title\">备注:</span><span>"+orderList.remark+"</span><br><button class=\"processingOrder-cancelBtn\" data-toggle=\"modal\" data-target=\"#cancelModal\" onclick=\"cancelOrder("+orderList.orderID+")\">取消订单</button></div></div >";
                    $(".processingOrder").append(bodyContent);
                } else if (order == 'receivedOrder') {
                    bodyContent += "<div class=\"flex-item\"><span class=\"title\">备注:</span><span>"+orderList.remark+"</span><br><button class=\"receivedOrder-getGoodBtn\" data-toggle=\"modal\" data-target=\"#getModal\" onclick=\"getGood("+orderList.orderID+")\">确认收货</button><button class=\"receivedOrder-cancelBtn flex-item\" data-toggle=\"modal\" data-target=\"#cancelModal\" onclick=\"cancelOrder("+orderList.orderID+")\">取消订单</button><button class=\"personInfo\" data-toggle=\"modal\" data-target=\"#showModal\" onclick=\"showInfo("+orderList.orderID+")\">接单人信息</button></div>";
                    $(".receivedOrder").append(bodyContent);
                } else if (order == 'finishedOrder') {
                    bodyContent += "<div class=\"flex-item\"><span class=\"title\">备注:</span><span>"+orderList.remark+"</span><button class=\"finishedOrder-deleteBtn\" data-toggle=\"modal\" data-target=\"#myModal\" onclick=\"deleteOrder("+orderList.orderID+")\">删除订单</button></div>";
                    $(".finishedOrder").append(bodyContent);
                } else if (order == 'failedOrder') {
                    bodyContent += "<div class=\"flex-item\"><span class=\"title\">备注:</span><span>"+orderList.remark+"</span><button class=\"failedOrder-deleteBtn\" data-toggle=\"modal\" data-target=\"#myModal\" onclick=\"deleteOrder("+orderList.orderID+")\">删除订单</button></div>";
                    $(".failedOrder").append(bodyContent);
                }
                //                 })
                //             } else {
                //                 alert("加载失败，请重新刷新");
                //             }
                //         } else {
                //             alert("请求失败");
                //         }
                //     }


                // })
            })
        }
    })




window.onload = function () {
    //使用事件委托，减少dom操作，提高性能
    var oUl = document.getElementsByTagName("ul")[0];
    oUl.onclick = function (ev) {
        var ev = ev || window.event;
        var oLi = ev.srcElement || ev.target;
        if (oLi.nodeName.toLowerCase() == 'li') {
            selectedStyle(oLi);
            var module = oLi.id + "Order";
            selectedModule(module);
        }
    }
    oUl.children[0].click();
}

//改变选中模块的css样式
function selectedStyle(obj) {
    $(".myPlacedOrder-nav-orderStatus").css({ "background-color": "white", "color": "black" });
    obj.style.setProperty("background-color", "rgb(99, 120, 148)", "important");
    obj.style.setProperty("color", "white", "important");
}

//使选中的模块显示，其他模块隐藏
function selectedModule(module) {
    $(".myPlacedOrder-content-order").css({ "display": "none" });
    document.getElementsByClassName(module)[0].style.setProperty("display", "block", "important");
    console.log(module);
}

//展示接单人信息,函数接受订单id为参数
function showInfo(OID){
    console.log(OID);
    var data={"orderID":OID};
//ajax请求此id的订单的接单者的信息，信息有接单人昵称、手机号码、评分
//接收到的信息innerHTML在对应位置
//昵称放在#personNickname中，如下
// document.getElementById("#personNickname").innerHTML=昵称;
//手机号码放在#personTel
//评分放在#personGrade
}

//取消订单
function cancelOrder(OID){
    $("#cancelInfoID").val(OID);
}

//模态框确认取消订单
function confirmCancelOrder(OID){
    var orderInfoID = $("#cancelInfoID").val();
    var data={"orderID":orderInfoID}
    //直接取消订单，不计算时间
    //ajax请求
}

//确认收货
function getGood(OID){
    $("#getGoodInfoID").val(OID);
}
//模态框确认收货
function confirmGetGood(){
    var orderInfoID = $("#getGoodInfoID").val();
    var grade=$("#grade").val();
    // console.log(orderInfoID);
    // console.log(grade);
    var data={"orderID":getGoodInfoID,"grade":grade};
    //ajax请求
}

//删除订单
//此函数将订单id传递给删除模态框中的input，用来保存订单id，之后确认删除订单函数将id取出
function deleteOrder(OID) {
    $("#deleteInfoID").val(OID);
}
//模态框确认确认删除订单
function confirmDeleteOrder() {
    var orderInfoID = $("#orderInfoID").val();
    console.log(orderInfoID);
    document.getElementById(orderInfoID).remove();
    var data={orderInfoID:orderInfoID};
    $.ajax({
        url:"",
        type:"POST",
        async:true,
        contentType: "application/json",
        data: JSON.stringify(data),
        dataType: "json",
        success:function(result){
            if(result.isSuccess){
                if(result.code==222){
                    alert("删除订单成功");
                }
            }else{
                alert("删除订单请求失败");
            }
        }
    })
}
