(function(){
  var t=document.getElementById('title'),txt='Happy Birthday';
  txt.split('').forEach(function(c,i){var s=document.createElement('span');
    if(c===' '){s.className='sp';s.innerHTML='&nbsp;'}else s.textContent=c;
    s.style.animationDelay=(i*0.1)+'s,'+(i*0.3)+'s';t.appendChild(s)});
  var cv=document.getElementById('fx'),cx=cv.getContext('2d'),W,H,P=[],cols=['#ff5e9c','#ffd23f','#5ef2c2','#6ab8ff','#c58bff','#ff8a3d'];
  function rs(){var d=window.devicePixelRatio||1;W=innerWidth;H=innerHeight;cv.width=W*d;cv.height=H*d;cx.setTransform(d,0,0,d,0,0)}
  rs();addEventListener('resize',rs);
  function boom(x,y){var c=cols[Math.random()*cols.length|0],c2=cols[Math.random()*cols.length|0],n=70;
    for(var i=0;i<n;i++){var a=Math.PI*2*i/n,s=1.5+Math.random()*3.5;
      P.push({x:x,y:y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,l:1,c:i%2?c:c2})}}
  function launch(x){var y=H*(.12+Math.random()*.4);boom(x==null?W*(.08+Math.random()*.84):x,y)}
  addEventListener('pointerdown',function(e){boom(e.clientX,e.clientY);boom(e.clientX,e.clientY)});
  setInterval(function(){launch()},650);
  for(var k=0;k<3;k++)setTimeout(launch,k*250);
  function draw(){cx.fillStyle='rgba(11,8,32,.22)';cx.fillRect(0,0,W,H);
    for(var i=P.length-1;i>=0;i--){var p=P[i];p.x+=p.vx;p.y+=p.vy;p.vx*=.98;p.vy=p.vy*.98+.05;p.l-=.013;
      if(p.l<=0){P.splice(i,1);continue}
      cx.globalAlpha=p.l;cx.fillStyle=p.c;cx.beginPath();cx.arc(p.x,p.y,2.2,0,6.3);cx.fill()}
    cx.globalAlpha=1;requestAnimationFrame(draw)}
  draw();
})();
