(this["webpackJsonpthe-movie-dbv2"]=this["webpackJsonpthe-movie-dbv2"]||[]).push([[0],{35:function(e,t,a){e.exports=a(47)},40:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(15),o=a.n(c),l=a(4),i=a(8);a(40);var s=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.c,{to:"/movies",className:"header__buttons-button",activeClassName:"header__buttons-button--active"},"Movies"),n.a.createElement(l.c,{to:"/tvs",className:"header__buttons-button",activeClassName:"header__buttons-button--active"},"TvSeries"))};var p=function(e){var t=e.pageType;return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.c,{exact:!0,to:"/".concat(t),className:"header__filterBtns-button",activeClassName:"header__filterBtns-button--active"},"Trending"),n.a.createElement(l.c,{exact:!0,to:"/".concat(t,"/popular"),className:"header__filterBtns-button",activeClassName:"header__filterBtns-button--active"},"Popular"),n.a.createElement(l.c,{exact:!0,to:"/".concat(t,"/top_rated"),className:"header__filterBtns-button",activeClassName:"header__filterBtns-button--active"},"Top Rated"))},u=a(2),m="FETCH_MOVIES",d="FETCH_POPULAR_MOVIES",v="FETCH_TOP_MOVIES",h="FETCH_TVSERIES",f="FETCH_POPULAR_TVS",_="FETCH_TOP_TVS",g="GET_ITEM_DETAILS",b="SEARCH_ITEM",E="GET_ITEM_CAST",y="b53da4cd71ebc2f41acc2d9844e25e62";var O=Object(u.b)((function(e){return{searchedItems:e.searchedItems}}),{searchItem:function(e,t){var a="https://api.themoviedb.org/3/search/".concat(e,"?api_key=").concat(y,"&query=").concat(t);return function(e){fetch(a).then((function(e){return e.json()})).then((function(t){return e({type:b,payload:t.results})})).catch((function(e){return console.log(e)}))}},clearSearchedItems:function(){return function(e){e({type:"CLEAR_SEARCHED_ITEMS"})}}})((function(e){var t=e.pageType,a=e.searchItem,r=e.searchedItems,c=e.clearSearchedItems,o=t.slice(0,-1),i=function(){c(),document.querySelector(".header__search-bar-input").value=""};return n.a.createElement("div",{className:"header__search-bar"},n.a.createElement("input",{type:"search",className:"header__search-bar-input",placeholder:"movies"===t?"search movie":"search tv serie",onChange:function(e){var t=e.target.value;""===t?i():a(o,t)}}),n.a.createElement("ul",{className:"search-bar__list"},r&&r.slice(0,6).map((function(e){return n.a.createElement(l.b,{to:"/".concat(t,"/").concat(t.slice(0,-1),"/").concat(e.id),key:e.id,className:"search-bar__link",onClick:i},n.a.createElement("li",{className:"search-bar__item"},e.poster_path&&n.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300/".concat(e.poster_path),alt:"poster",style:{width:"60px",height:"70px"}}),n.a.createElement("span",{className:"search-bar__item--title"},e.original_title?e.original_title:e.original_name)))}))))})),j=n.a.createContext("movies"),N=function(e){return function(t){return n.a.createElement(j.Consumer,null,(function(a){return n.a.createElement(e,Object.assign({},t,{pageContext:a}))}))}};var w=N((function(e){var t=e.pageContext;return n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"header__buttons"},n.a.createElement(s,null)),n.a.createElement(O,{pageType:t.pageType}),n.a.createElement("div",{className:"header__filterBtns"},n.a.createElement(p,{pageType:t.pageType})))}));var C=function(e){var t=e.children;return n.a.createElement("div",{className:"container"},n.a.createElement(w,null),n.a.createElement("main",{className:"results"},t))};var k=N((function(e){var t=e.title,a=e.poster,r=e.rate,c=e.release,o=e.id,i=e.pageContext,s=i.pageType.slice(0,-1);return n.a.createElement("figure",{className:"movie results__movie"},n.a.createElement(l.c,{exact:!0,to:"/".concat(i.pageType,"/").concat(s,"/").concat(o),className:"movie__link"},n.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300/".concat(a),alt:t,className:"movie__poster"}),n.a.createElement("div",{className:"movie__info"},n.a.createElement("span",{className:"movie__info-header"},t),n.a.createElement("p",{className:"movie__info-release"},"Release:"),n.a.createElement("p",{className:"movie__info-date"},c),n.a.createElement("div",{className:"movie__info-rate"},n.a.createElement("p",{className:"info-rate__parapgraph"},"Rate:"),n.a.createElement("p",{className:"minfo-rate__votes"},r)))))})),T="b53da4cd71ebc2f41acc2d9844e25e62",P="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(T);var S=function(e){var t=e.bgc;return n.a.createElement("div",{style:{backgroundImage:"url('https://image.tmdb.org/t/p/original/".concat(t,"')")},alt:"",className:"container__bg"})};var D=Object(u.b)((function(e){return{movies:e.movies}}),{fetchMovies:function(){return function(e){fetch(P).then((function(e){return e.json()})).then((function(t){return e({type:m,payload:t.results})}))}}})(N((function(e){var t=e.fetchMovies,a=e.movies;return Object(r.useEffect)((function(){a.trending.length<1&&t()}),[t,a.trending.length]),n.a.createElement(C,null,n.a.createElement(S,{bgc:a.trending.length>0?a.trending[0].backdrop_path:""}),a.trending.map((function(e){return n.a.createElement(k,{title:e.original_title,release:e.release_date,poster:e.poster_path,rate:e.vote_average,id:e.id,key:e.id})})))}))),x="b53da4cd71ebc2f41acc2d9844e25e62",I="https://api.themoviedb.org/3/trending/tv/day?api_key=".concat(x);var M=Object(u.b)((function(e){return{tvseries:e.tvseries}}),{fetchTvs:function(){return function(e){fetch(I).then((function(e){return e.json()})).then((function(t){return e({type:h,payload:t.results})})).catch((function(e){return console.log(e)}))}}})((function(e){var t=e.tvseries,a=e.fetchTvs;return Object(r.useEffect)((function(){t.trending.length<1&&a()}),[a,t.trending.length]),n.a.createElement(C,null,n.a.createElement(S,{bgc:t.trending.length>0?t.trending[0].backdrop_path:""}),t.trending.map((function(e){return n.a.createElement(k,{title:e.original_name,release:e.first_air_date,poster:e.poster_path,rate:e.vote_average,id:e.id,key:e.id})})))})),F=a(10);var R=Object(u.b)((function(e){return{movies:e.movies}}),{fetchSortedMovies:function(e){var t="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(T);return function(a){fetch(t).then((function(e){return e.json()})).then((function(t){a("popular"===e?{type:d,payload:t.results}:{type:v,payload:t.results})})).catch((function(e){return console.log(e)}))}}})(N((function(e){var t=e.fetchSortedMovies,a=e.movies,c=e.pageContext,o=e.location.pathname;return Object(r.useEffect)((function(){var e=["popular","top_rated"].filter((function(e){return o.includes(e)})),r=Object(F.a)(e,1)[0];(a.popular.length<1||a.top_rated.length<1)&&t(r)}),[t,o,a.popular.length,a.top_rated.length]),n.a.createElement(C,null,"popular"===c.sortCategory?n.a.createElement(n.a.Fragment,null,n.a.createElement(S,{bgc:a.popular.length>0?a.popular[0].backdrop_path:""}),a.popular.map((function(e){return n.a.createElement(k,{title:e.original_title,release:e.release_date,poster:e.poster_path,rate:e.vote_average,id:e.id,key:e.id})}))):n.a.createElement(n.a.Fragment,null,n.a.createElement(S,{bgc:a.top_rated.length?a.top_rated[0].backdrop_path:""}),a.top_rated.map((function(e){return n.a.createElement(k,{title:e.original_title,release:e.release_date,poster:e.poster_path,rate:e.vote_average,id:e.id,key:e.id})}))))}))),A=a(26),B=a(27),H=a(33),V=a(28),L=a(34),G=function(e){function t(){var e,a;Object(A.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(H.a)(this,(e=Object(V.a)(t)).call.apply(e,[this].concat(n)))).state={pageType:"",sortCategory:""},a.setCurrentPage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=["movies","tvs"],r=a.props.location.pathname,n=t.filter((function(e){return r.includes(e)})),c=Object(F.a)(n,1),o=c[0];e.pageType!==o&&a.setState({pageType:o})},a.setCurrentSortCategory=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=["popular","top_rated"],r=a.props.location.pathname,n=t.filter((function(e){return r.includes(e)})),c=Object(F.a)(n,1),o=c[0];e.sortCategory!==o&&a.setState({sortCategory:o})},a}return Object(L.a)(t,e),Object(B.a)(t,[{key:"componentDidMount",value:function(){this.setCurrentPage(),this.setCurrentSortCategory()}},{key:"componentDidUpdate",value:function(e,t){this.setCurrentPage(t),this.setCurrentSortCategory(t)}},{key:"render",value:function(){var e=this.props.children;return n.a.createElement(j.Provider,{value:this.state},e)}}]),t}(r.Component),U=Object(i.g)(G);var q=Object(u.b)((function(e){return{tvseries:e.tvseries}}),{fetchSortedTvs:function(e){var t="https://api.themoviedb.org/3/tv/".concat(e,"?api_key=").concat(x);return function(a){fetch(t).then((function(e){return e.json()})).then((function(t){a("popular"===e?{type:f,payload:t.results}:{type:_,payload:t.results})})).catch((function(e){return console.log(e)}))}}})(N((function(e){var t=e.fetchSortedTvs,a=e.tvseries,c=e.pageContext,o=e.location.pathname;return Object(r.useEffect)((function(){var e=["popular","top_rated"].filter((function(e){return o.includes(e)})),r=Object(F.a)(e,1)[0];(a.popular.length<1||a.top_rated.length<1)&&t(r)}),[t,o,a.popular.length,a.top_rated.length]),n.a.createElement(C,null,"popular"===c.sortCategory?n.a.createElement(n.a.Fragment,null,n.a.createElement(S,{bgc:a.popular.length>0?a.popular[0].backdrop_path:""}),a.popular.map((function(e){return n.a.createElement(k,{title:e.original_name,release:e.release_date,poster:e.poster_path,rate:e.vote_average,id:e.id,key:e.id})}))):n.a.createElement(n.a.Fragment,null,n.a.createElement(S,{bgc:a.top_rated.length>0?a.top_rated[0].backdrop_path:""}),a.top_rated.map((function(e){return n.a.createElement(k,{title:e.original_name,release:e.release_date,poster:e.poster_path,rate:e.vote_average,id:e.id,key:e.id})}))))}))),z=a(21),J=a.n(z),W=a(29),K="b53da4cd71ebc2f41acc2d9844e25e62";var Q=Object(u.b)((function(e){return{itemDetails:e.itemDetails}}),{getItemDetails:function(e,t){var a="https://api.themoviedb.org/3/".concat(e,"/").concat(t,"?api_key=").concat(K,"&append_to_response=videos"),r="https://api.themoviedb.org/3/".concat(e,"/").concat(t,"/credits?api_key=").concat(K);return function(){var e=Object(W.a)(J.a.mark((function e(t){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a).then((function(e){return e.json()})).then((function(e){return t({type:g,payload:e})})).catch((function(e){return console.log(e)}));case 2:return e.next=4,fetch(r).then((function(e){return e.json()})).then((function(e){return t({type:E,payload:e})})).catch((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getItemCast:function(e,t){var a="https://api.themoviedb.org/3/".concat(e,"/").concat(t,"/credits?api_key=").concat(K);return function(e){fetch(a).then((function(e){return e.json()})).then((function(t){return e({type:E,payload:t})})).catch((function(e){return console.log(e)}))}}})(N((function(e){var t=e.getItemDetails,a=e.pageContext,c=e.match,o=e.itemDetails,l=e.location.pathname;return Object(r.useEffect)((function(){var e=["movies","tvs"].filter((function(e){return l.includes(e)})),a=Object(F.a)(e,1)[0].slice(0,-1);t(a,c.params.id),window.scrollTo(0,0)}),[l,t,c.params.id]),n.a.createElement(C,null,n.a.createElement(S,{bgc:o.backdrop_path?o.backdrop_path:""}),n.a.createElement("div",{className:"movieDetails"},n.a.createElement("div",{className:"movieDetails__poster"},n.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300/".concat(o.poster_path),alt:"",className:"movieDetails__img"})),n.a.createElement("div",{className:"movieDesc"},n.a.createElement("h1",{className:"movieDesc__header"},o.original_name?o.original_name:o.original_title),n.a.createElement("p",{className:"movieDesc__overview paragraph"},o.overview),n.a.createElement("ul",{className:"movieDesc__list-items"},n.a.createElement("li",{className:"list_item"},n.a.createElement("p",{className:"list__item-paragraph paragraph"},"Genres:"),o.genres&&o.genres.map((function(e){return n.a.createElement("strong",{key:e.id},e.name,",")}))),n.a.createElement("li",{className:"list_item"},n.a.createElement("p",{className:"list__item-paragraph"},"Premiere:"),n.a.createElement("strong",null,o.first_air_date?o.first_air_date:o.release_date)),"tvs"===a.pageType?n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{className:"list_item"},n.a.createElement("p",{className:"list__item-paragraph"},"Seasons:"),n.a.createElement("strong",null,o.number_of_seasons)),n.a.createElement("li",{className:"list_item"},n.a.createElement("p",{className:"list__item-paragraph"},"Episodes:"),n.a.createElement("strong",null,o.number_of_episodes))):null,n.a.createElement("li",{className:"list_item"},n.a.createElement("p",{className:"list__item-paragraph"},"Production:"),n.a.createElement("strong",null,o.origin_country?o.origin_country:n.a.createElement(n.a.Fragment,null,o.production_countries&&o.production_countries.map((function(e){return n.a.createElement("strong",{key:10*Math.random()},e.iso_3166_1,",")}))))),n.a.createElement("li",{className:"list_item"},n.a.createElement("p",{className:"list__item-paragraph"},"Rating:"),n.a.createElement("strong",null,o.vote_average,"/10"))))),n.a.createElement("div",{className:"movie-videos"},n.a.createElement("h1",{className:"movie-videos__title"},"Trailers"),o.videos&&o.videos.results.slice(0,2).map((function(e){return n.a.createElement("iframe",{className:"movie-videos__video",title:"Trailer",style:{border:"none"},src:"https://www.youtube.com/embed/"+e.key,key:e.id,allowFullScreen:"allowfullscreen",mozallowfullscreen:"mozallowfullscreen",msallowfullscreen:"msallowfullscreen",oallowfullscreen:"oallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen",sandbox:"allow-scripts allow-same-origin allow-presentation",frameBorder:"0"})}))),n.a.createElement("div",{className:"movie-cast"},n.a.createElement("h1",{className:"movie-cast__title"},"Cast"),o.cast&&o.cast.slice(0,6).map((function(e){return n.a.createElement("div",{className:"movie-cast__item",key:e.id},n.a.createElement("img",{className:"movie-cast__img",src:"https://image.tmdb.org/t/p/w300/".concat(e.profile_path),alt:e.name}),n.a.createElement("div",{className:"movie-cast__info"},n.a.createElement("p",{className:"movie-cast__info-name"},n.a.createElement("strong",null,e.name)),n.a.createElement("p",{className:"movie-cast__info-character"},n.a.createElement("span",null,"as:")," ",e.character)))}))))}))),X=a(12),Y=a(30),Z=a(31),$=a(13);function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(a,!0).forEach((function(t){Object($.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ae={trending:[],popular:[],top_rated:[]};function re(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function ne(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?re(a,!0).forEach((function(t){Object($.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):re(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ce={trending:[],popular:[],top_rated:[]};function oe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function le(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?oe(a,!0).forEach((function(t){Object($.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):oe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ie={},se=a(32),pe=[],ue=Object(X.combineReducers)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case m:return te({},e,{trending:r});case d:return te({},e,{popular:r});case v:return te({},e,{top_rated:r});default:return e}},tvseries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case h:return ne({},e,{trending:r});case f:return ne({},e,{popular:r});case _:return ne({},e,{top_rated:r});default:return e}},itemDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case g:return le({},r);case E:return le({},e,{},r);default:return e}},searchedItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case b:return Object(se.a)(r);case"CLEAR_SEARCHED_ITEMS":return[];default:return e}}}),me=[Z.a],de=Object(X.createStore)(ue,{},Object(Y.composeWithDevTools)(X.applyMiddleware.apply(void 0,me)));var ve=function(){return n.a.createElement(u.a,{store:de},n.a.createElement(l.a,null,n.a.createElement(U,null,n.a.createElement(i.d,null,n.a.createElement(i.b,{exact:!0,path:"/",render:function(){return n.a.createElement(i.a,{to:"/movies"})}}),n.a.createElement(i.b,{exact:!0,path:"/movies",component:D}),n.a.createElement(i.b,{exact:!0,path:"/movies/popular",component:R}),n.a.createElement(i.b,{exact:!0,path:"/movies/top_rated",component:R}),n.a.createElement(i.b,{exact:!0,path:"/tvs/popular",component:q}),n.a.createElement(i.b,{exact:!0,path:"/tvs/top_rated",component:q}),n.a.createElement(i.b,{path:"/movies/movie/:id",component:Q}),n.a.createElement(i.b,{path:"/tvs/tv/:id",component:Q}),n.a.createElement(i.b,{exact:!0,path:"/tvs",component:M})))))};o.a.render(n.a.createElement(ve,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.beb03ed7.chunk.js.map