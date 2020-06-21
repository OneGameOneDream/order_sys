//请求各个状态的订单
$(document).ready(
    function () {
        // $.ajax({
        //     url:"",
        //     async:false,
        //     data:JSON.stringify(data),
        //     dataType:"json",
        //     type:"GET",
        //     contentType:"application/json",
        //     success:function(result){
        //         if(result.isSuccess){
        //                 alert("加载成功");
        result = {
            isSuccess: true,
            data:{
                dispatchingOrder: [
                    { orderID: 20001, orderTime: "2020/4/29 15:17", deadlineTime: "2020/4/29 22:00", specification: "小件", sex: "不限", pay: "3", claimSite: "西安科技大学小调韵达快递", deliverSite: "1西安科技大学二好宿舍楼充电口", callNumber: "15319436400", remark: "取货码72894" },
                    { orderID: 20002, orderTime: "2020/4/29 15:17", deadlineTime: "2020/4/29 22:00", specification: "小件", sex: "不限", pay: "3", claimSite: "西安科技大学小调韵达快递", deliverSite: "2西安科技大学二好宿舍楼充电口", callNumber: "15319436400", remark: "取货码72894" },
                    { orderID: 20003, orderTime: "2020/4/29 15:17", deadlineTime: "2020/4/29 22:00", specification: "小件", sex: "不限", pay: "3", claimSite: "西安科技大学小调韵达快递", deliverSite: "3西安科技大学二好宿舍楼充电口", callNumber: "15319436400", remark: "取货码72894" }
                ],
                finishedOrder: [
                    { orderID: 30001, orderTime: "2020/4/29 15:17", deadlineTime: "2020/4/29 22:00", specification: "小件", sex: "不限", pay: "3", claimSite: "西安科技大学小调韵达快递", deliverSite: "4西安科技大学二好宿舍楼充电口", callNumber: "15319436400", remark: "取货码72894" },
                    { orderID: 30002, orderTime: "2020/4/29 15:17", deadlineTime: "2020/4/29 22:00", specification: "小件", sex: "不限", pay: "3", claimSite: "西安科技大学小调韵达快递", deliverSite: "5西安科技大学二好宿舍楼充电口", callNumber: "15319436400", remark: "取货码72894" },
                    { orderID: 30003, orderTime: "2020/4/29 15:17", deadlineTime: "2020/4/29 22:00", specification: "小件", sex: "不限", pay: "3", claimSite: "西安科技大学小调韵达快递", deliverSite: "6西安科技大学二好宿舍楼充电口", callNumber: "15319436400", remark: "取货码72894" }
                ],
                failedOrder: [
                    { orderID: 40001, orderTime: "2020/4/29 15:17", deadlineTime: "2020/4/29 22:00", specification: "小件", sex: "不限", pay: "3", claimSite: "西安科技大学小调韵达快递", deliverSite: "7西安科技大学二好宿舍楼充电口", callNumber: "15319436400", remark: "取货码72894" },
                    { orderID: 40002, orderTime: "2020/4/29 15:17", deadlineTime: "2020/4/29 22:00", specification: "小件", sex: "不限", pay: "3", claimSite: "西安科技大学小调韵达快递", deliverSite: "8西安科技大学二好宿舍楼充电口", callNumber: "15319436400", remark: "取货码72894" },
                    { orderID: 40003, orderTime: "2020/4/29 15:17", deadlineTime: "2020/4/29 22:00", specification: "小件", sex: "不限", pay: "3", claimSite: "西安科技大学小调韵达快递", deliverSite: "9西安科技大学二好宿舍楼充电口", callNumber: "15319436400", remark: "取货码72894" }]
            }
        }
        var i=1;
        for (var orderModule in result.data) {
            result.data[orderModule].forEach((orderList) => {
                var bodyContent = "<div class=\""+orderModule+"-content\" id=\""+orderList.orderID+"\">";
                bodyContent +="<div class=\"item\"><span class=\"title\">订单时间:</span><span>"+orderList.orderTime+"</span><span class=\"title\">配送截止时间:</span><span>"+orderList.deadlineTime+"</span><span class=\"title\">商品规格:</span><span>"+orderList.specification+"</span><span class=\"title\">要求:</span><span>"+orderList.sex+"</span><span class=\"title\">配送费:</span><span>"+orderList.pay+"元</span></div>";
                bodyContent +="<div class=\"item\"><span class=\"title\">取货地点:</span><span>"+orderList.claimSite+"</span></div>";
                bodyContent +="<div class=\"item\"><span class=\"title\">送货地点:</span><span></span>"+orderList.deliverSite+"</span></div>";
                bodyContent +="<div class=\"item\"><span class=\"title\">联系方式:</span><span></span>"+orderList.callNumber+"</span></div>";
                bodyContent +="<div class=\"item\"><span class=\"title\">备注:</span><span></span>"+orderList.remark+"</span></div>";
                if (orderModule == "dispatchingOrder") {
                    bodyContent += "<div><button class=\"confirmBtn\" onclick=\"deliveryGood("+orderList.orderID+")\" data-toggle=\"modal\" data-target=\"#deliveryModal\">确认送达</button></div>";
                    bodyContent += "<div><button class=\"cancelBtn\" onclick=\"cancelOrder("+orderList.orderID+")\" data-toggle=\"modal\" data-target=\"#cancelModal\">取消订单</button></div></div>";
                    $(".dispatchingOrder").append(bodyContent);
                } else if (orderModule == "finishedOrder") {
                    bodyContent += "<div><button class=\"deleteBtn finishedDeleteBtn\" onclick=\"deleteOrder("+orderList.orderID+")\" data-toggle=\"modal\" data-target=\"#deleteModal\">删除订单</button></div></div>";
                    $(".finishedOrder").append(bodyContent);
                } else if (orderModule == "failedOrder") {
                    bodyContent += "<div><button class=\"deleteBtn failedDeleteBtn\" onclick=\"deleteOrder("+orderList.orderID+")\" data-toggle=\"modal\" data-target=\"#deleteModal\">删除订单</button></div></div>";
                    $(".failedOrder").append(bodyContent);
                }
            })
        }
        //         }
        //     }

        // })
    })
//页面加载后，导航栏第一个内容发生点击事件，改变相应的导航样式，展示对应的订单信息
window.onload = function () {
    var oUl = document.getElementsByTagName("ul")[0];
    oUl.onclick = function (ev) {
        var ev = ev || window.event;
        var oLi = ev.target || ev.srcElement;
        if (oLi.nodeName.toLowerCase() == 'li') {
            selectStyle(oLi);
            var moduleName = "module" + oLi.className.substr(3);
            selectModule(moduleName);
        }
    }
    oUl.children[0].click();
}

//改变导航栏选中内容的样式的函数
function selectStyle(obj) {
    $("li").css({ "background-color": "white", "color": "black" });
    obj.style.setProperty("background-color", "rgb(99, 120, 148)", "important");
    obj.style.setProperty("color", "white", "important");
}

//展示选中导航栏内容对应的订单信息，展示对应订单模块
function selectModule(name) {
    $("#myOrder-content").children().css("display", "none");
    $("." + name).css("display", "block");
}

//取消订单
function cancelOrder(OID){
    $("#cancelInfoID").val(OID);
}
//模态框取消订单函数
function confirmCancelOrder() {
    var orderInfoID = $("#cancelInfoID").val();
    var data={"orderID":orderInfoID}
    //直接取消订单，不计算时间
        $.ajax({
            url:"",
            async:false,
            data:JSON.stringify(data),
            dataType:"json",
            type:"GET",
            contentType:"application/json",
            success:function(result){
                if(result.isSuccess){
                }
            }
        })
              
}

//确认送达
function deliveryGood(OID){
    $("#deliveryInfoID").val(OID);
}
//模态框确认已送达函数
function confirmDelivery() {
    var orderInfoID = $("#deliveryInfoID").val();
    var data={"orderID":orderInfoID}
//改变订单状态，订单状态变为“已完成”的订单状态
//ajax请求
}

//删除订单
//此函数将订单id传递给删除模态框中的input，用来保存订单id，之后确认删除订单函数将id取出
function deleteOrder(OID){
    $("#deleteInfoID").val(OID);
}
//模态框删除订单函数
function confirmDeleteOrder() {
    var orderInfoID = $("#deleteInfoID").val();
    console.log(orderInfoID);
    var data={"orderID":orderInfoID}
//ajax请求
//数据库中删除此订单
}


