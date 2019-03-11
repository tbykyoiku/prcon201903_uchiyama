
function getParam()
{
	var url   = location.href
	list    = url.split("?")
	parameters    = list[1]

	var paramsArray = []
	neet = parameters.split("=")	
	var paramvalue = neet[1]

	return paramvalue
}


jQuery(function()
{
	var text = getParam()
	var str_tmp = ""
	str_tmp += decodeURI ( text )

	$('#star').html(str_tmp)

})
