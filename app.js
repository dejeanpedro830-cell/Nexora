const $=id=>document.getElementById(id);
const goal=$('goal'),category=$('category'),mission=$('mission'),goalTitle=$('goalTitle'),step=$('step'),bar=$('bar'),status=$('status'),coachText=$('coachText');
let progress=0;
function firstStep(g,c){
 const x=g.toLowerCase();
 if(c==='Fitness') return 'Do 10 minutes of simple movement today.';
 if(c==='Study') return 'Study one small topic for 20 focused minutes.';
 if(c==='Money') return 'Write down one thing you want to save for and its target amount.';
 if(c==='Career') return 'Spend 20 minutes learning one useful skill for your future.';
 if(c==='Skills') return 'Practice your chosen skill for 15 focused minutes.';
 if(x.includes('sleep')) return 'Set a simple bedtime and put your phone away 20 minutes before it.';
 return 'Spend 10 minutes doing the smallest useful action toward this goal.';
}
$('create').onclick=()=>{
 const g=goal.value.trim(); if(!g){goal.focus();return}
 goalTitle.textContent=g; step.textContent=firstStep(g,category.value);
 mission.classList.remove('hidden'); progress=0; update(); mission.scrollIntoView({behavior:'smooth'});
 localStorage.setItem('nexoraGoal',g);
};
$('complete').onclick=()=>{progress=Math.min(100,progress+25);update()};
function update(){bar.style.width=progress+'%';status.textContent=progress+'% complete • '+(progress>=100?'Mission complete. Great work!':'Keep moving, one step at a time.')};
document.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>{
 const g=goal.value.trim()||'your goal';
 const q=b.dataset.q;
 coachText.textContent=q==='motivation'?`You don't need to finish everything today. Just make the next move on “${g}”.`:q==='plan'?`Pick one outcome, split it into small actions, and complete the first one today.`:`Make the task smaller. Choose one action that takes 10–20 minutes and start there.`;
});
const saved=localStorage.getItem('nexoraGoal'); if(saved){goal.value=saved}
