---
layout: none
---

var idx = lunr(function () {
  this.field('title')
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')

  this.pipeline.remove(lunr.trimmer)

  for (var item in store) {
    this.add({
      title: store[item].title,
      excerpt: store[item].excerpt,
      categories: store[item].categories,
      tags: store[item].tags,
      id: item
    })
  }
});

// Change search output format
$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val().toLowerCase();

    // Clear results when the input is empty
    if (query === "") {
      resultdiv.empty();
      return;
    }

    var result =
      idx.query(function (q) {
        query.split(lunr.tokenizer.separator).forEach(function (term) {
          q.term(term, { boost: 100 });
          if(query.lastIndexOf(" ") != query.length-1){
            q.term(term, { usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 });
          }
          if (term != ""){
            q.term(term, { usePipeline: false, editDistance: 1, boost: 1 });
          }
        });
      });

    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' {{ site.data.ui-text[site.locale].results_found | default: "Result(s) found" }}</p>');
    
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem =
        '<div class="list__item search__item-margin">' +
          '<article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">' +
            '<div class="search__item-header">' + // Applying .search__item-header class here
              '<div class="search__item-text">' +
                '<h2 class="search__item-title" itemprop="headline">' +
                  '<a href="' + store[ref].url + '" rel="permalink">' + store[ref].title + '</a>' +
                '</h2>' +
                '<p class="archive__item-excerpt" itemprop="description">' + store[ref].excerpt.split(" ").splice(0, 15).join(" ") + '...</p>' +
              '</div>';

      if (store[ref].teaser) {
        searchitem +=
              '<div class="search__item-thumbnail">' +
                '<img src="' + store[ref].teaser + '" alt="">' +
              '</div>';
      }

      searchitem +=
            '</div>' + // close search__item-header
          '</article>' +
        '</div>';

      resultdiv.append(searchitem);
    }

    // Add bottom margin after all search results
    resultdiv.append('<hr class="search__separator"><div class="search__item-bottom-margin"></div>');

  });
});

/* 240721 검색 결과 출력 포맷을 위해 위의 코드로 수정. 아래 코드는 이전 코드임
$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val().toLowerCase();
    var result =
      idx.query(function (q) {
        query.split(lunr.tokenizer.separator).forEach(function (term) {
          q.term(term, { boost: 100 })
          if(query.lastIndexOf(" ") != query.length-1){
            q.term(term, {  usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })
          }
          if (term != ""){
            q.term(term, {  usePipeline: false, editDistance: 1, boost: 1 })
          }
        })
      });
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' {{ site.data.ui-text[site.locale].results_found | default: "Result(s) found" }}</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt.split(" ").splice(0,20).join(" ")+'...</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt.split(" ").splice(0,20).join(" ")+'...</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
*/
