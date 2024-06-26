$('.gnb').hover(
	function () {
		$(this).find('.sub_gnb').stop().slideDown();
		$('#gnb_bg').stop().animate({ height: '100px' });
	},
	function () {
		$(this).find('.sub_gnb').stop().slideUp();
		$('#gnb_bg').stop().animate({ height: '0px' });
	}
);

/* 상단 슬라이드 */
init();
bindingEvent();

var $wrapVisual,
	$wrapVisual_ul,
	$wrapVisual_ul_li,
	$boxVisual,
	$boxVisual_ul,
	$boxVisual_ul_li,
	$btnPrev,
	$btnNext,
	speed,
	isAnimated;

function init() {
	$wrapVisual = $('.wrap_visual');
	$wrapVisual_ul = $wrapVisual.children('ul');
	$wrapVisual_ul_li = $wrapVisual_ul.children('li');

	$boxVisual = $('.box_visual');
	$boxVisual_ul = $boxVisual.children('ul');
	$boxVisual_ul_li = $boxVisual_ul.children('li');

	$btnPrev = $('.box_visual .btn_prev');
	$btnNext = $('.box_visual .btn_next');
	speed = 1000;
	isAnimated = true;
}

function bindingEvent() {
	$wrapVisual_ul_li.last().prependTo($wrapVisual_ul);
	$boxVisual_ul_li.last().prependTo($boxVisual_ul);

	calcWidth($wrapVisual_ul);
	calcWidth($boxVisual_ul);

	//next 이벤트
	$btnNext.on('click', function () {
		if (isAnimated) {
			isAnimated = false;
			doNext($wrapVisual_ul);
			doNext($boxVisual_ul);
		}
	});

	//prev 이벤트
	$btnPrev.on('click', function () {
		if (isAnimated) {
			isAnimated = false;
			doPrev($wrapVisual_ul);
			doPrev($boxVisual_ul);
		}
	});
}

function doNext(item) {
	item.stop().animate({ 'margin-left': '-200%' }, speed, function () {
		$(this).children('li').first().appendTo(item);
		$(this).css({ 'margin-left': '-100%' });
		isAnimated = true;
	});
}

function doPrev(item) {
	item.stop().animate({ 'margin-left': '0%' }, speed, function () {
		$(this).children('li').last().prependTo(item);
		$(this).css({ 'margin-left': '-100%' });
		isAnimated = true;
	});
}

function calcWidth(item) {
	var len = item.children('li').length;
	item.css({ width: 100 * len + '%' });
	item.children('li').css({ width: 100 / len + '%' });
}
