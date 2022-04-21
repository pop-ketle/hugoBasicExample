$('#js-sidebar').click(function() {
    $('.ui.sidebar').sidebar('toggle');
});

function search(word) {
    let result = [];
    for (i = 0; i < data.length; i++) {
        if (data[i].body.match(word)) {
            result.push(data[i]);
        }
    }
    return result;
}

function doSearch() {
    let value = document.getElementById("search").value;
    const arr = search(value);
    let ul = document.getElementById("results");
    ul.innerHTML = "";

    for (i = 0; i < arr.length; i++) {
        let li = document.createElement("li");
        let elem = arr[i];

        let liArticleMeta = document.createElement("div");
        liArticleMeta.className = "li-article-meta";
        let liArticleDate = document.createElement("time");
        liArticleDate.className = "li-article-date";
        let liArticleTag  = document.createElement("ul");
        liArticleTag.className = "li-article-tag";

        liArticleDate.innerHTML = elem.date;
        liArticleMeta.appendChild(liArticleDate);

        for (j = 0; j < elem["categories"].length; j++) {
            let cat = document.createElement("li");
            let a = document.createElement("a");
            a.innerHTML = elem["categories"][j];
            a.setAttribute("href", elem["category_urls"][j]);
            cat.appendChild(a);
            liArticleTag.appendChild(cat);
        }
        liArticleMeta.appendChild(liArticleTag);

        let elemlink = document.createElement('a');
        elemlink.innerHTML = elem["title"];
        elemlink.setAttribute('href', elem["url"]);
        let h4 = document.createElement("h4");
        h4.appendChild(elemlink);

        li.appendChild(h4);
        li.appendChild(liArticleMeta)

        ul.appendChild(li);
    }
}


// // 追従スクロール https://coco-factory.jp/ugokuweb/move01/5-1-10/
// //画面が読み込まれたら＆リサイズされたら
// $(window).on('load resize', function() {
// 	var windowWidth = window.innerWidth;
// 	var elements = $('nav');//position: sticky;を指定している要素
// 	if (windowWidth >= 768) {/*768px以上にIE用のJSをきかせる*/
// 		Stickyfill.add(elements);
// 	}else{
// 		Stickyfill.remove(elements);
// 	} 
// });

//リンク先のidまでスムーススクロール
//※ページ内リンクを行わない場合は不必要なので削除してください
    $('#g-navi li a').click(function () {
	var elmHash = $(this).attr('href');
	var pos = $(elmHash).offset().top-0;
	$('body,html').animate({scrollTop: pos}, 1000);
	return false;
});

VANTA.BIRDS({
    el: "#vanta_birds",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 530.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0xa0cbdc,
    color1: 0xed8367,
    color2: 0xd77211
});