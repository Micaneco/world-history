// A brief, non-blocking celebration; no flashes or sound of its own.
function celebrateCorrect(){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  document.querySelector('.fireworks')?.remove();
  const layer=document.createElement('div');
  layer.className='fireworks';layer.setAttribute('aria-hidden','true');
  document.body.appendChild(layer);
  const colors=['#4b9bd3','#74bfee','#b5dff9','#aaa0df','#e5bd69'];
  const width=window.innerWidth,height=window.innerHeight;
  const centers=[[width*.3,height*.36],[width*.7,height*.32],[width*.5,height*.23]];
  centers.forEach(([x,y],burst)=>{
    for(let i=0;i<22;i++){
      const spark=document.createElement('i'),angle=i/22*Math.PI*2;
      const distance=45+Math.random()*70;
      spark.style.left=x+'px';spark.style.top=y+'px';
      spark.style.background=colors[i%colors.length];layer.appendChild(spark);
      spark.animate([
        {transform:'translate(-50%,-50%) scale(.3)',opacity:0},
        {transform:'translate(-50%,-50%) scale(1)',opacity:1,offset:.12},
        {transform:`translate(calc(-50% + ${Math.cos(angle)*distance}px),calc(-50% + ${Math.sin(angle)*distance+25}px)) scale(.2)`,opacity:0}
      ],{duration:850,delay:burst*140,easing:'cubic-bezier(.15,.65,.35,1)',fill:'both'});
    }
  });
  setTimeout(()=>layer.remove(),1300);
}
