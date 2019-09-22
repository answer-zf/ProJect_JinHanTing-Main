window.onload = function () {
    $descriprtion = $('.news_articleText span:nth-of-type(1)').html();
    $descriprtion =$descriprtion.slice(0,70)+"...";
    $title = $('.news_article .news-articleTop>h3').html();
    $('meta[name="description"]').attr('content',$descriprtion );
    $('title').html($title);
}