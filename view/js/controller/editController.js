
;(function($){
	//跳转到编辑页面，若传参为0，则为新建文章，若参为ar_id，则为文章编辑
	
	

  
})(jQuery);

//初始化ajax


//提交ajax

function commitAjax(data){
	$.ajax({
		url: '',
		type: 'POST',
		dataType: 'json',
		data: data,
	})
	.done(function() {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
}


//获取输入参数

function getVelue(){
	var edit_title = $("#edit_title").val();
	var edit_content = $("#edit_content").val();
	var data = {title : edit_title , content : edit_content}
	return data;
}