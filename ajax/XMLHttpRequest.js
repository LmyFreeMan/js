/*创建 XMLHttpRequest 对象
所有现代浏览器（IE7+、Firefox、Chrome、Safari 以及 Opera）均内建 XMLHttpRequest 对象。
*/
var xmlhttp=new XMLHttpRequest();
/*方法说明
 *@method open
 *@for XMLHttpRequest
 *@param{String}method:请求的类型；GET 或 POST
 *@param{String}url:文件在服务器上的位置
 *@param{Bool}async:true（异步）或 false（同步）
 *@return {void}
*/
xmlhttp.open("GET","test1.txt",true);
/*方法说明
 *@method open
 *@for XMLHttpRequest
 *@param{String}method:请求的类型；GET 或 POST
 *@param{String}url:文件在服务器上的位置
 *@param{Bool}async:true（异步）或 false（同步）
 *@return {void}
*/
xmlhttp.send();
/*方法说明
 *@method send
 *@for XMLHttpRequest
 *@param{String}NULL:如果请求的头为get请求
 *@param{String}data:如果请求的头为post请求
 *@return {void}
*/
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
/*方法说明
 *@method setRequestHeader
 *@for XMLHttpRequest
 *@param{String}header:规定头的名称("Content-type")
 *@param{String}value:规定头的值:"application/x-www-form-urlencoded"，请求为非文件上传,"application/x-www-form-urlencoded"，请求为文件上传
 *@return {void}
*/
