// Note: some RSS feeds can't be loaded in the browser due to CORS security.
// To get around this, you can use a proxy.
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
 
let parser = new RSSParser({
  customFields: {
	feed: ['otherTitle', 'extendedDescription'],
	item: ['title','description','pubDate'],
  }
});
(async () => {
	


	var current_lang = "";
	var current_lang_set = localStorage.getItem("lang-current-set");
	var current_lang_comp = localStorage.getItem("lang-current");
	if(current_lang_set != null){
		current_lang += current_lang_set;
	} else {
		current_lang += current_lang_comp;
	}
	//console.log("Com: " + current_lang);
	if(current_lang == 'es'){
		let parser2 = new RSSParser({
			customFields: {
				feed: ['otherTitle', 'extendedDescription'],
				item: ['title','description','lastBuildDate'],
			},
			headers: {'X-Requested-With': 'XMLHttpRequest'},
	  	});
		  let feed2 = await parser2.parseURL(CORS_PROXY + 'https://es.cointelegraph.com/rss');
	  		
		  //document.getElementById('news').innerHTML = feed.title;
		  var html_content = "";
		  var count = 1;
		  
		  feed2.items.forEach(item => {
			  var rand = Math.floor((Math.random() * 3) + 1);
			  if(count <= 6){
				  //html_content += '<div class="col-sm content-container"><h2>' + item.title + '</h2><h3>' + item.pubDate + '</h3></div>';
				  html_content += '<div class="one-slide">'
									  +'<div class="testimonial image-' + rand + ' w-100 h-100  p-3 text-center">'
										  +'<div class="message text-center text-gray title_news">' + item.title + '</div>'
										  +'<div class="separator">&nbsp;</div>'
										  +'<img src="/local/landing-page/images/isotipo.png" class="iso_botton">'
									  +'</div>'
								  +'</div>';
				  count++
			  }
		  })
		  document.getElementById('newses').innerHTML = html_content;	
		  document.getElementById("news-es").style.cssText = "display: block;";
	} else {
		let feed = await parser.parseURL('https://api.gbcpay.net/api/get/coinmarketcap');
		//document.getElementById('news').innerHTML = feed.title;
		var html_content = "";
		var count = 1;
		
		feed.items.forEach(item => {
			var rand = Math.floor((Math.random() * 3) + 1);
			if(count <= 6){
				//html_content += '<div class="col-sm content-container"><h2>' + item.title + '</h2><h3>' + item.pubDate + '</h3></div>';
				html_content += '<div class="one-slide">'
									+'<div class="testimonial image-' + rand + ' w-100 h-100  p-3 text-center">'
										+'<div class="message text-center text-gray title_news">' + item.title + '</div>'
										+'<div class="separator">&nbsp;</div>'
										+'<img src="/local/landing-page/images/isotipo.png" class="iso_botton">'
									+'</div>'
								+'</div>';
				count++
			}
		})
		document.getElementById('news').innerHTML = html_content;
		document.getElementById("news-eng").style.cssText = "display: block;";
	}
		
	
	
	/// slider
	if (document.getElementsByClassName("testimonial-carousel")) {
		$(".testimonial-carousel").slick({
			infinite: !0,
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			speed: 3000,
			arrows:true,
			prevArrow: $(".testimonial-carousel-controls .prev"),
			nextArrow: $(".testimonial-carousel-controls .next"),
			responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			}, {
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 1
				}
			}]
		});
	}


})();