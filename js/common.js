// 获取URL中指定字符串的值
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return r[2]; return "";
};

// ajax
function ajax(url, params) {
	return $.ajax({
	  dataType: "json",
	  url: url,
	  data: params,
	  cache: false,
	  type: "POST",
	  error: ajaxError
	});
};

function ajaxError(XMLHttpRequest, textStatus, errorThrown) {
	$('#loading').hide();
	$('#loading_tj').hide();
    var message = "";
    switch (errorThrown) {
        case 'Request Time-out':
            message = "请求超时.";
            break;
        case 'Not Found':
            message = "请求失败！";
            break;
        default:
        	//console.log(errorThrown);
        	message = "网络连接失败！";
	        break;
    }
    $("#tan_window1 .content").html(message);
    easyDialog.open({
		container : 'tan_window1'
	});
	return false;
};