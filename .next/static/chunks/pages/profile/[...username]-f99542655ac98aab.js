(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[651],{373:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/[...username]",function(){return l(3704)}])},3865:function(e,t,l){"use strict";l.d(t,{Z:function(){return s}});var i=l(5893);l(7294);function s(){return(0,i.jsx)("div",{className:"w-full relative bg-gradient-to-tr from-red-600 to-rose-700 mb-2 rounded-md py-28"})}},5886:function(e,t,l){"use strict";l.d(t,{Z:function(){return u}});var i=l(7568),s=l(655),n=l(5893),a=l(5675),r=l.n(a),d=l(1664),c=l.n(d),o=l(7294);function u(e){var t,l,a,d,u=e.data,h=e.key,x=(0,o.useState)([]),v=x[0],m=x[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,i.Z)((function(){var e;return(0,s.__generator)(this,(function(t){switch(t.label){case 0:return u?[4,fetch("https://rasmlink.ir/api-v1/youtube_channels?channel_title=".concat(null===u||void 0===u?void 0:u.video_metadata.items[0].snippet.channelTitle),{headers:{Authorization:"010486ba-0e8a-4382-a47f-d888baac5b5c"}})]:[3,3];case 1:return[4,t.sent().json()];case 2:e=t.sent(),m(e),t.label=3;case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}),[m]),(0,n.jsx)(c(),{href:"/video/"+(null===u||void 0===u?void 0:u.video_id),children:(0,n.jsx)("div",{className:"col-span-12 cursor-pointer sm:col-span-6 rounded-lg transition duration-200 pb-2 md:col-span-3 px-2",children:(0,n.jsxs)("div",{className:"w-full flex flex-col",children:[(0,n.jsx)("div",{className:"relative",children:(0,n.jsx)(c(),{href:"/video/"+(null===u||void 0===u?void 0:u.video_id),passHref:!0,children:(0,n.jsx)("div",{className:"rounded-lg",children:(0,n.jsx)(r(),{src:null===u||void 0===u?void 0:u.video_metadata.items[0].snippet.thumbnails.high.url,className:"w-96 rounded-lg dark:rounded-xl object-cover h-48",alt:"image profile",width:"370px",height:"220px"})})})}),(0,n.jsxs)("div",{className:"flex flex-row mt-2 gap-2",children:[(0,n.jsx)(c(),{href:"/profile/".concat(null===(t=v[0])||void 0===t?void 0:t.channel_id),passHref:!0,children:(0,n.jsx)("div",{className:"relative",children:(0,n.jsx)(r(),{alt:"image placeholder",src:null===(l=v[0])||void 0===l?void 0:l.channel_metadata.items[0].snippet.thumbnails.default.url,width:"50",className:"rounded-full max-h-10 w-10 h-10 object-cover max-w-10",height:"50"})})}),(0,n.jsxs)("div",{clas:"flex flex-col",style:{direction:"ltr"},children:[(0,n.jsx)(c(),{href:"/profile/".concat(null===(a=v[0])||void 0===a?void 0:a.channel_id),children:(0,n.jsx)("p",{className:"dark:text-slate-100 text-gray-800 text-xs font-",children:(null===u||void 0===u?void 0:u.video_title.length)>50?(null===u||void 0===u?void 0:u.video_title.substring(0,50))+"...":null===u||void 0===u?void 0:u.video_title})}),(0,n.jsx)(c(),{href:"/profile/"+(null===(d=v[0])||void 0===d?void 0:d.channel_id),passHref:!0,children:(0,n.jsxs)("a",{className:"dark:text-slate-300 text-gray-500 text-xs mt-2 hover:text-gray-900 capitalize",href:"#",children:[null===u||void 0===u?void 0:u.video_metadata.items[0].snippet.channelTitle," "]})}),(0,n.jsx)("div",{className:"flex items-center"})]})]})]})})},h)}},3704:function(e,t,l){"use strict";l.r(t),l.d(t,{__N_SSP:function(){return m},default:function(){return f}});var i=l(5893),s=l(6591),n=l(9008),a=l.n(n),r=l(1163),d=l(5675),c=l.n(d),o=l(5886),u=(l(7294),l(3865)),h=l(1664),x=l.n(h),v=[{title:"Recommended"},{title:"Playlist"}],m=!0;function f(e){var t=e.data,l=e.AllVideo,n=(0,r.useRouter)().query.username;return(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)(a(),{children:(0,i.jsxs)("title",{children:["profile ",null===t||void 0===t?void 0:t.channel_title," - Youtube"]})}),(0,i.jsxs)(s.Z,{withoutPadding:!0,children:[(0,i.jsx)(u.Z,{}),(0,i.jsxs)("div",{dir:"ltr",className:"bg-white/80 dark:bg-slate-900 lg:h-36 h-40 flex flex-col lg:pl-20 pt-4 pb-0",children:[(0,i.jsxs)("div",{className:"flex items-center w-full justify-between",children:[(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("div",{className:"relative",children:(0,i.jsx)(c(),{alt:"image placeholder",height:"74",width:"74",src:null===t||void 0===t?void 0:t.channel_metadata.items[0].snippet.thumbnails.high.url,className:"w-full h-full rounded-full object-cover"})}),(0,i.jsxs)("div",{className:"flex justify-center flex-col mx-5",children:[(0,i.jsx)("p",{className:"text-xl text-gray-800 font-medium dark:text-gray-100 capitalize",children:null===t||void 0===t?void 0:t.channel_title}),(0,i.jsxs)("p",{className:"text-gray-500 dark:text-slate-300 text-[12px] mt-0.5",children:[(null===t||void 0===t?void 0:t.channel_metadata.items[0].statistics.subscriberCount)+"  ","\u0645\u0634\u062a\u0631\u06a9"]})]})]}),(0,i.jsx)("div",{className:"lg:pr-10",children:(0,i.jsx)("div",{className:"relative",children:(0,i.jsx)(x(),{href:"https://www.youtube.com/channel/".concat(n[0]),children:(0,i.jsxs)("a",{target:"_blank",className:"capitalize rounded-md bg-red-600 flex justify-around items-center text-white lg:text-sm text-xs lg:px-6 px-3 lg:py-2 py-3",children:[(0,i.jsx)("span",{children:"on youtube"}),(0,i.jsxs)("svg",{className:"lg:w-6 lg:h-6 w-4 h-4 mx-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]})]})})})})]}),(0,i.jsx)("div",{className:"mx-1 h-full flex items-end space-x-8",children:v.map((function(e,t){return(0,i.jsx)("p",{className:"uppercase cursor-pointer dark:text-slate-400 text-gray-600  pb-3 text-sm ".concat(0===t&&"border-b-[2px]"," w-20 flex font-medium justify-center items-center dark:border-gray-300 border-gray-600"),children:e.title},t)}))})]}),(0,i.jsx)("div",{dir:"ltr",className:"mt-6 pl-20 pr-10 w-full pb-10 text-gray-600 dark:text-slate-300",children:l.length>0?(0,i.jsx)("div",{className:"w-full relative",children:(0,i.jsx)("div",{className:"grid grid-cols-12 gap-2 gap-y-4 w-full mt-6",children:l.map((function(e,t){return(0,i.jsx)(o.Z,{data:e},t)}))})}):(0,i.jsx)("div",{className:"p-10 w-full flex justify-between items-center text-gray-\u06f700 text-xl",children:"\u0648\u06cc\u062f\u06cc\u0648\u06cc\u06cc \u0627\u067e\u0644\u0648\u062f \u0646\u06a9\u0631\u062f\u0647 \u0627\u0633\u062a"})})]})]})}}},function(e){e.O(0,[664,387,836,591,774,888,179],(function(){return t=373,e(e.s=t);var t}));var t=e.O();_N_E=t}]);