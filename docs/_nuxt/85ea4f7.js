(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{258:function(t,e,n){"use strict";n.r(e);var r=n(7),l=(n(41),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("blog",r.slug).only(["title","desc","slug"]).sortBy("createdAt","asc").fetch();case 3:return l=e.sent,e.abrupt("return",{articles:l});case 5:case"end":return e.stop()}}),e)})))()}}),c=n(35),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-page"},[n("h1",{staticClass:"text-5xl mb-10"},[t._v("Welcome to my blog")]),t._v(" "),n("h2",{staticClass:"text-3xl"},[t._v("Latest posts")]),t._v(" "),n("ul",{staticClass:"article"},t._l(t.articles,(function(article){return n("li",{key:article.slug},[n("nuxt-link",{staticClass:"article-list",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[n("h3",{staticClass:"2xl mb-4"},[t._v(t._s(article.title))]),t._v(" "),n("p",[t._v(t._s(article.desc))])])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);