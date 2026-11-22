// Keep the current learning section when moving between Japanese and English.
document.addEventListener('click',event=>{
 const link=event.target.closest?.('a.lang');if(!link)return;
 const en=document.documentElement.lang==='en',base=en?'./':'./english.html',main=document.querySelector('#app'),params=new URLSearchParams();
 if(main.querySelector('.readiness-report'))params.set('readiness','');
 else if(main.querySelector('.daily-history'))params.set('history','');
 else if(main.querySelector('.why-home,.why-lesson')){const id=main.querySelector('.why-lesson')?.dataset.lessonId;params.set('why',id||'')}
 else if(main.querySelector('.year-home,.year-library-list'))params.set('years','');
 else if(main.querySelector('#history-map,.map-home')){params.set('map','');if(typeof mapArea!=='undefined')params.set('area',mapArea)}
 else if(main.querySelector('.section-catalog'))params.set('sections','');
 else if(main.querySelector('.learning-library')){params.set('learn','');const mod=main.querySelector('#library-module')?.value;if(mod)params.set('module',mod)}
 else if(main.querySelector('.game')&&typeof queue!=='undefined'&&queue[index]){const q=queue[index];if(q.yearQuiz)params.set('years','');else if(q.whyId)params.set('why',q.whyId);else if(q.entryId){params.set('learn','');if(q.module_id)params.set('module',q.module_id)}}
 const hash=typeof section!=='undefined'&&section!=='all'?'#'+section:'';link.href=base+(params.size?'?'+params.toString():'')+hash;
});
