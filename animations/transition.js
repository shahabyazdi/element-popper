function t({from:t=12,duration:o=400,transition:e}={}){return t<0&&(t=0),function({popper:r,arrow:n,data:{position:i,getTransform:f,popper:{top:p,left:l},arrow:{top:s,left:a}}}){let[u]=i.split("-"),m={top:0,left:0};function c(t){t.style.transition=e||o+"ms"}function d(t,o,e){t.style.transform=f(o,e)}["left","right"].includes(u)?m.left+="right"===u?t:-t:m.top+="bottom"===u?t:-t,d(r,l+m.left,p+m.top),n&&d(n,a+m.left,s+m.top),setTimeout((()=>{c(r),d(r,l,p),n&&(c(n),d(n,a,s))}),18)}}export default t;
