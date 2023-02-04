var dtc_search = {path: ('https:' == document.location.protocol ? 'https://' : 'http://') + 'plugin.datacom.vn', productKey: 'f2fek5zj0q1kxwh', languageCode: 'vi', };

$(function() {
	$(".to-top").click(function(event) {
		$('html').animate({scrollTop: 0}, 1000);
		return false;
	});
	
	$(window).scroll(function(event) {
		$(this).scrollTop() ? $('.to-top').fadeIn() : $('.to-top').fadeOut();
	});

	// CÁCH ĐỂ THÊM MỘT SOURCE SCRIPT TỪ MÁY CHỦ BÊN NGOÀI VÀO,
	// THƯỜNG THÌ SOURCE SCRIP NÀY SẼ PHẢI TRUY XUẤT CSDL TRÊN MÁY CHỦ CỦA NÓ ĐỂ TRẢ VỀ KẾT QUẢ,
	// MỘT DẠNG API CỦA JAVASCRIPT
	// MÀ KHI TRUY XUẤT DỮ LIỆU TRÊN MÁY CHỦ KHÁC TA THƯỜNG DÙNG DẠNG BẤT ĐỒNG BỘ (ASYNC)
	var dtc_head = document.getElementsByTagName('head')[0];
	var dtc_script = document.createElement('script');
	dtc_script.async = true;
	dtc_script.src = dtc_search.path.concat('/Resources/Static/Js/plugin.js?v=' + (new Date().getTime())); 
	dtc_script.charset = 'UTF-8'; 
	dtc_head.appendChild(dtc_script);
});