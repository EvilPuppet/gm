(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9eSz":function(e,t,a){"use strict";var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),l=i(a("VbXa")),o=i(a("8OQS")),s=i(a("pVnL")),d=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,i=m(t||a||[]);return i&&i.src},m=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=p(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},i&&d.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),a&&d.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+d+l+o+a+i+t+n+r+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=d.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,l=e.ariaHidden,o=d.default.createElement(k,(0,s.default)({ref:t,src:a},n,{ariaHidden:l}));return i.length>1?d.default.createElement("picture",null,r(i),o):o})),k=d.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:a,srcSet:i,src:r},m,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));k.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var V=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=p(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,l=e.imgStyle,o=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,w=e.loading,I=e.draggable,R=g||h;if(!R)return null;var V=!1===this.state.fadeIn||this.state.imgLoaded,T=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,s.default)({opacity:V?1:0,transition:T?"opacity "+y+"ms":"none"},o),H="boolean"==typeof b?"lightgray":b,N={transitionDelay:y+"ms"},P=(0,s.default)({opacity:this.state.imgLoaded?0:1},T&&N,o,f),j={title:t,alt:this.state.isVisible?"":a,style:P,className:p,itemProp:S},M=this.state.isHydrated?m(R):R[0];if(g)return d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:M.maxWidth?M.maxWidth+"px":null,maxHeight:M.maxHeight?M.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),H&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},T&&N)}),M.base64&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:j,imageVariants:R,generateSources:L}),M.tracedSVG&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:j,imageVariants:R,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,E(R),d.default.createElement(k,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,s.default)({alt:a,title:t,loading:w},M,{imageVariants:R}))}}));if(h){var W=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete W.display,d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},H&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:H,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},T&&N)}),M.base64&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:j,imageVariants:R,generateSources:L}),M.tracedSVG&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:j,imageVariants:R,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,E(R),d.default.createElement(k,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,s.default)({alt:a,title:t,loading:w},M,{imageVariants:R}))}}))}return null},t}(d.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),C=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function H(e){return function(t,a,i){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+i+"`, but their values are both `undefined`.");c.default.checkPropTypes(((r={})[a]=e,r),t,"prop",i)}}V.propTypes={resolutions:T,sizes:C,fixed:H(c.default.oneOfType([T,c.default.arrayOf(T)])),fluid:H(c.default.oneOfType([C,c.default.arrayOf(C)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var N=V;t.default=N},vx99:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),r=a.n(i),n=a("Wbzz"),l=a("wEEd"),o=a("vOnD"),s=Object(o.b)(l.a.main).withConfig({displayName:"blog__Container",componentId:"sc-1d8rkvc-0"})(["grid-area:content;max-width:950px;margin:0 auto;align-self:center;padding:30px;display:grid;grid-template-columns:auto;text-align:center;gap:15px;justify-content:center;margin-bottom:100px;h1{color:#888888;font-size:2.125em;&:hover{color:#585858;}}img:hover{opacity:0.8;fill:#888888;}"]),d=o.b.ol.withConfig({displayName:"blog__BlogList",componentId:"sc-1d8rkvc-1"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(265px,auto));grid-gap:20px;list-style:none;li{display:flex;flex-direction:column;background:#fff;border-radius:4px;padding:20px;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);transition:0.3s;small{color:#787878;}img{align-self:center;max-width:250px;}span{font-size:21px;font-weight:bold;margin:5px 0 20px;color:#888888;font-weight:700;}section{p{color:#888888;font-weight:500;}}}"]),c=a("9eSz"),u=a.n(c),f=function(){var e,t,a,i,l=Object(n.useStaticQuery)("916993862"),o=null===(e=l.site.siteMetadata)||void 0===e?void 0:e.author,s=null===(t=l.site.siteMetadata)||void 0===t?void 0:t.social,d=null==l||null===(a=l.avatar)||void 0===a||null===(i=a.childImageSharp)||void 0===i?void 0:i.fixed;return r.a.createElement("div",{className:"bio"},d&&r.a.createElement(u.a,{fixed:d,alt:(null==o?void 0:o.name)||"",className:"bio-avatar",imgStyle:{borderRadius:"50%"}}),(null==o?void 0:o.name)&&r.a.createElement("p",null,"Written by ",r.a.createElement("strong",null,o.name)," ",(null==o?void 0:o.summary)||null," ",r.a.createElement("a",{href:"https://twitter.com/"+((null==s?void 0:s.twitter)||"")},"You should follow them on Twitter")))},p=a("I/Ru"),m=a("jNNy");t.default=function(e){var t,a=e.data,i=e.location,o=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",c=a.allMarkdownRemark.nodes,u=Object(l.b)({opacity:1,from:{opacity:0}});return 0===c.length?r.a.createElement(p.a,{location:i,title:o},r.a.createElement(m.a,{title:"All posts | Guilherme Motta | Software Enginner"}),r.a.createElement(f,null),r.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):r.a.createElement(p.a,{location:i,title:o},r.a.createElement(m.a,{title:"All posts | Guilherme Motta | Software Enginner"}),r.a.createElement(s,null,r.a.createElement(l.a.h1,{style:u},"BLOG"),r.a.createElement(d,null,c.map((function(e){var t=e.frontmatter.title||e.fields.slug;return r.a.createElement("li",{key:e.fields.slug},r.a.createElement(n.Link,{to:e.fields.slug,itemProp:"url"},r.a.createElement("img",{src:e.frontmatter.imgTitle.childImageSharp.fluid.src,alt:"img title"})),r.a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},r.a.createElement("header",null,r.a.createElement("h2",null,r.a.createElement(n.Link,{to:e.fields.slug,itemProp:"url"},r.a.createElement("span",{itemProp:"headline"},t))),r.a.createElement("small",null,e.frontmatter.date)),r.a.createElement("section",null,r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))})))))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-e32e59763fb8b33805f1.js.map