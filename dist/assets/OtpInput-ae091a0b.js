import{r as w,j as f}from"./index-f1189a9f.js";const m=new RegExp(/^\d+$/);function h({value:r,valueLength:i,onChange:u}){const E=w.useMemo(()=>{const n=r.split(""),t=[];for(let e=0;e<i;e++){const o=n[e];m.test(o)?t.push(o):t.push("")}return t},[r,i]),c=n=>{const t=n.nextElementSibling;t&&t.focus()},l=n=>{const t=n.previousElementSibling;t&&t.focus()},b=(n,t)=>{const e=n.target;let o=e.value;const s=m.test(o);if(!s&&o!=="")return;const a=e.nextElementSibling;if(!s&&a&&a.value!=="")return;o=s?o:" ";const p=o.length;if(p===1){const x=r.substring(0,t)+o+r.substring(t+1);u(x);const g=e.nextElementSibling;if(g&&g.focus(),!s)return;c(e)}else p===i&&(u(o),e.blur())},v=n=>{const{key:t}=n,e=n.target;if(t==="ArrowRight"||t==="ArrowDown")return n.preventDefault(),c(e);if(t==="ArrowLeft"||t==="ArrowUp")return n.preventDefault(),l(e);const o=e.value;if(e.setSelectionRange(0,o.length),n.key!=="Backspace"||e.value!=="")return;const s=e.previousElementSibling;s&&s.focus(),!(n.key!=="Backspace"||o!=="")&&l(e)},S=n=>{const{target:t}=n,e=t.previousElementSibling;if(e&&e.value==="")return e.focus();t.setSelectionRange(0,t.value.length)};return f("div",{className:"otp-group",children:E.map((n,t)=>f("input",{type:"text",name:"code",autoComplete:"one-time-code",maxLength:i,className:"otp-input",inputMode:"numeric",value:n,onChange:e=>b(e,t),pattern:"\\d{1}",onKeyDown:v,onFocus:S},t))})}export{h as O};
