(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{123:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),c=r(7),i=(r(0),r(364)),a={title:"SleepyDiscord::VoiceServerUpdate"},o={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_voice_server_update",id:"reference/Classes/struct_sleepy_discord_1_1_voice_server_update",isDocsHomePage:!1,title:"SleepyDiscord::VoiceServerUpdate",description:"Inherits from SleepyDiscord::DiscordObject",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1_voice_server_update.md",slug:"/reference/Classes/struct_sleepy_discord_1_1_voice_server_update",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_voice_server_update",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::VoiceRegion",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_voice_region"},next:{title:"SleepyDiscord::VoiceState",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_voice_state"}},s=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function VoiceServerUpdate",id:"function-voiceserverupdate",children:[]},{value:"function VoiceServerUpdate",id:"function-voiceserverupdate-1",children:[]},{value:"function VoiceServerUpdate",id:"function-voiceserverupdate-2",children:[]},{value:"function std::make_tuple",id:"function-stdmake_tuple",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable token",id:"variable-token",children:[]},{value:"variable serverID",id:"variable-serverid",children:[]},{value:"variable endpoint",id:"variable-endpoint",children:[]}]}],l={toc:s};function p(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Inherits from ",Object(i.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_discord_object"},"SleepyDiscord::DiscordObject")),Object(i.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(i.b)("h3",{id:"function-voiceserverupdate"},"function VoiceServerUpdate"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"VoiceServerUpdate() =default\n")),Object(i.b)("h3",{id:"function-voiceserverupdate-1"},"function VoiceServerUpdate"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"VoiceServerUpdate(\n    const nonstd::string_view & rawJSON\n)\n")),Object(i.b)("h3",{id:"function-voiceserverupdate-2"},"function VoiceServerUpdate"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"VoiceServerUpdate(\n    const json::Value & json\n)\n")),Object(i.b)("h3",{id:"function-stdmake_tuple"},"function std::make_tuple"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},'JSONStructStart std::make_tuple(\n    json::pair &::, "", ::REQUIRIED_FIELD ,\n    json::pair &::, "", ::REQUIRIED_FIELD ,\n    json::pair &::, "", ::REQUIRIED_FIELD \n)\n')),Object(i.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(i.b)("h3",{id:"variable-token"},"variable token"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"std::string token;\n")),Object(i.b)("h3",{id:"variable-serverid"},"variable serverID"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"Snowflake< Server > serverID;\n")),Object(i.b)("h3",{id:"variable-endpoint"},"variable endpoint"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"std::string endpoint;\n")),Object(i.b)("hr",null),Object(i.b)("p",null,"Updated on 30 April 2021 at 21:51:50 UTC"))}p.isMDXComponent=!0},364:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return v}));var n=r(0),c=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=c.a.createContext({}),p=function(e){var t=c.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,v=u["".concat(a,".").concat(b)]||u[b]||d[b]||i;return r?c.a.createElement(v,o(o({ref:t},l),{},{components:r})):c.a.createElement(v,o({ref:t},l))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var l=2;l<i;l++)a[l]=r[l];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);