(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47650,1005],{46384:function(e,t,n){var i=n(27040),s=n(14125),r=n(82117),o=n(67518),a=n(54705);function c(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}c.prototype.clear=i,c.prototype.delete=s,c.prototype.get=r,c.prototype.has=o,c.prototype.set=a,e.exports=c},44286:function(e){e.exports=function(e){return e.split("")}},18470:function(e,t,n){var i=n(77813);e.exports=function(e,t){for(var n=e.length;n--;)if(i(e[n][0],t))return n;return -1}},14259:function(e){e.exports=function(e,t,n){var i=-1,s=e.length;t<0&&(t=-t>s?0:s+t),(n=n>s?s:n)<0&&(n+=s),s=t>n?0:n-t>>>0,t>>>=0;for(var r=Array(s);++i<s;)r[i]=e[i+t];return r}},40180:function(e,t,n){var i=n(14259);e.exports=function(e,t,n){var s=e.length;return n=void 0===n?s:n,!t&&n>=s?e:i(e,t,n)}},98805:function(e,t,n){var i=n(40180),s=n(62689),r=n(83140),o=n(79833);e.exports=function(e){return function(t){var n=s(t=o(t))?r(t):void 0,a=n?n[0]:t.charAt(0),c=n?i(n,1).join(""):t.slice(1);return a[e]()+c}}},31957:function(e,t,n){var i="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=i},58234:function(e,t,n){var i=n(5569)(Object.keys,Object);e.exports=i},62689:function(e){var t=RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return t.test(e)}},27040:function(e){e.exports=function(){this.__data__=[],this.size=0}},14125:function(e,t,n){var i=n(18470),s=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=i(t,e);return!(n<0)&&(n==t.length-1?t.pop():s.call(t,n,1),--this.size,!0)}},82117:function(e,t,n){var i=n(18470);e.exports=function(e){var t=this.__data__,n=i(t,e);return n<0?void 0:t[n][1]}},67518:function(e,t,n){var i=n(18470);e.exports=function(e){return i(this.__data__,e)>-1}},54705:function(e,t,n){var i=n(18470);e.exports=function(e,t){var n=this.__data__,s=i(n,e);return s<0?(++this.size,n.push([e,t])):n[s][1]=t,this}},55639:function(e,t,n){var i=n(31957),s="object"==typeof self&&self&&self.Object===Object&&self,r=i||s||Function("return this")();e.exports=r},83140:function(e,t,n){var i=n(44286),s=n(62689),r=n(676);e.exports=function(e){return s(e)?r(e):i(e)}},676:function(e){var t="\ud800-\udfff",n="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",i="\ud83c[\udffb-\udfff]",s="[^"+t+"]",r="(?:\ud83c[\udde6-\uddff]){2}",o="[\ud800-\udbff][\udc00-\udfff]",a="(?:"+n+"|"+i+")?",c="[\\ufe0e\\ufe0f]?",u="(?:\\u200d(?:"+[s,r,o].join("|")+")"+c+a+")*",l=RegExp(i+"(?="+i+")|(?:"+[s+n+"?",n,r,o,"["+t+"]"].join("|")+")"+(c+a+u),"g");e.exports=function(e){return e.match(l)||[]}},48403:function(e,t,n){var i=n(79833),s=n(11700);e.exports=function(e){return s(i(e).toLowerCase())}},77813:function(e){e.exports=function(e,t){return e===t||e!=e&&t!=t}},6557:function(e){e.exports=function(e){return e}},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3674:function(e,t,n){var i=n(5569)(Object.keys,Object);e.exports=i},79833:function(e){e.exports=function(e){return e}},11700:function(e,t,n){var i=n(98805)("toUpperCase");e.exports=i},81272:function(e,t,n){"use strict";n.d(t,{I:function(){return C}});var i=n(26042),s=n(99534),r=n(85893),o=n(12608),a=n(70179),c=n(24128),u=n(39122),l=n(79235),d=n(95298),p=n(72957),f=n(33340),m=n(38334),v=n(54090),g=n(98231),h="".concat(l.jeg," - similarImages"),b="".concat(l.jeg," - sameModel"),S="".concat(l.jeg," - moreFromThisArtist"),_="".concat(l.jeg," - sameCollection"),x="".concat(l.jeg," - similarVideoClips"),y=(0,o.ZL)()(function(e){return{bold:{"&&":{fontWeight:e.tokens.fontWeight.bold}}}}),C=function(e){var t=e.asset,n=e.collectionId,o=e.collectionItems,C=e.labels,A=e.sameModel,I=e.showSimilarVideos,T=e.sameArtistAssets,w=e.visuallySimilar,j=e.visuallySimilarMaxRows,L=e.visuallySimilarVideos,Z=e.withInlineCta,P=(0,s.Z)(e,["asset","collectionId","collectionItems","labels","sameModel","showSimilarVideos","sameArtistAssets","visuallySimilar","visuallySimilarMaxRows","visuallySimilarVideos","withInlineCta"]),O=t.id,k=t.contributor,z=t.releases,D=t.channels,E=y(),M=E.classes,F=E.cx,V=(0,g.bo)().classes,R=C.assetsFromSameCollection,N=C.containedInCollectionsTitle,U=C.relatedSectionButton,B=C.visuallySimilarVideosTitle,G=(0,m.pB)(O),q=(0,m.hf)({ids:z&&z.join(","),imageId:O}),H=(0,v.wo)({contributor:k,id:n}),K=(0,p.PD)({channels:D});return(0,r.jsxs)(r.Fragment,{children:[!K&&(0,r.jsx)(f.Mp,{value:h,children:(0,r.jsx)(d.k,(0,i.Z)({assets:w,listId:l.xrF,buttonLabel:C.relatedSectionButton,pathProps:G,title:C.visuallySimilarTitle,maxRows:j,withInlineCta:Z},P))}),(0,r.jsx)(f.Mp,{value:_,children:(0,r.jsx)(a.Z,(0,i.Z)({title:Z?R:(0,r.jsxs)(r.Fragment,{children:[N.preLinkLabel,(0,r.jsx)(u.r,{className:F(V.buttonAnchor,M.bold),href:H[0],linkAs:H[1],underline:!0,children:N.linkLabel}),N.postLinkLabel]}),pathProps:H,assets:o,listId:l.JG2,buttonLabel:U,withInlineCta:Z},P))}),(0,r.jsx)(f.Mp,{value:b,children:(0,r.jsx)(a.Z,(0,i.Z)({assets:A,listId:l.WQA,buttonLabel:C.relatedSectionButton,pathProps:q,title:C.sameModelTitle,withInlineCta:Z},P))}),(0,r.jsx)(f.Mp,{value:S,children:(0,r.jsx)(c.Y,(0,i.Z)({asset:t,listId:l.Ht8,collectionId:n,buttonLabel:C.relatedSectionButton,sameArtistAssets:T,title:C.sameArtistAssetsTitle,withInlineCta:Z},P))}),I&&(0,r.jsx)(f.Mp,{value:x,children:(0,r.jsx)(a.Z,(0,i.Z)({assets:L,listId:l.GHs,title:B,withInlineCta:Z,showAssetTypeIcon:!0},P))})]})};C.defaultProps={asset:{},collectionId:"",collectionItems:[],labels:{},sameArtistAssets:[],sameModel:[],showSimilarVideos:!1,visuallySimilar:[],visuallySimilarMaxRows:2,visuallySimilarVideos:[],withInlineCta:!1}},24128:function(e,t,n){"use strict";n.d(t,{Y:function(){return l}});var i=n(26042),s=n(99534),r=n(85893),o=n(67294),a=n(72957),c=n(54090),u=n(70179),l=function(e){var t=e.asset,n=e.collectionId,l=e.sameArtistAssets,d=e.withInlineCta,p=(0,s.Z)(e,["asset","collectionId","sameArtistAssets","withInlineCta"]),f=t.contributor,m=t.keywords,v=(0,a.OP)({asset:t}),g=(0,a.Tp)(t);(0,o.useMemo)(function(){return(0,a.cv)({assetGroups:[l]})},[l]);var h=(0,o.useMemo)(function(){return l.filter(function(e){return(0,a.OP)({asset:e})!==v})},[v,l]),b=(0,c.wo)((0,i.Z)({contributor:f,id:n,subPage:g},(null==m?void 0:m.length)?{query:{searchterm:m[0]}}:{}));return(0,r.jsx)(u.Z,(0,i.Z)({assets:h,pathProps:b,showAssetTypeIcon:!0,withInlineCta:d},p))};l.defaultProps={asset:{},sameArtistAssets:[],withInlineCta:!1}},74906:function(e,t,n){"use strict";n.d(t,{$:function(){return u}});var i=n(26042),s=n(99534),r=n(85893),o=n(19318),a=function(e){var t=e.error,n=e.pageHandledStatusCode,a=e.statusCode,c=e.Component,u=(0,s.Z)(e,["error","pageHandledStatusCode","statusCode","Component"]);return a&&!n?(0,r.jsx)(o.F,{error:t,statusCode:parseInt(a,10),withSearchBar:!0}):(0,r.jsx)(c,(0,i.Z)({},u))},c=Error("Return the error in the getServerSideProps to get root cause in lower environments.");a.defaultProps={error:c,statusCode:null};var u=function(e){return function(t){return(0,r.jsx)(a,(0,i.Z)({Component:e},t))}}},1005:function(e,t,n){"use strict";n.d(t,{r:function(){return Z}});var i=n(47568),s=n(10253),r=n(70655),o=n(67294),a=n(39224),c=n(27407),u=n(75379),l=n(44512),d=n(55210),p=n(85893),f=n(26042),m=n(99534),v=n(5152),g=n.n(v),h=n(9439),b=g()(function(){return Promise.all([n.e(49990),n.e(12453),n.e(42422),n.e(76308),n.e(44309),n.e(65702),n.e(85123)]).then(n.bind(n,59695)).then(function(e){return e.CompLicensingDialog})},{loadableGenerated:{webpack:function(){return[59695]}},ssr:!1}),S=function(e){var t=e.isOpen,n=(0,m.Z)(e,["isOpen"]);return(0,h.B)(t)&&(0,p.jsx)(b,(0,f.Z)({isOpen:t},n))},_=g()(function(){return Promise.all([n.e(49990),n.e(77918),n.e(41664),n.e(99964),n.e(95551),n.e(76826),n.e(21023),n.e(58826),n.e(78755),n.e(64926),n.e(20762),n.e(44727),n.e(18055),n.e(32685)]).then(n.bind(n,48034)).then(function(e){return e.CompLicensingDrawer})},{loadableGenerated:{webpack:function(){return[48034]}},ssr:!1}),x=function(e){var t=e.isOpen,n=(0,m.Z)(e,["isOpen"]);return(0,h.B)(t)&&(0,p.jsx)(_,(0,f.Z)({isOpen:t},n))},y=g()(function(){return n.e(39701).then(n.bind(n,39701)).then(function(e){return e.CompLicensingSnackbar})},{loadableGenerated:{webpack:function(){return[39701]}},ssr:!1}),C=function(e){var t=e.isOpen,n=(0,m.Z)(e,["isOpen"]);return(0,h.B)(t)&&(0,p.jsx)(y,(0,f.Z)({isOpen:t},n))},A=n(76395),I=n(64864),T=n(96360),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.licensingError,n=(0,A.$G)(T.clK).t;return{cancel:n("common:actions_cancel"),downloadComp:n("common:actions_download_comp"),enterpriseCompLicense:n("ent:license_enterprise_comp"),genericErrorMessage:n("ent:license_now_error_message"),licensingError:(0,I.j2)({error:void 0===t?{}:t,t:n}),licenseSuccess:n("ent:confirmation_alert_message"),licenseFormLabels:{buttonLabel:n("common:actions_download_comp"),disclaimer:(0,p.jsx)(A.cC,{i18nKey:"ent:comp_disclaimer",ns:T.clK,components:{bold:(0,p.jsx)("strong",{})}}),addMetadataToAsset:n("ent:add_metadata_to_asset_comp"),metadataFound:n("ent:previous_metadata_found_comp"),metadataMissing:n("ent:previous_metadata_missing_comp"),title:n("ent:add_metadata_to_comp")}}},j=function(e){var t=e.assets,n=e.compLicensingHandler,i=e.isDialogOpen,s=e.isDrawerOpen,r=e.isLicensing,o=e.isSnackBarOpen,a=e.licensingError,c=e.onDialogClose,u=e.onDrawerClose,l=e.onSnackbarClose,d=e.selectedAssetSize,f=e.setSelectedAssetSize,m=e.settingsData,v=w({licensingError:a});return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(S,{assets:t,isOpen:i,onClose:c,onLicense:n,labels:v,isLicensing:r,selectedAssetSize:d,setSelectedAssetSize:f,settingsData:m}),(0,p.jsx)(x,{assets:t,isLicensing:r,isOpen:s,labels:v,onClose:u,onLicense:n,selectedAssetSize:d}),(0,p.jsx)(C,{isOpen:o,message:v.licensingError,onClose:l})]})};j.defaultProps={assets:null,isDialogOpen:!1,isDrawerOpen:!1,isLicensing:!1,isSnackBarOpen:!1,licensingError:{},selectedAssetSize:"",settingsData:{}};var L=n(45206),Z=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},p=n.allowMetadata,f=void 0===p||p,m=(0,s.Z)((0,o.useState)(null),2),v=m[0],g=m[1],h=(0,s.Z)((0,o.useState)(""),2),b=h[0],S=h[1],_=(0,s.Z)((0,o.useState)(""),2),x=_[0],y=_[1],C=(0,s.Z)((0,o.useState)(!1),2),A=C[0],I=C[1],T=(0,s.Z)((0,o.useState)(!1),2),w=T[0],Z=T[1],P=(0,s.Z)((0,o.useState)(!1),2),O=P[0],k=P[1],z=(0,u.Zo)(),D=z.isLicensing,E=z.licensingError,M=z.licensingStatus,F=z.setLicensingStatus,V=z.licensingAssetsHandler,R=(0,c.U)(),N=(0,d.B)().data,U=(0,l.h)(N),B=(0,o.useCallback)((e=(0,i.Z)(function(e){var t,n,i,s,o,a,c,u,l,d,p,f;return(0,r.__generator)(this,function(r){switch(r.label){case 0:n=void 0===(t=e.assets)?[]:t,i=e.assetSize,s=e.eventLabel,o=e.format,a=e.metadata,c=e.pageSection,u=e.listId,S(n[0].id),l=!1,r.label=1;case 1:return r.trys.push([1,6,,7]),[4,(0,L.qP)({assets:n,assetSize:i,format:o,metadata:a,selectedAssetSize:x})];case 2:return[4,V(r.sent())];case 3:if(d=r.sent().data,(0,L.bj)(n)&&1===n.length)return[3,5];return f=(0,L.aT)(n)?U:void 0,[4,(0,L.tX)({assets:n,compSize:f,licensedContent:null==d?void 0:null===(p=d.meta)||void 0===p?void 0:p.licensedContent})];case 4:r.sent(),R({assets:n,eventLabel:s,isRedownload:!1,isQuickDownload:!1,isPaid:!1,isComp:!0,pageSection:c,listId:u}),r.label=5;case 5:return[3,7];case 6:return l=r.sent(),[3,7];case 7:return S(""),l&&!w&&k(!0),[2,{error:l}]}})}),function(t){return e.apply(this,arguments)}),[w,U,V,R,x]),G=(0,o.useCallback)((t=(0,i.Z)(function(e){var t,n,i,s,o,c,u;return(0,r.__generator)(this,function(r){return(t=e.assets,n=e.assetSize,i=e.format,s=e.eventLabel,o=e.metadata,c=e.pageSection,u=e.listId,g(t),F(""),!A&&(0,a.U0)(t))?(I(!0),[2,Promise.resolve(null)]):!w&&(null==N?void 0:N.requireMetadataForComp)&&!o&&f?(n&&y(n),Z(!0),[2,Promise.resolve(null)]):[2,B({assets:t,assetSize:n,eventLabel:s,format:i,metadata:o,pageSection:c,listId:u})]})}),function(e){return t.apply(this,arguments)}),[f,B,A,w,N,F]),q=(0,o.useMemo)(function(){return{assets:v,compLicensingHandler:G,compLicensingRequest:B,isDialogOpen:A,isDrawerOpen:w,isLicensing:D,isSnackBarOpen:O,licensingError:E,onDialogClose:function(){return I(!1)},onDrawerClose:function(){return Z(!1)},onSnackbarClose:function(){return k(!1)},selectedAssetSize:x,setSelectedAssetSize:y,settingsData:N}},[v,G,B,A,w,D,O,E,x,N]);return{assetsToLicense:v,compLicensingHandler:G,compLicensingProps:q,CompLicensingViews:j,licensingAssetId:b,licensingStatus:M}}},45206:function(e,t,n){"use strict";n.d(t,{SN:function(){return x},aT:function(){return w},bj:function(){return T},qP:function(){return I},tX:function(){return y}});var i,s,r,o,a=n(47568),c=n(14924),u=n(26042),l=n(69396),d=n(70655),p=n(73915),f=n(85672),m=n(70056),v=n(19576),g=n(2490),h=n(95624),b=n(72957),S=n(71394),_=n(75957),x=(i=(0,a.Z)(function(e){var t,n,i,s,r,o,a,c,u,l,p,m,v,h,S,x;return(0,d.__generator)(this,function(d){switch(d.label){case 0:if(t=e.assets,n=e.compSize,i=e.licensedContent,s=e.supplementalUrlType,o=(r=i[0]||{}).downloadUrl,a=r.contentId,c=r.contentFormat,u=r.contentSize,(null==(l=r.supplementalUrls)?void 0:l.length)&&s)return[2,void 0===(p=(l.find(function(e){return e.type===s})||{}).url)?o:p];if(m=t.find(function(e){return e.id===a})||{},v=(0,b.Tp)(m),S=(h=(0,g.G)({assets:t,contentId:a})).filename,!h.shouldUpdateFilename)return[3,4];d.label=1;case 1:return d.trys.push([1,3,,4]),[4,_.uS.post((0,f.u8)().formattedUrl,{data:[{media_id:m.id,media_type:v,comp_size:n,media_size:u,media_format:c,filename:S}]})];case 2:return[2,((null==(x=d.sent().data)?void 0:x.data[0])||{}).attributes.url||o];case 3:return d.sent(),[2,o];case 4:return[2,o]}})}),function(e){return i.apply(this,arguments)}),y=(s=(0,a.Z)(function(e){var t,n,i,s,r,o,a,c,u,l;return(0,d.__generator)(this,function(d){switch(d.label){case 0:if(n=void 0===(t=e.assets)?[]:t,i=e.compSize,s=e.assetSize,!((o=void 0===(r=e.licensedContent)?[]:r).length>1))return[3,2];return a=(0,g.r)({assets:n,licensedContent:o}),c=(0,p.e)({urlParams:{filename:a.bundleFilename}}).formattedUrl,[4,_.jl.post(c,a.content)];case 1:return u=d.sent().data.public_url,[2,(0,S.A_)(u)];case 2:return[4,x({assets:n,compSize:i,assetSize:s,licensedContent:o})];case 3:return l=d.sent(),[2,(0,S.A_)(l)]}})}),function(e){return s.apply(this,arguments)}),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map(function(e){var t=(0,h.Fy)({asset:e});return(0,l.Z)((0,u.Z)({},e),{assetType:t,licenseId:v._rW[t]})})},A=(r=(0,a.Z)(function(){var e;return(0,d.__generator)(this,function(t){switch(t.label){case 0:e=(0,f.d0)().url,t.label=1;case 1:return t.trys.push([1,3,,4]),[4,_.uS.get(e).then(function(e){return null==e?void 0:e.data})];case 2:return[2,t.sent().reduce(function(e,t){return(0,l.Z)((0,u.Z)({},e),(0,c.Z)({},t.name,"-"))},{})];case 3:return t.sent(),[2,{}];case 4:return[2]}})}),function(){return r.apply(this,arguments)}),I=(o=(0,a.Z)(function(){var e,t,n,i,s,r,o,a=arguments;return(0,d.__generator)(this,function(c){switch(c.label){case 0:if(t=(e=a.length>0&&void 0!==a[0]?a[0]:{}).assets,n=e.assetSize,i=e.format,s=e.metadata,r=e.selectedAssetSize,o=s)return[3,2];return[4,A()];case 1:o=c.sent(),c.label=2;case 2:return[2,{assets:C(t),format:i||"",licenseMetadata:o,licensingType:v.dWU,selectedAssetSize:n||r||"",isVideoComp:!0}]}})}),function(){return o.apply(this,arguments)}),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(0,h.qw)({asset:e[0]||{}})===m.j0},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[m.pV,m.k4,m.ox].includes((0,h.qw)({asset:e[0]||{}}))}},2490:function(e,t,n){"use strict";n.d(t,{G:function(){return c},r:function(){return u}});var i=n(72957),s=n(29489),r="shutterstock",o="shutterstock_editorial",a=function(e){var t=e.asset;return(0,i.PD)(t)?{prefix:"shutterstock_offset",shouldUpdateFilename:!0}:(0,i.tS)({asset:t})?{prefix:o,shouldUpdateFilename:!1}:{prefix:r,shouldUpdateFilename:!1}},c=function(e){var t=e.assets,n=e.contentId,i=a({asset:t.find(function(e){return e.id===n})||{}}),s=i.prefix,r=i.shouldUpdateFilename;return{filename:"".concat(s,"_").concat(n),shouldUpdateFilename:r}},u=function(e){var t=e.assets,n=void 0===t?[]:t,a=e.licensedContent,u=n.every(function(e){return(0,i.tS)({asset:e})}),l=(void 0===a?[]:a).map(function(e){var t=e.contentId,i=e.downloadUrl,s=e.contentFormat,r=c({assets:n,contentId:t}).filename,o=i.split("/").pop().split(".").pop();return(o.length>4||o.length<2)&&(o=s),{filename:"".concat(r,".").concat(o),url:i}}),d=(0,s.zs)();return{bundleFilename:"".concat(u?o:r,"_").concat(d,".zip"),content:l}}},63651:function(e,t,n){"use strict";n.d(t,{S:function(){return o}});var i=n(14924),s=n(26042),r=n(86109),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.trackingId,n=e.headers,o=void 0===n?{}:n;if(t||Object.keys(o).length)return{headers:(0,s.Z)({},o,t&&(0,i.Z)({},r.HC,t))}}},64319:function(e,t,n){"use strict";n.d(t,{H:function(){return s}});var i=n(44419),s=function(e){var t,n=e.user;return null==n?void 0:null===(t=n.roles)||void 0===t?void 0:t.includes(i.qy)}},40814:function(e,t,n){"use strict";n.d(t,{q:function(){return r}});var i=n(70056),s=n(72957),r=function(e){var t=e.assets,n=void 0===t?[]:t;return(0,s.N3)(null==n?void 0:n[0])?i.nX:(0,s.so)(null==n?void 0:n[0])?i.A7:(0,s.vV)(null==n?void 0:n[0])?i.ox:(0,s.Tp)(null==n?void 0:n[0])}},13925:function(e,t,n){"use strict";n.d(t,{A:function(){return r}});var i=n(70056),s=n(53436),r=function(e){var t=e.assetType,n=e.contentTier,r=void 0===n?0:n,o=e.subscriptions;if(!o||!t)return{};switch(t){case i.nX:return{compSubscriptions:o.editorialImageCompSubscriptions,subscriptions:(0,s.c)({assetType:t,subscriptions:o.editorialImageSubscriptions,contentTier:r})};case i.A7:return{compSubscriptions:o.editorialVideoCompSubscriptions,subscriptions:(0,s.c)({assetType:t,subscriptions:o.editorialVideoSubscriptions,contentTier:r})};case i.pX:return{compSubscriptions:o.videoCompSubscriptions,subscriptions:(0,s.c)({assetType:t,subscriptions:o.videoSubscriptions,contentTier:r})};case i.xF:case i.j0:return{compSubscriptions:o.musicCompSubscriptions,subscriptions:(0,s.c)({assetType:t,subscriptions:o.musicSubscriptions,contentTier:r})};case i.tn:return{compSubscriptions:o.sfxCompSubscriptions,subscriptions:(0,s.c)({assetType:t,subscriptions:o.sfxSubscriptions,contentTier:r})};case i.k4:default:return{compSubscriptions:o.imageCompSubscriptions,subscriptions:(0,s.c)({assetType:t,subscriptions:o.imageSubscriptions,contentTier:r})}}}},53436:function(e,t,n){"use strict";n.d(t,{c:function(){return c}});var i=n(36305),s=n(93056),r=n(55050),o=function(e){var t=e.item;return e.uniqueSubsAcc.find(function(e){var n=e.redeemableFor,i=e.name;return t.redeemableFor===n||t.name&&t.name===i})},a=function(e){var t=e.subscriptionToUse,n=e.licenseName,i=null==t?void 0:t.currentLicenses;return!!i&&i.length&&!(null==i?void 0:i.find(function(e){return e.redeemableFor===(null==n?void 0:n.replace("/_unlimited/",""))}))},c=function(e){var t,n=e.subscriptions,c=void 0===n?[]:n,u=e.contentTier,l=e.assetType;return(t=c.reduce(function(e,t){var n=t.redeemableFor||t.name,s=(0,r.$)({subscriptions:c,licenseName:n,contentTier:u,assetType:l});return!s||a({subscriptionToUse:s,licenseName:n})||o({item:t,uniqueSubsAcc:e})?e:(0,i.Z)(e).concat([s])},[])).every(function(e){var t=e.activityTracking,n=e.creditType,i=e.priceAsAbsolute;return t===s.nm&&n===s.vh&&!!i})?t.sort(function(e,t){var n=e.priceAsAbsolute,i=(void 0===n?{}:n).price,s=t.priceAsAbsolute,r=(void 0===s?{}:s).price;return(void 0===r?0:r)-(void 0===i?0:i)}):t.sort(function(e,t){return t.creditPrice-e.creditPrice})}},41429:function(e,t,n){"use strict";n.d(t,{T:function(){return c}});var i=n(31955),s=n(96056),r=n(40069),o=n(19805),a=n(66978),c=function(){var e=(0,o.B)(),t=(0,a.p)(r.mP),n=i.Z.get(s.fh);t&&e&&"true"!==n?i.Z.set(s.fh,"true"):!1!==t&&e||"true"!==n||i.Z.set(s.fh,"false")}},99948:function(e,t,n){"use strict";n.d(t,{P:function(){return v}});var i=n(26042),s=n(69396),r=n(10253),o=n(11752),a=n.n(o),c=n(40821),u=n(85672),l=n(96352),d=n(78673),p=n(72957),f=n(14587),m=a()().publicRuntimeConfig.apiEndpoints.studioapi,v=function(e){var t=e.asset.id,n=e.relatedAssetsKey,o=(0,d.PE)().locale,a=n===l.om.VISUALLY_SIMILAR,v=n===l.om.RELATED_VIDEO,g=n===l.om.SAME_MODEL,h=n===l.om.IMAGE_COLLECTION,b={imageId:t,include:"categories,contributor.categories,contained-in-collections.categories,same-model.categories,same-artist.categories,visually-similar.categories,visually-similar-videos.categories,image-scores,contributor-settings","page[contained-in-collections][size]":l.SG,"page[contained-in-collections-items][size]":l.Jf,"page[visually-similar][size]":a?l.Dv-l.VN:l.Dv,"page[visually-similar-videos][size]":l.Kd,"page[same-model][offset]":g?l.VN:0,"page[visually-similar-videos][offset]":v?l.VN:0,"page[visually-similar][offset]":a?l.VN:0,language:o,recordActivity:!0},S=(0,u.gJ)({queryParams:b}).formattedUrl,_=function(e){var t=e.containedInCollections,n=void 0===t?[]:t,o=(0,r.Z)(n,1)[0],a=(void 0===o?{}:o).meta,c=(void 0===a?{}:a).items;return(0,p.cv)({assetGroups:[null==e?void 0:e.visuallySimilarVideos]}),(0,s.Z)((0,i.Z)({},e),{containedInCollections:n.length?(0,s.Z)((0,i.Z)({},n[0]),{meta:{items:h?c.slice(0,l.VN+1):c}}):{}})};return{asset:(0,c.ZP)(S,function(e){return fetch("".concat(m).concat(e),{credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return(0,f.O)(e.data)}).then(function(e){return _(e)})})}}},36038:function(e,t,n){"use strict";n.d(t,{P:function(){return f},o:function(){return p}});var i=n(14924),s=n(76395),r=n(67294),o=n(70056),a=n(93056),c=n(78673),u=n(96360),l=function(e){var t=e.t,n=e.price;return{compCredits:t("comp_credits",{PRICE:n}),credit:t(["1",1].includes(n)?"credit":"credits",{PRICE:n}),licenseCredits:t("license_credits",{PRICE:n}),unavailable:t("ent:unavailable"),unlimited:t("ent:unlimited")}},d=function(e){var t,n=e.labels,s=void 0===n?{}:n;return t={},(0,i.Z)(t,a.vh,s.credit),(0,i.Z)(t,a.un,s.compCredits),(0,i.Z)(t,a.eM,s.licenseCredits),t},p=function(){var e=(0,c.PE)(),t=e.fullLocale,n=e.currencyData,i=(void 0===n?{}:n).currency,p=void 0===i?"USD":i,f=(0,s.$G)(u.Pkf).t;return(0,r.useCallback)(function(e){var n=e.price,i=e.localeCurrencyOverride,s=e.priceType,r=void 0===s?a.Br:s,c=e.fixedFractionDigits,u=l({t:f,price:n});if(n===o.nZ)return u.unavailable;if(n===o.q9)return u.unlimited;var m=d({labels:u}),v=null==m?void 0:m[r];return v||new Intl.NumberFormat(t,{style:"currency",currency:(void 0===i?"":i)||p,minimumFractionDigits:null!=c?c:n%1==0?0:2}).format(n)},[p,t,f])},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.Br;return p()({price:e,localeCurrencyOverride:t,priceType:n})}},44512:function(e,t,n){"use strict";n.d(t,{h:function(){return r}});var i=n(64319),s=n(19805),r=function(e){var t=(0,s.j)().data;return(0,i.H)({user:t})?null==e?void 0:e.compSizeImage:null==e?void 0:e.compSizeSubImage}},53547:function(e,t,n){"use strict";n.d(t,{GB:function(){return c}});var i=n(76395),s=n(67294),r=n(96360),o=n(48497),a="ent:license_",c=function(){var e=(0,i.$G)(r.PRh).t,t=(0,o.D)().isBrandSstk;return(0,s.useCallback)(function(){var n,i,s,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=r.licenseName,c=r.subscription;return(o&&(n="".concat(a).concat(null==o?void 0:o.replace(/_unlimited/,""))),c&&(t&&(n="".concat("ecomm:license_").concat(null===(i=c.product)||void 0===i?void 0:i.name)),!t&&c.redeemableFor&&(n="".concat(a).concat(null===(s=c.redeemableFor)||void 0===s?void 0:s.replace(/_unlimited/,"")))),n)?e(n):""},[t,e])}},12086:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return D}});var i=n(26042),s=n(69396),r=n(85893),o=n(5152),a=n.n(o),c=n(11163),u=n(76395),l=n(67294),d=n(32859),p=n(81272),f=n(88560),m=n(74906),v=n(79235),g=n(40069),h=n(16010),b=n(95020),S=n(90909),_=n(72957),x=n(41429),y=n(64013),C=n(99948),A=n(19805),I=n(66978),T=n(20896),w=n(38334),j=n(96360),L=n(64962),Z=n(65947),P=a()(function(){return Promise.all([n.e(44727),n.e(18055),n.e(51024)]).then(n.bind(n,40898)).then(function(e){return e.PersonalizedImages})},{loadableGenerated:{webpack:function(){return[40898]}},ssr:!1,loading:f.z}),O=function(e){var t=e.t,n=e.collectionTitle,i=e.contributorName,s=e.description,r=e.id,o=e.imageType;return{assetsFromSameCollection:t("assets_same_collection"),relatedKeywordsTitle:t("image:idp_keywords_title"),visuallySimilarTitle:t("image:similar_images_title"),containedInCollectionsTitle:(0,Z.v)(t,"image:contained_in_collection_title",{CONTRIBUTOR:i,COLLECTION_TITLE:n}),visuallySimilarVideosTitle:t("image:similar_videos_title"),sameModelTitle:t("image:same_model_title"),sameArtistAssetsTitle:t("image:same_artist_title"),relatedSectionButton:t("common:actions_see_all"),metaTitle:t("image:seo_title_".concat(o),{DESCRIPTION:s,ASSET_ID:r}),metaDescription:t("image:search_meta_description",{SEARCH_TERM:s}),rotation3dInfo:t("image:3d_rotate_info")}},k=function(e){var t=e.asset,n=e.relatedAssets,o=e.relatedAssetsToUse,a=e.relatedAssetsKey,m=e.relatedAssetsPathProps,v=e.remainingRelatedAssets,T=e.schemas,Z=e.canOpenDrawerOnLoad,k=t.containedInCollections,z=void 0===k?{}:k,D=z.title,E=z.id,M=z.meta,F=(void 0===M?{}:M).items,V=t.contributor,R=t.id,N=t.imageType;(0,y.P)({asset:t}),(0,x.T)();var U=(0,c.useRouter)().locale,B=(0,l.useRef)({}),G=(0,u.$G)(j.Cgc).t,q=(0,b.G)({asset:t,language:U}),H=(0,L.gL)(q,U,t.descriptionLanguageMap),K=(0,A.B)(),$=(0,I.p)(g.oV,!1,!1,!1),W=(0,S._N)({contributor:V}).name,X=(0,l.useMemo)(function(){return O({t:G,contributorName:W,collectionTitle:D,description:H,id:R,imageType:N})},[G,W,D,H,R,N]),J=(0,C.P)({asset:t,relatedAssetsKey:a}).data,Y=void 0===J?t:J,Q=Y.sameModel,ee=Y.sameArtist,et=Y.visuallySimilar,en=Y.visuallySimilarVideos,ei=!!((null==Q?void 0:Q.length)||(null==ee?void 0:ee.length)>1||(null==et?void 0:et.length)||(null==en?void 0:en.length))&&!(0,_.PD)(t),es=(0,l.useMemo)(function(){return!(0,_.k7)(Y)&&(0,r.jsxs)(r.Fragment,{children:[K&&$&&(0,r.jsx)(P,{asset:Y}),ei&&(0,r.jsx)(p.I,{asset:Y,collectionId:E,collectionItems:F===n?v:F,gridSpacing:4,labels:X,sameArtistAssets:ee,sameModel:Q,showSimilarVideos:!0,visuallySimilar:et,visuallySimilarMaxRows:2,visuallySimilarVideos:en,withInlineCta:!0})]})},[Y,E,F,K,$,X,n,v,ee,Q,ei,et,en]);return(0,r.jsx)(h.j.Provider,{value:B,children:(0,r.jsx)(d.O,(0,s.Z)((0,i.Z)({},e),{canOpenDrawerOnLoad:Z,getSearchTermPathProps:w.J1,RelatedSections:es,RelatedSectionsSkeleton:ei?f.z:function(){return null},relatedAssetsToUse:o,relatedAssetsPathProps:m,schemas:T,translatedLabels:X,translationNameSpace:j.Cgc}))})},z=(0,m.$)(k);k.defaultProps={asset:{containedInCollections:{metaItems:[],title:""},sameArtist:[],sameModel:[],visuallySimilar:[],visuallySimilarVideos:[]},relatedAssets:[],relatedAssetsKey:"",relatedAssetsPathProps:["",""],relatedAssetsToUse:[],schemas:[],canOpenDrawerOnLoad:!1},k.defaultProps=z.defaultProps,z.analyticsData={pageType:v.ghx},z.layout={type:T.t};var D=!0;t.default=z},37163:function(e,t,n){"use strict";n.d(t,{k:function(){return i}});var i=function(e){return e&&"string"==typeof e?"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)):""}},65947:function(e,t,n){"use strict";n.d(t,{v:function(){return o}});var i=n(26042),s=n(10253),r=":TOKEN;",o=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=e(t,(0,i.Z)({OPEN_TAG:r,CLOSE_TAG:r},n)),a=(0,s.Z)(o.split(r),3);return{preLinkLabel:a[0],linkLabel:a[1],postLinkLabel:a[2]}}},53554:function(e){var t="[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+",n="\\x5c[\\x00-\\x7f]",i="("+t+"|\\x5b([^\\x0d\\x5b-\\x5d\\x80-\\xff]|"+n+")*\\x5d)",s="("+t+"|\\x22([^\\x0d\\x22\\x5c\\x80-\\xff]|"+n+")*\\x22)";e.exports=s+"(\\x2e"+s+")*\\x40"+i+"(\\x2e"+i+")+"}}]);
//# sourceMappingURL=47650-7f9794cb9c053949.js.map