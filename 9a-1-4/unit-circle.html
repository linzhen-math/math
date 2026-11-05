<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>單位圓：正弦與餘弦動態示範</title>
<style>
  :root{--navy:#1F3A6E;--red:#C0392B;--org:#D98200;--bg:#F7F9FC;--edge:#34508F;--fill:#E3EEFA;--c30:#D0392B;--c45:#1E9E48;--c60:#7B2FBE}
  *{box-sizing:border-box}
  body{margin:0;font-family:"PingFang TC","Noto Sans TC","Microsoft JhengHei",sans-serif;background:var(--bg);color:#222}
  .wrap{max-width:860px;margin:0 auto;padding:18px 16px 28px}
  h1{font-size:22px;color:var(--navy);margin:4px 0 12px}
  .stage{background:#fff;border:1px solid #D8E0EC;border-radius:14px;position:relative;overflow:hidden;touch-action:none}
  svg{display:block;width:100%;height:auto;max-height:66vh}
  .hud{position:absolute;right:16px;top:12px;font-size:15px;line-height:1.5;pointer-events:none;text-align:left}
  .hud .ang{color:var(--navy);font-weight:700;font-size:20px;font-family:"Times New Roman","PingFang TC",serif}
  .hud .row{font-family:"Times New Roman","PingFang TC","Noto Sans TC",serif;font-size:22px;font-weight:700;margin-top:4px;display:flex;align-items:center;gap:6px}
  .hud .sin{color:var(--red)} .hud .cos{color:var(--org)}
  .hud .tag{font-family:"PingFang TC","Noto Sans TC",sans-serif;font-size:14px;font-weight:400;opacity:.85}
  .m{font-family:"Times New Roman",serif;font-style:italic}
  .fr{display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;font-size:.8em;line-height:1.05;margin:0 2px}
  .fr>span:first-child{border-bottom:2px solid currentColor;padding:0 3px}
  .sq{border-top:1.5px solid currentColor;padding-left:1px;margin-left:1px}
  .ctrl{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-top:14px}
  button{font:inherit;font-size:15px;padding:8px 14px;border-radius:10px;border:1px solid #B9C6DA;background:#fff;color:var(--navy);cursor:pointer}
  button:hover{background:#EEF3FA}
  button.primary{background:var(--navy);color:#fff;border-color:var(--navy)}
  button.primary:hover{background:#2C4C86}
  button.q30{color:var(--c30)} button.q45{color:var(--c45)} button.q60{color:var(--c60)}
  .slider{flex:1 1 260px;display:flex;align-items:center;gap:10px}
  input[type=range]{flex:1;accent-color:var(--navy)}
  .marks{position:relative;height:18px;font-size:12px;color:#667;margin:2px 8px 0 8px}
  .marks span{position:absolute;transform:translateX(-50%)}
  table{margin-top:16px;border-collapse:collapse;width:100%;background:#fff;border-radius:12px;overflow:hidden;font-size:17px}
  th,td{border:1px solid #D8E0EC;padding:8px 6px;text-align:center}
  th{background:var(--navy);color:#fff;font-weight:700}
  td{font-family:"Times New Roman","PingFang TC",serif}
  tr.on td{background:#FFF6D9;font-weight:700}
  .note{margin-top:12px;font-size:15px;color:#333;line-height:1.7}
  .note b.s{color:var(--red)} .note b.c{color:var(--org)}
  .hint{font-size:13px;color:#667;margin-top:6px}
</style>
</head>
<body>
<div class="wrap">
  <h1>單位圓：正弦 ⇒ 高度，餘弦 ⇒ 寬度</h1>
  <div class="stage" id="stage">
    <svg id="svg" viewBox="-70 -40 560 470" aria-label="單位圓動態圖"></svg>
    <div class="hud">
      <div class="ang" id="angTxt"></div>
      <div class="row sin" id="sinTxt"></div>
      <div class="row cos" id="cosTxt"></div>
    </div>
  </div>
  <div class="hint">拖曳圓上的黑點，或用下面的滑桿改變角度。</div>
  <div class="ctrl">
    <button id="prev">◀ 上一個</button>
    <button class="primary" id="play">▶ 播放</button>
    <button id="next">下一個 ▶</button>
    <button class="q30" data-a="30">30°</button>
    <button class="q45" data-a="45">45°</button>
    <button class="q60" data-a="60">60°</button>
    <button id="reset">重設</button>
  </div>
  <div class="ctrl slider">
    <input type="range" id="t" min="0" max="90" step="1" value="0" aria-label="角度">
  </div>
  <div class="marks"><span style="left:0%">0°</span><span style="left:33.33%">30°</span><span style="left:50%">45°</span><span style="left:66.67%">60°</span><span style="left:100%">90°</span></div>
  <table>
    <tr><th>角度</th><th>sin（高度）</th><th>cos（寬度）</th></tr>
    <tr id="r30"><td>30°</td><td><span class="fr"><span>1</span><span>2</span></span> = 0.5</td><td><span class="fr"><span>√<span class="sq">3</span></span><span>2</span></span> ≒ 0.866</td></tr>
    <tr id="r45"><td>45°</td><td><span class="fr"><span>√<span class="sq">2</span></span><span>2</span></span> ≒ 0.707</td><td><span class="fr"><span>√<span class="sq">2</span></span><span>2</span></span> ≒ 0.707</td></tr>
    <tr id="r60"><td>60°</td><td><span class="fr"><span>√<span class="sq">3</span></span><span>2</span></span> ≒ 0.866</td><td><span class="fr"><span>1</span><span>2</span></span> = 0.5</td></tr>
  </table>
  <div class="note">半徑是 1，所以斜邊 = 1：<b class="s">正弦 = 對邊 ÷ 1 = 高度</b>，<b class="c">餘弦 = 鄰邊 ÷ 1 = 寬度</b>。<br>角度越大，點越高 → 正弦越大；點越靠近 <span class="m">y</span> 軸 → 寬度越窄，餘弦越小。</div>
</div>
<script>
(function(){
  const svg=document.getElementById('svg'), NS='http://www.w3.org/2000/svg';
  const R=380, O=[0,390];
  const P=(x,y)=>[O[0]+x*R, O[1]-y*R];
  const COL={30:'var(--c30)',45:'var(--c45)',60:'var(--c60)'};
  const EXACT={30:['<span class="fr"><span>1</span><span>2</span></span> = 0.5','<span class="fr"><span>√<span class="sq">3</span></span><span>2</span></span> ≒ 0.866'],
               45:['<span class="fr"><span>√<span class="sq">2</span></span><span>2</span></span> ≒ 0.707','<span class="fr"><span>√<span class="sq">2</span></span><span>2</span></span> ≒ 0.707'],
               60:['<span class="fr"><span>√<span class="sq">3</span></span><span>2</span></span> ≒ 0.866','<span class="fr"><span>1</span><span>2</span></span> = 0.5']};
  let th=0;
  function el(tag,attrs,parent){const e=document.createElementNS(NS,tag);for(const k in attrs)e.setAttribute(k,attrs[k]);(parent||svg).appendChild(e);return e;}
  function txt(x,y,s,attrs){const e=el('text',Object.assign({x,y,'font-family':'Times New Roman, serif','font-size':24,'dominant-baseline':'central'},attrs||{}));e.textContent=s;return e;}
  function render(){
    svg.innerHTML='';
    el('defs',{}).innerHTML='<marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#222"/></marker>';
    el('line',{x1:O[0]-30,y1:O[1],x2:O[0]+R+60,y2:O[1],stroke:'#222','stroke-width':2,'marker-end':'url(#ar)'});
    el('line',{x1:O[0],y1:O[1]+30,x2:O[0],y2:O[1]-R-45,stroke:'#222','stroke-width':2,'marker-end':'url(#ar)'});
    txt(O[0]+R+52,O[1]+24,'x',{'font-style':'italic'}); txt(O[0]+14,O[1]-R-40,'y',{'font-style':'italic'});
    txt(O[0]-30,O[1]+22,'O',{'font-style':'italic'}); txt(O[0]+R-6,O[1]+24,'1'); txt(O[0]-24,O[1]-R,'1');
    const [ax,ay]=P(1,0),[bx,by]=P(0,1);
    el('path',{d:`M${ax},${ay} A${R},${R} 0 0 0 ${bx},${by}`,fill:'none',stroke:'#222','stroke-width':2.5});
    [30,45,60].forEach(d=>{const r=d*Math.PI/180,[x,y]=P(Math.cos(r),Math.sin(r));
      el('line',{x1:O[0],y1:O[1],x2:x,y2:y,stroke:COL[d],'stroke-width':1.5,opacity:.35,'stroke-dasharray':'6 5'});
      txt(x+10,y-12,d+'°',{'font-size':18,fill:COL[d],opacity:.8});});
    const r=th*Math.PI/180, c=Math.cos(r), s=Math.sin(r), [px,py]=P(c,s), [tx,ty]=P(c,0);
    el('polygon',{points:`${O[0]},${O[1]} ${tx},${ty} ${px},${py}`,fill:'var(--fill)'});
    el('line',{x1:O[0],y1:O[1],x2:tx,y2:ty,stroke:'var(--org)','stroke-width':8,'stroke-linecap':'butt'});
    if(s>0.002) el('line',{x1:tx,y1:ty,x2:px,y2:py,stroke:'var(--red)','stroke-width':6});
    if(s>0.06&&c>0.06){const k=14; el('polyline',{points:`${tx-k},${ty} ${tx-k},${ty-k} ${tx},${ty-k}`,fill:'none',stroke:'#222','stroke-width':1.5});}
    el('line',{x1:O[0],y1:O[1],x2:px,y2:py,stroke:'#222','stroke-width':3.5});
    if(th>0.5){const rr=60,[x1,y1]=[O[0]+rr,O[1]],[x2,y2]=[O[0]+rr*c,O[1]-rr*s];
      el('path',{d:`M${x1},${y1} A${rr},${rr} 0 0 0 ${x2},${y2}`,fill:'none',stroke:'#222','stroke-width':2});
      txt(O[0]+82*Math.cos(r/2),O[1]-82*Math.sin(r/2),'θ',{'font-style':'italic','text-anchor':'middle'});}
    txt(O[0]+R*0.48*c-20*s, O[1]-R*0.48*s-20*c,'1',{'text-anchor':'middle'});
    if(s>0.08) el('text',{x:px+12,y:(py+ty)/2,'font-size':20,fill:'var(--red)','font-weight':700,'dominant-baseline':'central'}).textContent='高度';
    if(c>0.12) el('text',{x:(O[0]+tx)/2,y:O[1]+26,'font-size':20,fill:'var(--org)','font-weight':700,'text-anchor':'middle','dominant-baseline':'central'}).textContent='寬度';
    el('circle',{cx:px,cy:py,r:22,fill:'rgba(31,58,110,0.12)'});
    el('circle',{cx:px,cy:py,r:10,fill:'#222',id:'dot'});
    const d=Math.round(th), ex=!!(EXACT[d]&&Math.abs(th-d)<1e-6);
    document.getElementById('angTxt').innerHTML='<span class="m">θ</span> = '+d+'°';
    document.getElementById('sinTxt').innerHTML='sin <span class="m">θ</span> '+(ex?'= '+EXACT[d][0]:(Math.abs(th-d)<1e-6&&(d===0||d===90)? '= '+(d?'1':'0') :'≒ '+s.toFixed(3)))+' <span class="tag">（高度）</span>';
    document.getElementById('cosTxt').innerHTML='cos <span class="m">θ</span> '+(ex?'= '+EXACT[d][1]:(Math.abs(th-d)<1e-6&&(d===0||d===90)? '= '+(d?'0':'1') :'≒ '+c.toFixed(3)))+' <span class="tag">（寬度）</span>';
    [30,45,60].forEach(k=>document.getElementById('r'+k).classList.toggle('on',ex&&d===k));
  }
  const range=document.getElementById('t');
  function setT(v){th=Math.max(0,Math.min(90,v));range.value=Math.round(th);render();}
  range.addEventListener('input',()=>{stop();setT(+range.value);});
  let drag=false;
  function angFromEvent(e){const pt=svg.createSVGPoint();pt.x=e.clientX;pt.y=e.clientY;const q=pt.matrixTransform(svg.getScreenCTM().inverse());
    let a=Math.atan2(O[1]-q.y,q.x-O[0])*180/Math.PI; a=Math.max(0,Math.min(90,a));
    for(const k of [0,30,45,60,90]) if(Math.abs(a-k)<1.5) a=k;
    return Math.round(a);}
  svg.addEventListener('pointerdown',e=>{drag=true;stop();svg.setPointerCapture(e.pointerId);setT(angFromEvent(e));});
  svg.addEventListener('pointermove',e=>{if(drag)setT(angFromEvent(e));});
  svg.addEventListener('pointerup',()=>{drag=false;});
  svg.addEventListener('pointercancel',()=>{drag=false;});
  let raf=null; const playBtn=document.getElementById('play');
  function animateTo(v,speed){stop();const target=v,dir=v>th?1:-1;let last=performance.now();
    if(target!==th) playBtn.textContent='❚❚ 暫停';
    function step(now){const dt=now-last;last=now;const nt=th+dir*dt*(speed||0.03);
      if((dir>0&&nt>=target)||(dir<0&&nt<=target)){setT(target);raf=null;playBtn.textContent='▶ 播放';return;}
      setT(nt);raf=requestAnimationFrame(step);}
    raf=requestAnimationFrame(step);}
  function stop(){if(raf){cancelAnimationFrame(raf);raf=null;}playBtn.textContent='▶ 播放';}
  const STOPS=[0,30,45,60,90];
  let playing=false;
  async function playAll(){
    if(th>=90) setT(0);
    for(const k of STOPS){ if(k<=th) continue;
      await new Promise(res=>{animateTo(k);const w=()=>raf?requestAnimationFrame(w):res();w();});
      if(!playing) return;
      playBtn.textContent='❚❚ 暫停';
      await new Promise(res=>setTimeout(res,k===90?0:1200));
      if(!playing) return; }
    playing=false; playBtn.textContent='▶ 播放';
  }
  playBtn.onclick=()=>{ if(playing){playing=false;stop();return;} playing=true; playAll().then(()=>{if(playing){playing=false;}playBtn.textContent=playing?'❚❚ 暫停':'▶ 播放';}); };
  const halt=()=>{playing=false;stop();};
  document.getElementById('next').onclick=()=>{halt();const n=STOPS.find(k=>k>th+1e-6);if(n!==undefined)animateTo(n,0.06);};
  document.getElementById('prev').onclick=()=>{halt();const p=[...STOPS].reverse().find(k=>k<th-1e-6);if(p!==undefined)animateTo(p,0.06);};
  document.querySelectorAll('button[data-a]').forEach(b=>b.onclick=()=>{halt();animateTo(+b.dataset.a,0.06);});
  document.getElementById('reset').onclick=()=>{halt();setT(0);};
  svg.addEventListener('pointerdown',()=>{playing=false;},true);
  range.addEventListener('input',()=>{playing=false;});
  render();
})();
</script>
</body>
</html>
