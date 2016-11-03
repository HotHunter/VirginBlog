/* 
* @Author: [GHT] <odin.guott@gmail.com>
* @Date:   2016-10-17 19:50:34
* @Last Modified by:   [GHT] <odin.guott@gmail.com>
* @Last Modified time: 2016-10-18 11:09:00
*/

;(function($){

$(window).load(function() {
  var pageno = getPageCookie(),
      pagesize = 10,
      url = 'edit.js/change';

  listAjax(url,pageno,pagesize);

  
})(jQuery);

// var data = [
//   {title:"test1",info:"黄",content:"第一篇文章内容"},
//   {title:"test2",info:"郭",content:"第二篇文章内容"},
//   ];

//收到返回数据后初始化文章列表
//data.res
//data.paging
function initList(data){
    for (var i = 0; len = data.res.length, i < len; i++) {
      var article = 
          "<article><div id='ar_title'>"+data.res[i].title+"</div><div id='ar_info'>"+data.res[i].info+"</div><div id='ar_content'>"+data.res[i].content+"</div></article>";

      $("#list_body").append(article);
    }
    //同时初始化分页
    var pageno = "<div id='paging' style='text-align:center'><a onclick='pageChange(up)'>上一页</a>&nbsp&nbsp"+
      for(var i = 1;i<=data.paging,i++){
        +"<a onclick='pageChange("+data.paging[i]+")'>"data.paging[i]"</a>&nbsp"+
      }
    +"&nbsp<a onclick='pageChange(down)'>下一页</a></div>";

    $("#list_body").append(pageno);
    setPageCookie(date.paging);
}

//初始化文章列表ajax方法
function listAjax(url,pageno,pagesize){
  var param = {};
  param.pageno = pageno;
  param.pagesize = pagesize;
  // param.startid = pageno * pagesize;
  // param.endid = pageno * pagesize + 9;
  $.ajax({
    type: 'POST',
    url : url,
    data  : json.stringify(param),
    dateType : 'json'
    success: function(data , textStatus){
      initList(data);
    }
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      alert("XMLHttpRequest:" + XMLHttpRequest + ",textStatus:" + textStatus + ",errorThrown:" + errorThrown)
    }
  })
}

//当前页数传入传出cookie
function setPageCookie(pageno){
  document.cookie = "pageno=" + pageno;
}
function getPageCookie(){
  var getPageno = document.cookie;
  if(getPageno == ""){
    getPageno = getPageno.split('=');
    return getPageno[1];
  }
  else{
    return 1;
  }
}

function pageChange(updown){
  pageChangeDo(url,getPageCookie(),pagesize,updown)
}

//上一页下一页
function pageChangeDo(url,pageno,pagesize,updown){
  //清除页面article元素
  cleanArticle();
  //若updown为字符串up&down，则分别跳转上一页下一页
  //若传参为数字，则为要跳转的具体页
  if(updown == 'up'){
    listAjax(url,pageno-1,pagesize);
  }else if(updown == 'down'){
    listAjax(url,pageno+1,pagesize);
  }else if(typeof updown == 'number'){
    listAjax(url,updown,pagesize);
  }
}

//清除页面文章元素
function cleanArticle(){
  $("article").remove();
}