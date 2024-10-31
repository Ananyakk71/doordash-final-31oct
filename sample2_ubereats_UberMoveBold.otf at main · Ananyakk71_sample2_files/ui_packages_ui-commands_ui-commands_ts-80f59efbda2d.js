"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_ui-commands_ui-commands_ts"],{12480:(e,t,n)=>{n.d(t,{U0:()=>a});var i=n(97156);let r={Android:"Android",iOS:"iOS",macOS:"macOS",Windows:"Windows",Linux:"Linux",Unknown:"Unknown"};function a(){return function(){let e=r.Unknown,t=!1;if(i.cg){let n=i.cg.navigator,a=n.userAgent,s=n?.userAgentData?.platform||n.platform;-1!==["Macintosh","MacIntel","MacPPC","Mac68K","macOS"].indexOf(s)?e=r.macOS:-1!==["iPhone","iPad","iPod"].indexOf(s)?e=r.iOS:-1!==["Win32","Win64","Windows","WinCE"].indexOf(s)?e=r.Windows:/Android/.test(a)?e=r.Android:/Linux/.test(s)&&(e=r.Linux),t=n?.userAgentData?.mobile??(e===r.Android||e===r.iOS)}return{os:e,isAndroid:e===r.Android,isIOS:e===r.iOS,isMacOS:e===r.macOS,isWindows:e===r.Windows,isLinux:e===r.Linux,isDesktop:e===r.macOS||e===r.Windows||e===r.Linux,isMobile:t}}().isMacOS}},18558:(e,t,n)=>{n.d(t,{JC:()=>i.JC,KK:()=>i.KK,SK:()=>a,Vy:()=>i.Vy,ai:()=>i.ai,oc:()=>i.oc,rd:()=>i.rd});var i=n(50515);let r=/(?:^|,)((?:[^,]|,(?=\+| |$))*(?:,(?=,))?)/g;function a(e){return Array.from(e.matchAll(r)).map(([,e])=>e)}},98164:(e,t,n)=>{n.d(t,{$$:()=>o,GI:()=>a,zw:()=>r});var i=n(18558);let r=()=>{let e=document.querySelector("meta[name=keyboard-shortcuts-preference]");return!e||"all"===e.content},a=e=>/Enter|Arrow|Escape|Meta|Control|Mod|Esc/.test(e)||e.includes("Alt")&&e.includes("Shift"),s=new Set(["button","checkbox","color","file","hidden","image","radio","range","reset","submit"]),o=e=>{let t=(0,i.Vy)(e),n=r()&&!function(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),n=e.getAttribute("type")?.toLowerCase()??"text",i="true"===e.ariaReadOnly||"true"===e.getAttribute("aria-readonly")||null!==e.getAttribute("readonly");return("select"===t||"textarea"===t||"input"===t&&!s.has(n)||e.isContentEditable)&&!i}(e.target);return a(t)||n}},15820:(e,t,n)=>{n.d(t,{h:()=>r,u:()=>a});var i=n(73627);let r=()=>i.X()?.enabled_features??{},a=e=>!!r()[e]},35311:(e,t,n)=>{n.d(t,{J:()=>r,k:()=>CommandEvent});var i=n(4001);let CommandEvent=class CommandEvent{constructor(e){this.commandId=e}};let r={entries:e=>Object.entries(e).filter(e=>i.dx.is(e[0])&&void 0!==e[1]),keys:e=>Object.keys(e).filter(i.dx.is)}},32807:(e,t,n)=>{n.d(t,{F:()=>s,j:()=>o});var i=n(96540),r=n(50612);let a=(0,i.createContext)({triggerCommand:r.b}),s=a.Provider,o=()=>(0,i.useContext)(a)},58033:(e,t,n)=>{n.d(t,{J:()=>l,c:()=>o});var i=n(96540),r=n(35311),a=n(4001);let s=new Map;function o(){let e=new Map;for(let t of new Set(Array.from(s.values()).flat())){let n=a.dx.getServiceId(t);if(!e.has(n)){let t=(0,a.tp)(n);e.set(n,{service:{id:t.id,name:t.name},commands:[]})}let i=(0,a.fL)(t);i&&i.defaultBinding&&e.get(n)?.commands.push({id:t,name:i.name,description:i.description,keybinding:i.defaultBinding})}return Array.from(e.values())}let l=e=>{let t=(0,i.useId)();(0,i.useEffect)(()=>(s.set(t,r.J.keys(e)),()=>{s.delete(t)}),[e,t])}},4001:(e,t,n)=>{n.d(t,{dx:()=>l,eY:()=>p,fL:()=>d,tp:()=>u,xJ:()=>c});var i=n(97564),r=n(18558);let{P:a,$:s}=n(43750),o=new Set(Object.keys(a)),l={is:e=>o.has(e),getServiceId:e=>e.split(":")[0]},d=e=>{let t=a[e];return!t.featureFlag||(0,i.G7)(t.featureFlag.toUpperCase())?t:void 0},u=e=>s[e],c=e=>{let t=d(e);return t?.defaultBinding?(0,r.rd)(t.defaultBinding):void 0},p=e=>new Map(e.map(e=>[e,c(e)]).filter(e=>void 0!==e[1]))},67413:(e,t,n)=>{n(65862),n(4001)},16646:(e,t,n)=>{n.d(t,{T:()=>o});var i=n(97524),r=n(4001);let a=new i.s({collectorUrl:"https://collector.githubapp.com/ui-commands/collect"}),s={TYPE:"command.trigger",send(e){a.sendEvent(s.TYPE,e)}};function o(e,t){s.send({command_id:e.commandId,trigger_type:t instanceof KeyboardEvent?"keybinding":"click",target_element_html:t.target instanceof HTMLElement?function(e){let t=e.tagName.toLowerCase(),n=Array.from(e.attributes).map(e=>`${e.name}="${e.value.replaceAll('"','\\"')}"`).join(" ");return`<${t}${n?` ${n}`:""}>`}(t.target):void 0,keybinding:(0,r.xJ)(e.commandId)})}},90600:(e,t,n)=>{n.d(t,{N5:()=>a.N,Vr:()=>i.V,ak:()=>o.a,cQ:()=>r.c,hh:()=>s.h,tL:()=>l.t}),n(4001);var i=n(84735),r=n(18332),a=n(75251),s=n(23631),o=n(50612),l=n(48869);n(67413)},8492:(e,t,n)=>{n.d(t,{A:()=>l});var i=n(96540),r=n(35311),a=n(4001),s=n(86342);let o=new Map;function l(e,t){let n=(0,i.useMemo)(()=>new Map,[]),l="global"===e?o:n;(0,i.useEffect)(()=>{for(let[e,n]of(0,a.eY)(r.J.keys(t))){let t=l.get(n)?.filter(t=>t!==e)??[];t.length&&console.warn(`The keybinding (${n}) for the "${e}" command conflicts with the keybinding for the already-registered command(s) "${t.join(", ")}". This may result in unpredictable behavior.`),l.set(n,t.concat(e))}return()=>{for(let[e,n]of(0,a.eY)(r.J.keys(t))){let t=(0,s.CV)(l.get(n)??[],e);t?.length?l.set(n,t):l.delete(n)}}},[t,l])}},67435:(e,t,n)=>{n.d(t,{k:()=>l});var i=n(18558),r=n(98164),a=n(15820),s=n(96540),o=n(4001);function l(e,t,n){let{ui_commands_respect_modals:l}=(0,a.h)(),d=(0,s.useMemo)(()=>new i.KK,[]),u=(0,s.useMemo)(()=>{let t=new Map;for(let n of e){let e=(0,o.xJ)(n);e&&t.set(e,n)}return t},[e]),c=(0,s.useRef)(null);return(0,s.useCallback)(e=>{if(l&&void 0!==n&&!n())return;let a="nativeEvent"in e?e.nativeEvent:e;if(c.current===a)return;if(c.current=a,!(0,r.$$)(a)){d.reset();return}d.registerKeypress(a);let s=u.get(d.sequence)??u.get((0,i.Vy)(a));s&&(d.reset(),e.preventDefault(),e.stopPropagation(),a.stopImmediatePropagation(),t(s,a))},[u,d,t,n,l])}},86342:(e,t,n)=>{function i(e,t){let n=!1;return e.filter(e=>e!==t||!!n||(n=!0,!1))}function r(){let e=[...document.querySelectorAll('dialog:modal, [role="dialog"][aria-modal="true"]')].filter(e=>e.childNodes.length>0&&function e(t){if(t.clientHeight>0)return!0;for(let n of t.children)if(e(n))return!0;return!1}(e));return e.length?e[e.length-1]:null}function a(e,t){return!!t&&(e.contains(t)??!1)}n.d(t,{CV:()=>i,Yq:()=>a,ck:()=>r})},98152:(e,t,n)=>{n.d(t,{_:()=>s});var i=n(12480),r=n(96540);let a=new Set(["enter","tab"]),s=e=>{let t=(0,r.useRef)(!1),n=(0,r.useRef)(!1),s=(0,r.useCallback)(e=>{"compositionstart"===e.type&&(t.current=!0,n.current=!1),"compositionend"===e.type&&(t.current=!1,n.current=!0)},[]),o=(0,r.useCallback)(r=>{if(!a.has(r.key.toLowerCase())||!t.current){if((0,i.U0)()&&229===r.keyCode&&n.current){n.current=!1;return}e(r)}},[e]);return(0,r.useMemo)(()=>({onCompositionStart:s,onCompositionEnd:s,onKeyDown:o}),[s,o])}},10120:(e,t,n)=>{n.d(t,{M:()=>a});var i=n(51012),r=n(96540);function a(e){let t=(0,r.useRef)(e);return(0,i.N)(()=>{t.current=e},[e]),t}},65862:(e,t,n)=>{n.d(t,{z:()=>y});var i=n(74848),r=n(69909),a=n(37976),s=n(96540),o=n(12480);let l={alt:(0,o.U0)()?"\u2325":"Alt",control:"\u2303",shift:"\u21E7",meta:(0,o.U0)()?"\u2318":"Win",mod:(0,o.U0)()?"\u2318":"\u2303",pageup:"PgUp",pagedown:"PgDn",arrowup:"\u2191",arrowdown:"\u2193",arrowleft:"\u2190",arrowright:"\u2192",plus:"+",backspace:"\u232B",delete:"Del",space:"\u2423",tab:"\u21E5",enter:"\u23CE",escape:"Esc",function:"Fn",capslock:"CapsLock",insert:"Ins",printscreen:"PrtScn"},d={alt:(0,o.U0)()?"Option":"Alt",mod:(0,o.U0)()?"Command":"Control","+":"Plus",pageup:"Page Up",pagedown:"Page Down",arrowup:"Up Arrow",arrowdown:"Down Arrow",arrowleft:"Left Arrow",arrowright:"Right Arrow",capslock:"Caps Lock",printscreen:"Print Screen"},u={alt:(0,o.U0)()?"option":"alt",meta:(0,o.U0)()?"command":"Windows",mod:(0,o.U0)()?"command":"control",pageup:"page up",pagedown:"page down",arrowup:"up arrow",arrowdown:"down arrow",arrowleft:"left arrow",arrowright:"right arrow",capslock:"caps lock",printscreen:"print screen","`":"backtick","~":"tilde","!":"exclamation point","@":"at","#":"hash",$:"dollar sign","%":"percent","^":"caret","&":"ampersand","*":"asterisk","(":"left parenthesis",")":"right parenthesis",_:"underscore","-":"dash","+":"plus","=":"equals","[":"left bracket","{":"left curly brace","]":"right bracket","}":"right curly brace","\\":"backslash","|":"pipe",";":"semicolon",":":"colon","'":"single quote",'"':"double quote",",":"comma","<":"left angle bracket",".":"period",">":"right angle bracket","/":"forward slash","?":"question mark"," ":"space"},c={control:1,meta:2,alt:3,option:4,shift:5,function:6,DEFAULT:7};function p(e){return e in c?c[e]:c.DEFAULT}let m=({children:e})=>(0,i.jsx)(r.A,{as:"kbd",sx:{color:"inherit",fontFamily:"inherit",fontSize:"inherit",border:"none",background:"none",boxShadow:"none",p:0,lineHeight:"unset",position:"relative",overflow:"visible",verticalAlign:"baseline"},children:e}),f=e=>u[e]||e,g=({name:e,format:t})=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"sr-only",children:f(e)}),(0,i.jsx)("span",{"aria-hidden":!0,children:("condensed"===t?l[e]:d[e])??(0,a.A)(e)})]}),h=e=>e.split("+").map(e=>e.toLowerCase()).sort(v),v=(e,t)=>p(e)-p(t),w=({keys:e,format:t="condensed",variant:n="normal"})=>(0,i.jsx)(r.A,{sx:{display:"inline-flex",bg:"onEmphasis"===n?"transparent":"canvas.default",color:"onEmphasis"===n?"fg.onEmphasis":"fg.muted",border:"1px solid",borderColor:"border.default",borderRadius:2,fontWeight:"normal",fontFamily:"normal",fontSize:0,p:1,gap:"0.5ch",boxShadow:"none",verticalAlign:"baseline",overflow:"hidden",lineHeight:"10px"},children:h(e).map((e,n)=>(0,i.jsxs)(s.Fragment,{children:[n>0&&"full"===t?(0,i.jsx)("span",{"aria-hidden":!0,children:" + "}):" ",(0,i.jsx)(g,{name:e,format:t})]},n))}),b=e=>e.split(" "),y=(0,s.memo)(({keys:e,format:t="condensed",variant:n})=>(0,i.jsx)(m,{children:b(e).map((e,r)=>(0,i.jsxs)(s.Fragment,{children:[r>0&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"sr-only",children:", then"})," "]}),(0,i.jsx)(w,{keys:e,format:t,variant:n})]},r))}));y.displayName="KeyboardKey";try{m.displayName||(m.displayName="Kbd")}catch{}try{w.displayName||(w.displayName="Chord")}catch{}},84735:(e,t,n)=>{n.d(t,{V:()=>d});var i=n(74848),r=n(17909),a=n(96540),s=n(4001),o=n(32807),l=n(23631);let d=(0,a.forwardRef)(({commandId:e,children:t,description:n,leadingVisual:a,trailingVisual:d,...u},c)=>{let p=(0,s.fL)(e),{triggerCommand:m}=(0,o.j)();return p?(0,i.jsxs)(r.l.Item,{...u,onSelect:t=>m(e,t.nativeEvent),ref:c,children:[t??p.name,n&&(0,i.jsx)(r.l.Description,{children:n}),a&&(0,i.jsx)(r.l.LeadingVisual,{children:a}),null!==d&&(0,i.jsx)(r.l.TrailingVisual,{children:d??(0,i.jsx)(l.h,{commandId:e,format:"condensed"})})]}):null});d.displayName="ActionList.CommandItem"},18332:(e,t,n)=>{n.d(t,{c:()=>u});var i,r=n(74848),a=n(55847),s=n(96540),o=n(4001),l=n(32807),d=n(23631);let u=(0,s.forwardRef)(({commandId:e,children:t,trailingVisual:n,showKeybindingHint:i=!1,keybindingHintVariant:s,...u},c)=>{let p=(0,o.fL)(e),{triggerCommand:m}=(0,l.j)();if(!p)return null;let f=s??("primary"===u.variant?"onEmphasis":"normal");return(0,r.jsx)(a.Q,{...u,onClick:t=>m(e,t.nativeEvent),trailingVisual:n??i?()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"sr-only",children:"("}),(0,r.jsx)(d.h,{commandId:e,format:"condensed",variant:f}),(0,r.jsx)("span",{className:"sr-only",children:")"})]}):void 0,ref:c,children:t??p.name})});u.displayName="CommandButton";try{(i=HintVisual).displayName||(i.displayName="HintVisual")}catch{}},75251:(e,t,n)=>{n.d(t,{N:()=>l});var i=n(74848),r=n(87330),a=n(96540),s=n(4001),o=n(32807);let l=(0,a.forwardRef)(({commandId:e,"aria-label":t,...n},a)=>{let l=(0,s.fL)(e),{triggerCommand:d}=(0,o.j)();return l?(0,i.jsx)(r.K,{...n,"aria-label":t??l.name,onClick:t=>d(e,t.nativeEvent),ref:a}):null});l.displayName="CommandIconButton"},23631:(e,t,n)=>{n.d(t,{h:()=>s});var i=n(74848),r=n(65862),a=n(4001);let s=({commandId:e,...t})=>{let n=(0,a.xJ)(e);return n?(0,i.jsx)(r.z,{keys:n,...t}):null};try{s.displayName||(s.displayName="CommandKeybindingHint")}catch{}},50612:(e,t,n)=>{n.d(t,{a:()=>f,b:()=>m});var i=n(74848),r=n(96540),a=n(35311),s=n(4001),o=n(58033),l=n(16646),d=n(8492),u=n(67435),c=n(86342);let p="ui-command-trigger";function m(e,t){document.dispatchEvent(new CustomEvent(p,{detail:{commandId:e,domEvent:t}}))}let f=({commands:e})=>{let t=(0,r.useRef)(null),n=(0,r.useCallback)((t,n)=>{let i=e[t];if(i){let e=new a.k(t);try{i(e)}finally{(0,l.T)(e,n)}}},[e]),m=(0,r.useCallback)(()=>{let e=(0,c.ck)();return!e||(0,c.Yq)(e,t.current)},[]),f=(0,u.k)(a.J.keys(e),n,m);return(0,d.A)("global",e),(0,o.J)(e),(0,r.useEffect)(()=>{let e=e=>{let t="detail"in e&&"object"==typeof e.detail?e.detail:void 0;if(!t)return;let i="commandId"in t&&"string"==typeof t.commandId&&s.dx.is(t.commandId)?t.commandId:void 0,r="domEvent"in t&&(t.domEvent instanceof KeyboardEvent||t.domEvent instanceof MouseEvent)?t.domEvent:void 0;i&&r&&n(i,r)};return document.addEventListener("keydown",f),document.addEventListener(p,e),()=>{document.removeEventListener("keydown",f),document.removeEventListener(p,e)}},[f,n,t]),(0,i.jsx)("div",{ref:t,className:"d-none"})};try{f.displayName||(f.displayName="GlobalCommands")}catch{}},48869:(e,t,n)=>{n.d(t,{t:()=>f});var i=n(74848),r=n(98152),a=n(10120),s=n(64515),o=n(96540),l=n(35311),d=n(32807),u=n(58033),c=n(16646),p=n(8492),m=n(67435);let f=(0,o.forwardRef)(({commands:e,as:t="div",...n},f)=>{let g=(0,a.M)(e),h=(0,d.j)(),v=(0,o.useCallback)((e,t)=>{let n=g.current[e];if(n){let i=new l.k(e);try{n(i)}finally{(0,c.T)(i,t)}}else h.triggerCommand(e,t)},[g,h]);(0,p.A)("scoped",e),(0,u.J)(e);let w=(0,o.useMemo)(()=>({triggerCommand:v}),[v]),b=(0,m.k)(l.J.keys(e),v),y=(0,r._)(b),k=(0,o.useRef)(null);return(0,s.T)(f,k),(0,o.useEffect)(()=>{let e=k.current,t=y.onKeyDown;if(e)return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}),(0,i.jsx)(d.F,{value:w,children:(0,i.jsx)(t,{style:"div"!==t?void 0:{display:"contents"},...n,...y,ref:k})})});f.displayName="ScopedCommands"},43750:e=>{e.exports=JSON.parse('{"$":{"commit-diff-view":{"id":"commit-diff-view","name":"Commits diff view","commandIds":["commit-diff-view:open-find","commit-diff-view:create-permalink"]},"github":{"id":"github","name":"GitHub (site-wide)","commandIds":["github:submit-form","github:open-context-menu"]},"issue-create":{"id":"issue-create","name":"Issue Create","commandIds":["issue-create:new","issue-create:submit-and-create-more","issue-create:open-fullscreen"]},"issue-viewer":{"id":"issue-viewer","name":"Issue viewer","commandIds":["issue-viewer:edit-parent","issue-viewer:edit-title-submit","issue-viewer:close-edit-title"]},"item-pickers":{"id":"item-pickers","name":"Item Pickers","commandIds":["item-pickers:open-assignees","item-pickers:open-development","item-pickers:open-labels","item-pickers:open-milestone","item-pickers:open-projects","item-pickers:open-issue-type"]},"keyboard-shortcuts-dialog":{"id":"keyboard-shortcuts-dialog","name":"Keyboard Shortcuts Dialog","commandIds":["keyboard-shortcuts-dialog:show-dialog"]},"list-views":{"id":"list-views","name":"List views including lists of issues, pull requests, discussions, and notifications.","commandIds":["list-views:open-manage-item-dialog"]},"projects":{"id":"projects","name":"Projects","commandIds":["projects:save-view","projects:save-form"]},"pull-requests-diff-file-tree":{"id":"pull-requests-diff-file-tree","name":"Pull requests - diff file tree","commandIds":["pull-requests-diff-file-tree:focus-file-tree"]},"pull-requests-diff-view":{"id":"pull-requests-diff-view","name":"Pull requests - \'Files changed\' view","commandIds":["pull-requests-diff-view:copy-code","pull-requests-diff-view:expand-all-hunks","pull-requests-diff-view:expand-hunk-up","pull-requests-diff-view:expand-hunk-down","pull-requests-diff-view:copy-anchor-link","pull-requests-diff-view:start-conversation-current","pull-requests-diff-view:jump-to-next-result","pull-requests-diff-view:jump-to-next-result-alternate","pull-requests-diff-view:jump-to-previous-result","pull-requests-diff-view:jump-to-previous-result-alternate","pull-requests-diff-view:open-find","pull-requests-diff-view:close-find"]},"react-sandbox":{"id":"react-sandbox","name":"React Sandbox","commandIds":["react-sandbox:example-command"]},"sub-issues":{"id":"sub-issues","name":"sub-issues","commandIds":["sub-issues:create-sub-issue","sub-issues:add-existing-issue"]}},"P":{"commit-diff-view:create-permalink":{"name":"Create permalink","description":"Hotkey to expand the current url to a full permalink.","defaultBinding":"y"},"commit-diff-view:open-find":{"name":"Open up find and search on selection","description":"Hotkey to open up the custom find and search on selection.","defaultBinding":"Mod+e"},"github:open-context-menu":{"name":"Open context menu","description":"Open a context menu if one is available","defaultBinding":"Alt+Shift+C"},"github:submit-form":{"name":"Submit form","description":"Submit the current form","defaultBinding":"Mod+Enter"},"issue-create:new":{"name":"Create a new issue","description":"Initiate new issue creation","defaultBinding":"c"},"issue-create:open-fullscreen":{"name":"Open in fullscreen","description":"Open the issue creation dialog in fullscreen mode","defaultBinding":"Mod+Shift+Enter"},"issue-create:submit-and-create-more":{"name":"Submit and create more","description":"Submit the current issue and create a new one","defaultBinding":"Mod+Alt+Enter"},"issue-viewer:close-edit-title":{"name":"Cancel","description":"Cancel out of editing an issue\'s title","defaultBinding":"Escape"},"issue-viewer:edit-parent":{"name":"Edit parent","description":"Edit parent for current issue","defaultBinding":"Alt+Shift+P"},"issue-viewer:edit-title-submit":{"name":"Save","description":"Submit changes made to an issue\'s title","defaultBinding":"Enter"},"item-pickers:open-assignees":{"name":"Open assignees panel","description":"Open panel to select assignees","defaultBinding":"a"},"item-pickers:open-development":{"name":"Open development panel","description":"Open panel to create or link a pull request","defaultBinding":"d"},"item-pickers:open-issue-type":{"name":"Open issue type panel","description":"Open panel to select issue type","defaultBinding":"t"},"item-pickers:open-labels":{"name":"Open labels panel","description":"Open panel to select labels","defaultBinding":"l"},"item-pickers:open-milestone":{"name":"Open milestone panel","description":"Open panel to select milestone","defaultBinding":"m"},"item-pickers:open-projects":{"name":"Open projects panel","description":"Open panel to select projects","defaultBinding":"p"},"keyboard-shortcuts-dialog:show-dialog":{"name":"Show Keyboard Shortcuts Dialog","description":"Display the keyboard shortcuts help dialog","defaultBinding":"Shift+?"},"list-views:open-manage-item-dialog":{"name":"Open \'manage item\' dialog","defaultBinding":"Mod+Shift+U","description":"Open a dialog to manage the currently focused item."},"projects:save-form":{"name":"Save","description":"Submits the currently focused form.","defaultBinding":"Mod+Enter"},"projects:save-view":{"name":"Save view","description":"Save any unsaved changes to the current project view.","defaultBinding":"Mod+s"},"pull-requests-diff-file-tree:focus-file-tree":{"name":"Focus file tree","description":"Move focus to the file tree","defaultBinding":"Mod+F6","featureFlag":"prx"},"pull-requests-diff-view:close-find":{"name":"Close Find","description":"Close the find window","defaultBinding":"Escape"},"pull-requests-diff-view:copy-anchor-link":{"name":"Copy anchor link","description":"Copy link to the current line","defaultBinding":"Mod+Alt+y","featureFlag":"prx"},"pull-requests-diff-view:copy-code":{"name":"Copy code","description":"Copy the code for the current line(s)","defaultBinding":"Mod+c","featureFlag":"prx"},"pull-requests-diff-view:expand-all-hunks":{"name":"Expand all","description":"Expand all hunks in the current file","defaultBinding":"Mod+Shift+ArrowLeft","featureFlag":"prx"},"pull-requests-diff-view:expand-hunk-down":{"name":"Expand below","description":"Expand the current hunk downward","featureFlag":"prx"},"pull-requests-diff-view:expand-hunk-up":{"name":"Expand above","description":"Expand the current hunk upward","featureFlag":"prx"},"pull-requests-diff-view:jump-to-next-result":{"name":"Jump to the next search result","description":"Jump to the next search result","defaultBinding":"Enter"},"pull-requests-diff-view:jump-to-next-result-alternate":{"name":"Jump to the next search result","description":"Jump to the next search result","defaultBinding":"Mod+g"},"pull-requests-diff-view:jump-to-previous-result":{"name":"Jump to the previous search result","description":"Jump to the previous search result","defaultBinding":"Shift+Enter"},"pull-requests-diff-view:jump-to-previous-result-alternate":{"name":"Jump to the previous search result","description":"Jump to the previous search result","defaultBinding":"Mod+Shift+G"},"pull-requests-diff-view:open-find":{"name":"Open up find","description":"Hotkey to open up the custom find.","defaultBinding":"Mod+f"},"pull-requests-diff-view:start-conversation-current":{"name":"Start conversation on line","description":"Start a conversation on the current line","featureFlag":"prx"},"react-sandbox:example-command":{"name":"React Sandbox Example Command","description":"Do something.","defaultBinding":"Mod+Shift+Enter"},"sub-issues:add-existing-issue":{"name":"Add existing issue","description":"Add an existing issue as a sub-issue","defaultBinding":"Alt+Shift+A"},"sub-issues:create-sub-issue":{"name":"Create sub-issue","description":"Create a new sub-issue","defaultBinding":"Alt+Shift+C"}}}')}}]);
//# sourceMappingURL=ui_packages_ui-commands_ui-commands_ts-20cbc61687b1.js.map