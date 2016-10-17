/* 
* @Author: [GHT] <odin.guott@gmail.com>
* @Date:   2016-10-17 19:50:34
* @Last Modified by:   [GHT] <odin.guott@gmail.com>
* @Last Modified time: 2016-10-17 21:21:48
*/

;(function($){

$(window).load(function() {
    var url = "";//求求后台的url
    var param = {};
    param.pageNo = 2;
    param.pageSize = 10;
   $.ajax({
       type: 'GET',//GET/POST
       url: url + "?data=" + JSON.stringify(param),
       success: function (data, textStatus) {

       }
});

})(jQuery);

var data = [
  {title:"test1",info:"黄",content:"第一篇文章内容"},
  {title:"test2",info:"郭",content:"第二篇文章内容"},
  ];

  function initList(){
  alert('start');
      for (var i = 0; len = data.length, i < len; i++) {
      var article = 
          "<article><div id='ar_title'>"+data[i].title+"</div><div id='ar_info'>"+data[i].info+"</div><div id='ar_content'>"+data[i].content+"</div></article>";

      $("#list_body").append(article);
    }
}