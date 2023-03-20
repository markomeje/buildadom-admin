import{r as s,j as d,F as fe,k as qe,b as he,u as ge,c as $,a as Je}from"./index-f1189a9f.js";import{f as W,o as me,s as I,d as xe,b as y,l as Me,r as Te,F as Ae,g as Qe,h as Ze}from"./Fade-d5887953.js";import{d as et,N as tt,u as nt,a as De,q as S}from"./NoopTransition-040d6e3a.js";import{c as pe}from"./Navbar-e67db8c7.js";import{C as ot}from"./Alert-ba8871e4.js";import{d as rt}from"./divWithClassName-1c498f27.js";function st(){return s.useState(null)}function at(e){var t=s.useRef(null);return s.useEffect(function(){t.current=e}),t.current}var it=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",lt=typeof document<"u";const Ce=lt||it?s.useLayoutEffect:s.useEffect;function we(e,t){if(e.contains)return e.contains(t);if(e.compareDocumentPosition)return e===t||!!(e.compareDocumentPosition(t)&16)}const Le=s.createContext(W?window:void 0);Le.Provider;function Fe(){return s.useContext(Le)}var Y;function ke(e){if((!Y&&Y!==0||e)&&W){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),Y=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return Y}function le(e){e===void 0&&(e=me());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function dt(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const Ne=et("modal-open");class ct{constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:o=!1}={}){this.handleContainerOverflow=n,this.isRTL=o,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return dt(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const n={overflow:"hidden"},o=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();t.style={overflow:r.style.overflow,[o]:r.style[o]},t.scrollBarWidth&&(n[o]=`${parseInt(I(r,o)||"0",10)+t.scrollBarWidth}px`),r.setAttribute(Ne,""),I(r,n)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const n=this.getElement();n.removeAttribute(Ne),Object.assign(n.style,t.style)}add(t){let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(t){const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const ve=ct,de=(e,t)=>W?e==null?(t||me()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function ut(e,t){const n=Fe(),[o,r]=s.useState(()=>de(e,n==null?void 0:n.document));if(!o){const a=de(e);a&&r(a)}return s.useEffect(()=>{t&&o&&t(o)},[t,o]),s.useEffect(()=>{const a=de(e);a!==o&&r(a)},[e,o]),o}function ft({in:e,onTransition:t}){const n=s.useRef(null),o=s.useRef(!0),r=y(t);return Ce(()=>{if(!n.current)return;let a=!1;return r({in:e,element:n.current,initial:o.current,isStale:()=>a}),()=>{a=!0}},[e,r]),Ce(()=>(o.current=!1,()=>{o.current=!0}),[]),n}function ht({children:e,in:t,onExited:n,onEntered:o,transition:r}){const[a,f]=s.useState(!t);t&&a&&f(!1);const h=ft({in:!!t,onTransition:u=>{const m=()=>{u.isStale()||(u.in?o==null||o(u.element,u.initial):(f(!0),n==null||n(u.element)))};Promise.resolve(r(u)).then(m,g=>{throw u.in||f(!0),g})}}),v=xe(h,e.ref);return a&&!t?null:s.cloneElement(e,{ref:v})}function Oe(e,t,n){return e?d(e,Object.assign({},n)):t?d(ht,Object.assign({},n,{transition:t})):d(tt,Object.assign({},n))}const gt=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function mt(e,t){if(e==null)return{};var n={},o=Object.keys(e),r,a;for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}let ce;function pt(e){return ce||(ce=new ve({ownerDocument:e==null?void 0:e.document})),ce}function vt(e){const t=Fe(),n=e||pt(t),o=s.useRef({dialog:null,backdrop:null});return Object.assign(o.current,{add:()=>n.add(o.current),remove:()=>n.remove(o.current),isTopModal:()=>n.isTopModal(o.current),setDialogRef:s.useCallback(r=>{o.current.dialog=r},[]),setBackdropRef:s.useCallback(r=>{o.current.backdrop=r},[])})}const Ie=s.forwardRef((e,t)=>{let{show:n=!1,role:o="dialog",className:r,style:a,children:f,backdrop:h=!0,keyboard:v=!0,onBackdropClick:u,onEscapeKeyDown:m,transition:g,runTransition:R,backdropTransition:q,runBackdropTransition:j,autoFocus:J=!0,enforceFocus:M=!0,restoreFocus:Q=!0,restoreFocusOptions:Z,renderDialog:H,renderBackdrop:ee=l=>d("div",Object.assign({},l)),manager:te,container:ne,onShow:x,onHide:_=()=>{},onExit:K,onExited:A,onExiting:P,onEnter:U,onEntering:V,onEntered:oe}=e,re=mt(e,gt);const T=ut(ne),c=vt(te),se=nt(),z=at(n),[b,C]=s.useState(!n),p=s.useRef(null);s.useImperativeHandle(t,()=>c,[c]),W&&!z&&n&&(p.current=le()),n&&b&&C(!1);const E=y(()=>{if(c.add(),w.current=Me(document,"keydown",ie),L.current=Me(document,"focus",()=>setTimeout(ae),!0),x&&x(),J){const l=le(document);c.dialog&&l&&!we(c.dialog,l)&&(p.current=l,c.dialog.focus())}}),D=y(()=>{if(c.remove(),w.current==null||w.current(),L.current==null||L.current(),Q){var l;(l=p.current)==null||l.focus==null||l.focus(Z),p.current=null}});s.useEffect(()=>{!n||!T||E()},[n,T,E]),s.useEffect(()=>{b&&D()},[b,D]),De(()=>{D()});const ae=y(()=>{if(!M||!se()||!c.isTopModal())return;const l=le();c.dialog&&l&&!we(c.dialog,l)&&c.dialog.focus()}),G=y(l=>{l.target===l.currentTarget&&(u==null||u(l),h===!0&&_())}),ie=y(l=>{v&&l.keyCode===27&&c.isTopModal()&&(m==null||m(l),l.defaultPrevented||_())}),L=s.useRef(),w=s.useRef(),X=(...l)=>{C(!0),A==null||A(...l)};if(!T)return null;const k=Object.assign({role:o,ref:c.setDialogRef,"aria-modal":o==="dialog"?!0:void 0},re,{style:a,className:r,tabIndex:-1});let F=H?H(k):d("div",Object.assign({},k,{children:s.cloneElement(f,{role:"document"})}));F=Oe(g,R,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:K,onExiting:P,onExited:X,onEnter:U,onEntering:V,onEntered:oe,children:F});let N=null;return h&&(N=ee({ref:c.setBackdropRef,onClick:G}),N=Oe(q,j,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:N})),d(fe,{children:qe.createPortal(he(fe,{children:[N,F]}),T)})});Ie.displayName="Modal";const yt=Object.assign(Ie,{Manager:ve});function Et(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function bt(e,t){e.classList?e.classList.add(t):Et(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function Se(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Rt(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=Se(e.className,t):e.setAttribute("class",Se(e.className&&e.className.baseVal||"",t))}const B={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Mt extends ve{adjustAndStore(t,n,o){const r=n.style[t];n.dataset[t]=r,I(n,{[t]:`${parseFloat(I(n,t))+o}px`})}restore(t,n){const o=n.dataset[t];o!==void 0&&(delete n.dataset[t],I(n,{[t]:o}))}setContainerStyle(t){super.setContainerStyle(t);const n=this.getElement();if(bt(n,"modal-open"),!t.scrollBarWidth)return;const o=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";S(n,B.FIXED_CONTENT).forEach(a=>this.adjustAndStore(o,a,t.scrollBarWidth)),S(n,B.STICKY_CONTENT).forEach(a=>this.adjustAndStore(r,a,-t.scrollBarWidth)),S(n,B.NAVBAR_TOGGLER).forEach(a=>this.adjustAndStore(r,a,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const n=this.getElement();Rt(n,"modal-open");const o=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";S(n,B.FIXED_CONTENT).forEach(a=>this.restore(o,a)),S(n,B.STICKY_CONTENT).forEach(a=>this.restore(r,a)),S(n,B.NAVBAR_TOGGLER).forEach(a=>this.restore(r,a))}}let ue;function Tt(e){return ue||(ue=new Mt(e)),ue}const Ct=pe("modal-body"),wt=s.createContext({onHide(){}}),$e=wt,We=s.forwardRef(({bsPrefix:e,className:t,contentClassName:n,centered:o,size:r,fullscreen:a,children:f,scrollable:h,...v},u)=>{e=ge(e,"modal");const m=`${e}-dialog`,g=typeof a=="string"?`${e}-fullscreen-${a}`:`${e}-fullscreen`;return d("div",{...v,ref:u,className:$(m,t,r&&`${e}-${r}`,o&&`${m}-centered`,h&&`${m}-scrollable`,a&&g),children:d("div",{className:$(`${e}-content`,n),children:f})})});We.displayName="ModalDialog";const je=We,kt=pe("modal-footer"),Nt={closeLabel:"Close",closeButton:!1},He=s.forwardRef(({closeLabel:e,closeVariant:t,closeButton:n,onHide:o,children:r,...a},f)=>{const h=s.useContext($e),v=y(()=>{h==null||h.onHide(),o==null||o()});return he("div",{ref:f,...a,children:[r,n&&d(ot,{"aria-label":e,variant:t,onClick:v})]})});He.defaultProps=Nt;const Ot=He,St={closeLabel:"Close",closeButton:!1},ye=s.forwardRef(({bsPrefix:e,className:t,...n},o)=>(e=ge(e,"modal-header"),d(Ot,{ref:o,...n,className:$(t,e)})));ye.displayName="ModalHeader";ye.defaultProps=St;const Bt=ye,xt=rt("h4"),At=pe("modal-title",{Component:xt}),Dt={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:je};function Lt(e){return d(Ae,{...e,timeout:null})}function Ft(e){return d(Ae,{...e,timeout:null})}const Ee=s.forwardRef(({bsPrefix:e,className:t,style:n,dialogClassName:o,contentClassName:r,children:a,dialogAs:f,"aria-labelledby":h,"aria-describedby":v,"aria-label":u,show:m,animation:g,backdrop:R,keyboard:q,onEscapeKeyDown:j,onShow:J,onHide:M,container:Q,autoFocus:Z,enforceFocus:H,restoreFocus:ee,restoreFocusOptions:te,onEntered:ne,onExit:x,onExiting:_,onEnter:K,onEntering:A,onExited:P,backdropClassName:U,manager:V,...oe},re)=>{const[T,c]=s.useState({}),[se,z]=s.useState(!1),b=s.useRef(!1),C=s.useRef(!1),p=s.useRef(null),[E,D]=st(),ae=xe(re,D),G=y(M),ie=Je();e=ge(e,"modal");const L=s.useMemo(()=>({onHide:G}),[G]);function w(){return V||Tt({isRTL:ie})}function X(i){if(!W)return;const O=w().getScrollbarWidth()>0,Re=i.scrollHeight>me(i).documentElement.clientHeight;c({paddingRight:O&&!Re?ke():void 0,paddingLeft:!O&&Re?ke():void 0})}const k=y(()=>{E&&X(E.dialog)});De(()=>{Te(window,"resize",k),p.current==null||p.current()});const F=()=>{b.current=!0},N=i=>{b.current&&E&&i.target===E.dialog&&(C.current=!0),b.current=!1},l=()=>{z(!0),p.current=Ze(E.dialog,()=>{z(!1)})},_e=i=>{i.target===i.currentTarget&&l()},Ke=i=>{if(R==="static"){_e(i);return}if(C.current||i.target!==i.currentTarget){C.current=!1;return}M==null||M()},Pe=i=>{q?j==null||j(i):(i.preventDefault(),R==="static"&&l())},Ue=(i,O)=>{i&&X(i),K==null||K(i,O)},Ve=i=>{p.current==null||p.current(),x==null||x(i)},ze=(i,O)=>{A==null||A(i,O),Qe(window,"resize",k)},Ge=i=>{i&&(i.style.display=""),P==null||P(i),Te(window,"resize",k)},Xe=s.useCallback(i=>d("div",{...i,className:$(`${e}-backdrop`,U,!g&&"show")}),[g,U,e]),be={...n,...T};be.display="block";const Ye=i=>d("div",{role:"dialog",...i,style:be,className:$(t,e,se&&`${e}-static`,!g&&"show"),onClick:R?Ke:void 0,onMouseUp:N,"aria-label":u,"aria-labelledby":h,"aria-describedby":v,children:d(f,{...oe,onMouseDown:F,className:o,contentClassName:r,children:a})});return d($e.Provider,{value:L,children:d(yt,{show:m,ref:ae,backdrop:R,container:Q,keyboard:!0,autoFocus:Z,enforceFocus:H,restoreFocus:ee,restoreFocusOptions:te,onEscapeKeyDown:Pe,onShow:J,onHide:M,onEnter:Ue,onEntering:ze,onEntered:ne,onExit:Ve,onExiting:_,onExited:Ge,manager:w(),transition:g?Lt:void 0,backdropTransition:g?Ft:void 0,renderBackdrop:Xe,renderDialog:Ye})})});Ee.displayName="Modal";Ee.defaultProps=Dt;const Be=Object.assign(Ee,{Body:Ct,Header:Bt,Title:At,Footer:kt,Dialog:je,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});function Kt({show:e,children:t,size:n,handleClose:o=()=>{},showCloseButton:r=!1}){return d(fe,{children:d(Be,{centered:!0,show:e,onHide:o,size:n,children:he(Be.Body,{className:"px-4 py-5 position-relative",children:[r&&d("div",{className:"btn-close text-danger position-absolute cursor-pointer",style:{top:"15px",right:"20px",zIndex:"3"},onClick:o}),t]})})})}export{Kt as M};