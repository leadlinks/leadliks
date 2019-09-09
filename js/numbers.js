function nuber_change1(){
	var sT = $(document).scrollTop();

	var pEl1 = $('.our-result');
	var pEl1_of = pEl1.offset();
	var nowLook_1 = sT + $(window).height() - pEl1.height() - 100;

	var change_numb_1 = $('.year');
	var change_numb_2 = $('.sites');
	var change_numb_3 = $('.qq');

	var change_numb_1_val = 2;
	var change_numb_2_val = 38;
	var change_numb_3_val = 1000;

	if(vkl_1 == 0 && pEl1_of.top < nowLook_1) {
		change_numb_1.text('0');
		change_numb_2.text('0');
		change_numb_3.text('0');
	}

	if(vkl_1 == 0 && pEl1_of.top < nowLook_1) {
		var change_numb_1_now = 0;
		var change_numb_2_now = 0;
		var change_numb_3_now = 0;

		var inter_1 = setInterval(function(){
			if(change_numb_1_now < change_numb_1_val) {
				change_numb_1_now = change_numb_1_now + 1;
				change_numb_1.text(change_numb_1_now);
			}
		}, 100);

		var inter_1_1 = setInterval(function(){
			if(change_numb_2_now < change_numb_2_val) {
				change_numb_2_now = change_numb_2_now + 1;
				change_numb_2.text(change_numb_2_now);
			}
		}, 50);

		var inter_1_2 = setInterval(function(){
			if(change_numb_3_now < change_numb_3_val) {
				change_numb_3_now = change_numb_3_now + 1;
				change_numb_3.text(change_numb_3_now);
			}
		}, 0);

		vkl_1 = 1;
	}
	return vkl_1;
}

var vkl_1 = 0;

$(document).ready(function(){
	$('.year').text('0');
	$('.sites').text('0');
	$('.qq').text('0');
	vkl_1 = nuber_change1();
});

$(document).scroll(function(){
	vkl_1 = nuber_change1();
});

$(window).resize(function(){
	vkl_1 = nuber_change1();
});