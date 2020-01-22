import 'jquery.min.js';
$.ajax({
    // url：请求地址
    url: 'json.php',
    // type：请求方法，默认为 get
    type: 'get',
    // 设置的是请求参数
    beforeSend: function (xhr) {
        // 在所有发送请求的操作（open, send）之前执行
        console.log('beforeSend', xhr)
    },
    data: { id: 1, name: '张三' },
    // 用于设置响应体的类型 contentType：请求体内容类型，默认 application/x-www-form-urlencoded
    dataType: 'json',
    //请求成功之后触发（响应状态码 200）
    success: function (res) {
        // 一旦设置的 dataType 选项，就不再关心 服务端 响应的 Content-Type 了
        // 客户端会主观认为服务端返回的就是 JSON 格式的字符串
        console.log(res)
    },
    //请求失败触发
    error:function (res) {

    },
    complete: function (xhr) {
        // 不管是成功还是失败都是完成，都会执行这个 complete 函数
        console.log('complete', xhr)
    }
})