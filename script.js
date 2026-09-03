const $=(q,r=document)=>r.querySelector(q), $$=(q,r=document)=>[...r.querySelectorAll(q)];
const clone=o=>JSON.parse(JSON.stringify(o));
const rand=a=>a[Math.floor(Math.random()*a.length)];
const unique=a=>[...new Set(a)];
const load=(k,f)=>{try{return JSON.parse(localStorage.getItem(k))??f}catch{return f}};
const save=(k,v)=>localStorage.setItem(k,JSON.stringify(v));

const DATA={
 species:{
  all:["Human","Elf","Demon","Vampire","Werewolf","Fairy","Android / Cyborg","Monster"],
  humanlike:["Human","Elf","Vampire"],fantasy:["Elf","Demon","Werewolf","Fairy","Monster"],
  supernatural:["Demon","Vampire","Werewolf","Fairy"],artificial:["Android / Cyborg"],monster:["Monster","Demon","Werewolf"]
 },
 character:{
  basics:{
   species:["Human","Elf","Demon","Vampire","Werewolf","Fairy","Android / Cyborg","Monster"],
   age:["Baby","Child","Teen","Young adult","Adult","Middle-aged","Older adult"],
   assignedAtBirth:["Female","Male","Intersex","Unknown"],
   gender:["Male","Female","Nonbinary","Agender","Bigender","Trigender","Polygender","Pangender","Genderfluid","Genderflux","Demiboy","Demigirl","Neutrois","Androgyn","Xenogender","Genderqueer","Genderfaun","Genderfae","Gendervoid","Cassgender","Libragender","Aliagender","Transmale","Transfemale","Questioning"],
   pronouns:["he/him","she/her","they/them","xe/xir","ze/zir","it/its"],
   genderExpression:["Feminine","Masculine","Androgynous","Fluid","Mixed"]
  },
  body:{
   build:["Very slim","Slim","Average","Curvy","Muscular","Stocky"],
   height:["Very short","Short","Average","Tall","Very tall"],
   skin:["Pale","Light","Tan","Medium brown","Dark brown","Deep brown","Lavender","Blue","Green","Grey","Red","Pink","Golden"],
   skinDetails:["None","Freckles","Beauty marks","Scars","Tattoos","Vitiligo","Scales","Fur patches","Glitter","Birthmark","Moles"],
   skinSecondary:["Pale","Light","Tan","Medium brown","Dark brown","Deep brown","Lavender","Blue","Green","Grey","Red","Pink","Golden"]
  },
  face:{eyeShape:["Round","Almond","Narrow","Large","Droopy","Sharp"],eyeColor:["Brown","Blue","Green","Grey","Violet","Red","Gold","Black","White","Neon"],eyeSpecial:["None","Heterochromia","Multicolored","Glowing"],pupils:["Round","Snake","Cat","No visible pupils"],extraEyes:["None","3 total","4 total","6 total"]},
  hair:{
   haircut:["Buzzcut","Pixie","Bob","Wolfcut","Shag","Mullet","Undercut","Long layers","Straight cut","Curly cut","Asymmetrical","Bald"],
   hairLength:["Very short","Short","Medium","Long","Very long"],
   hairColors:[{value:"Black",weight:25},{value:"Brown",weight:20},{value:"Blonde",weight:15},{value:"Red",weight:10},{value:"Pink",weight:8},{value:"Blue",weight:8},{value:"Purple",weight:7},{value:"Green",weight:4},{value:"White",weight:3}],
   hairArrangement:["Gradient","Ombre","Highlights","Streaks","Chunky streaks","Dip dye","Split dye","Color blocks","Underlayer","Peekaboo"],
   texture:["Straight","Slightly wavy","Wavy","Curly","Very curly","Kinky / coily"],hairAccessories:["Hair clips","Bow","Ribbon","Flowers","Headband","Beads","Decorative pins"]
  },
  fantasy:{ears:["Human","Elf","Pointed","Animal","No visible ears"],horns:["None","Small","Large","Antlers","Asymmetrical","Curved"],teeth:["Normal","Fangs","Sharp teeth","Multiple rows"],tail:["None","Demon","Cat","Fox","Reptile","Wolf"],wings:["None","Bird","Bat","Insect","Demonic","Magical"]},
  conditions:{
   medical:["None","Anemia","Asthma","Epilepsy","Diabetes","Migraine disorder","Heart condition","Visual impairment","Hearing impairment"],
   physical:["None","Limb missing","Limited mobility","Paralysis","Chronic joint instability","Dwarfism / short stature condition","Polio / poliomyelitis effects"],
   chronic:["None","Chronic fatigue / chronic illness","Chronic pain","Autoimmune condition","Long-term respiratory condition","Long-term digestive condition"],
   phobia:["None","Social phobia","Agoraphobia","Claustrophobia","Arachnophobia","Acrophobia","Cynophobia","Aquaphobia","Nyctophobia"],
   allergy:["None","Nut allergy","Peanut allergy","Milk allergy","Egg allergy","Wheat allergy","Soy allergy","Fish allergy","Shellfish allergy","Animal allergy","Pollen allergy","Latex allergy"],
   neurodivergence:["None","ADHD","Autism","Dyslexia","Dyscalculia","Dyspraxia","Tourette syndrome","OCD"],
   other:["None","Down syndrome","Body dysphoria","Gender dysphoria","Speech impairment","Chronic sleep disorder"]
  },
  personality:{
   traits:["Curious","Sarcastic","Protective","Shy","Confident","Chaotic","Patient","Blunt","Playful","Serious","Cautious","Reckless","Creative","Stubborn","Observant","Reserved","Sociable","Independent","Impulsive"],
   hobbies:["Reading","Drawing","Music","Gaming","Cooking","Sports","Gardening","Collecting","Photography","Writing","Crafting","Hiking"],
   likes:["Rain","Crowds","Quiet places","Animals","Nighttime","Bright colors","Old books","Parties","Small spaces","Heights","Dogs","Water","Spiders"],
   dislikes:["Noise","Heat","Being late","Small talk","Crowds","Mess","Rules","Parties","Small spaces","Heights","Dogs","Water","Spiders"]
  },
  identity:{
   sexualTarget:["Lesbian","Gay","Sapphic / gynosexual","Androsexual","Autosexual","Bisexual","Heterosexual","Pansexual","Omnisexual","Skoliosexual","Questioning"],
   sexualPattern:["Allosexual","Asexual","Demisexual","Lith / Akiosexual","Placiosexual","Fraysexual","Aegosexual","Abrosexual","Quoisexual","Reciprosexual","Bellussexual","Graysexual","Questioning","Orchidsexual","Avoisexual","Caedosexual","Berrysexual","Almondsexual","Detasexual","Nebulasexual"],
   romanticTarget:["Autoromantic","Biromantic","Gay","Hetero","Lesbian","Panromantic","Omniromantic","Skolioromantic","Polyromantic","Questioning"],
   romanticPattern:["Alloromantic","Aromantic","Demiromantic","Fluid","Grayromantic","Lithromantic","Reciproromantic","Frayromantic","Cupioromantic","Quoiromantic","Nebularomantic","Idemromantic","Questioning"],
   outness:["Closeted","Out to nobody","Out to one person","Out to a few people","Out to friends","Out to family","Mostly out","Fully out","Questioning / not labeled"]
  }
 },
 outfit:{
  clothes:{style:["Streetwear","Gothic","Punk","Emo","Y2K","Cottagecore","Dark Academia","Light Academia","Fairycore","Grunge","Cyberpunk","Techwear","Fantasy","Royal","Victorian","Casual","Formal","Sporty","Kawaii","Visual Kei","Harajuku"],top:["T-shirt","Crop top","Tank top","Hoodie","Sweater","Shirt","Blouse","Corset","Tunic","Turtleneck"],bottom:["Jeans","Shorts","Cargo pants","Leggings","Skirt","Mini skirt","Long skirt","Trousers","Pleated skirt"],onePiece:["None","Dress","Jumpsuit","Overall","Robe","Kimono"],shoes:["Sneakers","Boots","High heels","Sandals","Loafers","Platform shoes","Combat boots","Barefoot"],outerwear:["None","Jacket","Leather jacket","Bomber","Coat","Cardigan","Cape","Cloak","Oversized hoodie"]},
  accessories:{head:["Beanie","Cap","Hair clips","Bow","Crown","Tiara","Headband","Flowers"],neck:["Necklace","Choker","Scarf","Tie","Bow tie","Pendant","Ribbon"],ears:["Stud earrings","Hoops","Ear cuffs","Dangling earrings","Industrial jewelry"],armsHands:["Chain bracelet","Charm bracelet","Friendship bracelet","Bead bracelet","Cuff bracelet","Bangles","Signet ring","Gemstone ring","Stacking rings","Fingerless gloves","Leather gloves","Arm warmers","Watch"],waist:["Simple belt","Chain belt","Utility belt","Corset belt","Waist chain"],legs:["Tights","Fishnets","Knee socks","Thigh highs","Leg warmers","Garters","Thigh straps","Leg chains"],misc:["Bag","Backpack","Umbrella","Book","Headphones","Sunglasses","Camera","Keychain collection"]}
 },
 pets:{
  species:["Cat","Dog","Rabbit","Bird","Rat","Ferret","Snake","Lizard","Horse","Fantasy creature"],
  age:["Baby","Young","Adult","Senior"],
  jobs:["None","Guide / orientation","Medical alert","Seizure alert","Allergy alert","Hearing assistance","Mobility assistance","Psychiatric assistance","Retrieval / fetching","Medication reminder","Emergency alert","Emotional support","Therapy animal"],
  traits:["Affectionate","Independent","Curious","Protective","Shy","Bold","Clingy","Patient","Chaotic","Gentle","Stubborn","Mischievous","Observant","Dramatic"],
  energy:["Very calm","Calm","Moderate","Energetic","Tiny hurricane"],
  social:["Avoids strangers","Slow to warm up","Friendly","Very social","One-person animal","Selective"],
  likes:["Treats","Naps","Walks","Water","Sunbeams","Blankets","Toys","Being carried","People-watching","Music","Snow"],
  quirks:["Steals socks","Sleeps in weird places","Follows their person everywhere","Talks constantly","Collects random objects","Hates closed doors","Sits on books","Judges everyone silently","Greets people with a toy","Has one oddly specific favorite spot"]
 }
};

const CONDITION_META={
 "Anemia":"treatable","Asthma":"partially","Epilepsy":"partially","Diabetes":"partially","Migraine disorder":"partially","Heart condition":"partially","Visual impairment":"not","Hearing impairment":"not",
 "Limb missing":"not","Limited mobility":"partially","Paralysis":"not","Chronic joint instability":"partially","Dwarfism / short stature condition":"not","Polio / poliomyelitis effects":"not",
 "Chronic fatigue / chronic illness":"partially","Chronic pain":"partially","Autoimmune condition":"partially","Long-term respiratory condition":"partially","Long-term digestive condition":"partially",
 "Social phobia":"treatable","Agoraphobia":"treatable","Claustrophobia":"treatable","Arachnophobia":"treatable","Acrophobia":"treatable","Cynophobia":"treatable","Aquaphobia":"treatable","Nyctophobia":"treatable",
 "Nut allergy":"not","Peanut allergy":"not","Milk allergy":"not","Egg allergy":"not","Wheat allergy":"not","Soy allergy":"not","Fish allergy":"not","Shellfish allergy":"not","Animal allergy":"not","Pollen allergy":"not","Latex allergy":"not",
 "ADHD":"not","Autism":"not","Dyslexia":"not","Dyscalculia":"not","Dyspraxia":"not","Tourette syndrome":"not","OCD":"partially",
 "Down syndrome":"not","Body dysphoria":"partially","Gender dysphoria":"partially","Speech impairment":"partially","Chronic sleep disorder":"partially"
};

const META={
 "character.basics.species":{multi:true,count:1},
 "character.basics.age":{mode:"age"},
 "character.basics.pronouns":{multi:true,count:1,pronouns:true},
 "character.body.height":{mode:"height"},
 "character.body.skinDetails":{multi:true,count:1},
 "character.hair.hairLength":{mode:"hairLength"},
 "character.hair.hairColors":{multi:true,count:1},
 "character.hair.hairAccessories":{multi:true,count:0},
 "character.conditions.medical":{multi:true,count:0},"character.conditions.physical":{multi:true,count:0},"character.conditions.chronic":{multi:true,count:0},"character.conditions.phobia":{multi:true,count:0},"character.conditions.allergy":{multi:true,count:0},"character.conditions.neurodivergence":{multi:true,count:0},"character.conditions.other":{multi:true,count:0},
 "character.personality.traits":{multi:true,count:4},"character.personality.hobbies":{multi:true,count:2},"character.personality.likes":{multi:true,count:2},"character.personality.dislikes":{multi:true,count:2},
 "outfit.accessories.head":{multi:true,count:1,signature:true},"outfit.accessories.neck":{multi:true,count:1,signature:true},"outfit.accessories.ears":{multi:true,count:1,signature:true},"outfit.accessories.armsHands":{multi:true,count:2,signature:true},"outfit.accessories.waist":{multi:true,count:1,signature:true},"outfit.accessories.legs":{multi:true,count:1,signature:true},"outfit.accessories.misc":{multi:true,count:1,signature:true},
 "outfit.clothes.top":{signature:true},"outfit.clothes.bottom":{signature:true},"outfit.clothes.onePiece":{signature:true},"outfit.clothes.shoes":{signature:true},"outfit.clothes.outerwear":{signature:true}
};

const LABEL={
 basics:"Basics",body:"Body",face:"Face",hair:"Hair",fantasy:"Fantasy features",conditions:"Conditions / Disability / Health",personality:"Personality",identity:"Identity",clothes:"Clothing",accessories:"Accessories",
 species:"Species",age:"Age",assignedAtBirth:"Assigned at birth",gender:"Gender",pronouns:"Pronouns",genderExpression:"Gender expression",build:"Body build",height:"Height",skin:"Skin color",skinDetails:"Skin details",skinSecondary:"Second skin color (Vitiligo)",eyeShape:"Eye shape",eyeColor:"Eye color",eyeSpecial:"Eye special",pupils:"Pupils",extraEyes:"Additional eyes",haircut:"Haircut",hairLength:"Hair length",hairColors:"Hair color(s)",hairArrangement:"Hair color arrangement",texture:"Texture",hairAccessories:"Hair accessories",ears:"Ears",horns:"Horns / antlers",teeth:"Teeth",tail:"Tail",wings:"Wings",
 medical:"Medical — what is it?",physical:"Physical — what is it?",chronic:"Chronic — what is it?",phobia:"Phobia — what is it?",allergy:"Allergy — what is it?",neurodivergence:"Neurodivergence — what is it?",other:"Other — what is it?",
 traits:"Traits",hobbies:"Hobbies",likes:"Likes",dislikes:"Dislikes",sexualTarget:"Sexual attraction — target",sexualPattern:"Sexual attraction — pattern",romanticTarget:"Romantic attraction — target",romanticPattern:"Romantic attraction — pattern",outness:"Closet / out status",
 style:"Style",top:"Top",bottom:"Bottom",onePiece:"One-piece",shoes:"Shoes",outerwear:"Outerwear",head:"Head",neck:"Neck",armsHands:"Arms & hands",waist:"Waist",legs:"Legs",misc:"Misc."
};

const ERA_RULES=[["appearance","Changing appearance allowed",true],["hair","Changing hair allowed",true],["gender","Changing gender allowed",false],["pronouns","Changing pronouns allowed",false],["genderExpression","Changing gender expression allowed",true],["sexuality","Changing sexual orientation allowed",false],["romantic","Changing romantic orientation allowed",false],["outness","Changing closet/out status allowed",true],["healing","Healing treatable conditions allowed",false],["pets","Pet changes allowed",true],["outfit","Changing outfit allowed",true],["signature","Signature item change allowed",false],["personality","Personality evolution allowed",true],["name","Name change allowed",false]];

const defaultState=()=>({characterId:1,name:"",values:{},locks:{},hidden:{},counts:{},modes:{age:"descriptive",height:"descriptive",hairLength:"descriptive"},signatures:{},pets:[],eras:[],history:[],ignoreOdds:false,speciesPreset:"all"});
let state=Object.assign(defaultState(),load("uocr_v3_state",{}));
function persist(){save("uocr_v3_state",state)}
function path(type,section,key){return `${type}.${section}.${key}`}
function get(p){return p.split('.').reduce((o,k)=>o?.[k],state.values)}
function set(p,v){const a=p.split('.');let o=state.values;for(let i=0;i<a.length-1;i++)o=o[a[i]]??={};o[a.at(-1)]=v}
function countFor(p){return Math.max(0,Number(state.counts[p]??META[p]?.count??1))}
function optionValue(x){return typeof x==='object'?x.value:x}
function pick(pool){
 if(!pool?.length)return "—";
 if(state.ignoreOdds)return optionValue(rand(pool));
 if(typeof pool[0]!=="object")return rand(pool);
 const total=pool.reduce((s,x)=>s+(x.weight||1),0);let r=Math.random()*total;
 for(const x of pool){r-=x.weight||1;if(r<=0)return x.value}return pool.at(-1).value;
}
function many(pool,n,existing=[]){
 const out=existing.slice(0,n);let tries=0;
 while(out.length<n&&tries<500){const v=pick(pool);if(!out.includes(v))out.push(v);tries++}
 return out;
}
function speciesPool(){return DATA.species[state.speciesPreset]||DATA.species.all}
function haircutLengths(cut){
 const m={"Bald":["Very short"],"Buzzcut":["Very short","Short"],"Pixie":["Very short","Short"],"Bob":["Short","Medium"],"Wolfcut":["Short","Medium","Long"],"Shag":["Short","Medium","Long"],"Mullet":["Short","Medium","Long"],"Undercut":["Very short","Short","Medium","Long"],"Long layers":["Medium","Long","Very long"],"Straight cut":["Short","Medium","Long","Very long"],"Curly cut":["Short","Medium","Long","Very long"],"Asymmetrical":["Very short","Short","Medium","Long"]};
 return m[cut]||DATA.character.hair.hairLength;
}
const RANGE={
 age:{"Baby":[0,2],"Child":[3,12],"Teen":[13,17],"Young adult":[18,29],"Adult":[30,49],"Middle-aged":[50,64],"Older adult":[65,100]},
 height:{"Very short":[90,149],"Short":[150,164],"Average":[165,179],"Tall":[180,194],"Very tall":[195,220]},
 hairLength:{"Very short":[0,5],"Short":[6,20],"Medium":[21,45],"Long":[46,80],"Very long":[81,160]}
};
function randomInt(a,b){return Math.floor(Math.random()*(b-a+1))+a}
function descriptiveFromExact(kind,n){for(const[k,[a,b]]of Object.entries(RANGE[kind]))if(n>=a&&n<=b)return k;return Object.keys(RANGE[kind])[0]}
function exactFromDescription(kind,d){const [a,b]=RANGE[kind][d]||[0,100];return randomInt(a,b)}
function modeDisplay(kind,v){if(state.modes[kind]==="exact")return `${v}${kind==='age'?' years':' cm'}`;return v}

function allowedSexualTargets(){
 const g=get("character.basics.gender");let pool=[...DATA.character.identity.sexualTarget];
 const femaleLike=["Female","Transfemale","Demigirl","Genderfae"],maleLike=["Male","Transmale","Demiboy","Genderfaun"];
 if(femaleLike.includes(g))pool=pool.filter(x=>x!=="Gay");
 else if(maleLike.includes(g))pool=pool.filter(x=>x!=="Lesbian");
 else if(g!=="Questioning")pool=pool.filter(x=>!["Lesbian","Gay","Heterosexual"].includes(x));
 if(g==="Agender")pool=pool.filter(x=>x!=="Lesbian");
 return pool;
}
function allowedRomanticTargets(){
 const g=get("character.basics.gender");let pool=[...DATA.character.identity.romanticTarget];
 const femaleLike=["Female","Transfemale","Demigirl","Genderfae"],maleLike=["Male","Transmale","Demiboy","Genderfaun"];
 if(femaleLike.includes(g))pool=pool.filter(x=>x!=="Gay");
 else if(maleLike.includes(g))pool=pool.filter(x=>x!=="Lesbian");
 else if(g!=="Questioning")pool=pool.filter(x=>!["Lesbian","Gay","Hetero"].includes(x));
 if(g==="Agender")pool=pool.filter(x=>x!=="Lesbian");
 return pool;
}
function personalityPool(key){
 let pool=[...DATA.character.personality[key]];const ph=get("character.conditions.phobia")||[];
 if(key==="likes"){
  const banned=[];
  if(ph.includes("Social phobia")||ph.includes("Agoraphobia"))banned.push("Crowds","Parties");
  if(ph.includes("Claustrophobia"))banned.push("Small spaces");if(ph.includes("Arachnophobia"))banned.push("Spiders");if(ph.includes("Acrophobia"))banned.push("Heights");if(ph.includes("Cynophobia"))banned.push("Dogs");if(ph.includes("Aquaphobia"))banned.push("Water");
  pool=pool.filter(x=>!banned.includes(x));
 }
 return pool;
}
function poolFor(type,section,key){
 if(type==="character"&&section==="basics"&&key==="species")return speciesPool();
 if(type==="character"&&section==="conditions")return DATA.character.conditions[key].filter(x=>x!=="None");
 if(type==="character"&&section==="body"&&key==="skinDetails"&&countFor(path(type,section,key))>0)return DATA.character.body.skinDetails.filter(x=>x!=="None");
 if(type==="character"&&section==="basics"&&key==="pronouns"&&countFor(path(type,section,key))===1)return [...DATA.character.basics.pronouns,"Any / All pronouns"];
 if(type==="character"&&section==="hair"&&key==="hairLength")return haircutLengths(get("character.hair.haircut"));
 if(type==="character"&&section==="hair"&&key==="haircut"&&state.locks["character.hair.hairLength"]){const len=get("character.hair.hairLength"),desc=typeof len==="number"?descriptiveFromExact("hairLength",len):len;return DATA.character.hair.haircut.filter(c=>haircutLengths(c).includes(desc))}
 if(type==="character"&&section==="identity"&&key==="sexualTarget")return allowedSexualTargets();
 if(type==="character"&&section==="identity"&&key==="romanticTarget")return allowedRomanticTargets();
 if(type==="character"&&section==="personality")return personalityPool(key);
 return DATA[type][section][key];
}
function isDynamicDisabled(type,section,key){
 if(type==="character"&&section==="body"&&key==="skinSecondary")return !(get("character.body.skinDetails")||[]).includes("Vitiligo");
 if(type==="character"&&section==="hair"&&key==="hairArrangement")return (get("character.hair.hairColors")||[]).length<2;
 return false;
}
function enforceDependencies(trigger=""){
 const species=get("character.basics.species")||[];
 if(species.includes("Vampire")&&!state.locks["character.fantasy.teeth"])set("character.fantasy.teeth","Fangs");
 const wings=get("character.fantasy.wings");if(wings==="None"){}
 const cut=get("character.hair.haircut"),len=get("character.hair.hairLength");
 const allowedLens=haircutLengths(cut);
 if(cut&&len!=null){const desc=typeof len==="number"?descriptiveFromExact("hairLength",len):len;if(!allowedLens.includes(desc)&&!state.locks["character.hair.hairLength"]){const nd=pick(allowedLens);set("character.hair.hairLength",state.modes.hairLength==="exact"?exactFromDescription("hairLength",nd):nd)}}
 const details=get("character.body.skinDetails")||[];
 if(details.includes("Vitiligo")){
  const primary=get("character.body.skin"),secondary=get("character.body.skinSecondary");
  if(!secondary||secondary===primary){const pool=DATA.character.body.skinSecondary.filter(x=>x!==primary);set("character.body.skinSecondary",pick(pool))}
 } else set("character.body.skinSecondary",null);
 if((get("character.hair.hairColors")||[]).length<2)set("character.hair.hairArrangement","—");
 const g=get("character.basics.gender");
 if(trigger.includes("gender")||!allowedSexualTargets().includes(get("character.identity.sexualTarget")))set("character.identity.sexualTarget",pick(allowedSexualTargets()));
 if(trigger.includes("gender")||!allowedRomanticTargets().includes(get("character.identity.romanticTarget")))set("character.identity.romanticTarget",pick(allowedRomanticTargets()));
 const ph=get("character.conditions.phobia")||[];
 let likes=get("character.personality.likes")||[];
 const validLikes=personalityPool("likes");if(likes.some(x=>!validLikes.includes(x)))set("character.personality.likes",many(validLikes,countFor("character.personality.likes"),likes.filter(x=>validLikes.includes(x))));
 let dislikes=get("character.personality.dislikes")||[];
 const forced=[];if(ph.includes("Social phobia")||ph.includes("Agoraphobia"))forced.push("Crowds");if(ph.includes("Claustrophobia"))forced.push("Small spaces");if(ph.includes("Arachnophobia"))forced.push("Spiders");if(ph.includes("Acrophobia"))forced.push("Heights");if(ph.includes("Cynophobia"))forced.push("Dogs");if(ph.includes("Aquaphobia"))forced.push("Water");
 if(forced.length){const n=Math.max(countFor("character.personality.dislikes"),forced.length);state.counts["character.personality.dislikes"]=n;set("character.personality.dislikes",many(DATA.character.personality.dislikes,n,unique([...forced,...dislikes])))}
}
function rollField(type,section,key,{force=false}={}){
 const p=path(type,section,key);if(!force&&state.locks[p])return;if(isDynamicDisabled(type,section,key))return;
 const meta=META[p]||{};const pool=poolFor(type,section,key);
 if(meta.mode){
  if(meta.mode==="hairLength"){
   const desc=pick(pool);
   set(p,state.modes.hairLength==="exact"?exactFromDescription("hairLength",desc):desc);
  }else{
   const desc=pick(pool);set(p,state.modes[meta.mode]==="exact"?exactFromDescription(meta.mode,desc):desc);
  }
 }else if(meta.multi){set(p,many(pool,countFor(p)))}else set(p,pick(pool));
 enforceDependencies(p);
}
function adjustCount(p,n){
 n=Math.max(0,n);state.counts[p]=n;const [type,section,key]=p.split('.');let current=get(p);current=Array.isArray(current)?current:current?[current]:[];
 let pool=poolFor(type,section,key);set(p,many(pool,n,current));enforceDependencies(p);
}
function switchMode(kind,newMode){
 if(state.modes[kind]===newMode)return;const p=kind==="age"?"character.basics.age":kind==="height"?"character.body.height":"character.hair.hairLength";const old=get(p);if(old!=null){
  if(newMode==="exact"){const desc=typeof old==="number"?descriptiveFromExact(kind,old):old;let exact=exactFromDescription(kind,desc);if(kind==="hairLength"){
    const allowed=haircutLengths(get("character.hair.haircut"));if(!allowed.includes(desc))exact=exactFromDescription(kind,allowed[0]);
   }set(p,exact)}else{const desc=typeof old==="number"?descriptiveFromExact(kind,old):old;set(p,desc)}
 }state.modes[kind]=newMode;enforceDependencies(p);
}
function rollSection(type,section){for(const key of Object.keys(DATA[type][section]))rollField(type,section,key)}
function rollCharacter(){for(const s of Object.keys(DATA.character))rollSection("character",s);render();history("Character reroll")}
function rollOutfit(){for(const s of Object.keys(DATA.outfit))rollSection("outfit",s);render();history("Outfit roll")}
function newCharacter(){
 history("Before new character");state.characterId+=1;state.name="";state.values={};state.locks={};state.hidden={};state.signatures={};state.counts={};state.modes={age:"descriptive",height:"descriptive",hairLength:"descriptive"};state.pets=[];
 for(const s of Object.keys(DATA.character))rollSection("character",s);for(const s of Object.keys(DATA.outfit))rollSection("outfit",s);render();history("New character")
}
function showValue(p,v){
 if(v==null||v==="")return "—";if(Array.isArray(v))return v.length?v.join(" • "):"None";
 if(p==="character.basics.age")return modeDisplay("age",v);if(p==="character.body.height")return modeDisplay("height",v);if(p==="character.hair.hairLength")return modeDisplay("hairLength",v);return v;
}
function resultCard(type,section,key){
 const p=path(type,section,key),meta=META[p]||{},disabled=isDynamicDisabled(type,section,key),v=get(p);let extra="";
 if(meta.multi)extra+=`<div class="multi-control"><label>Number of results<input type="number" min="0" data-count="${p}" value="${countFor(p)}"></label></div>`;
 if(meta.mode){const k=meta.mode;extra+=`<div class="mode-row"><button class="pill ${state.modes[k]==='descriptive'?'active':''}" data-mode="${k}:descriptive">Descriptive</button><button class="pill ${state.modes[k]==='exact'?'active':''}" data-mode="${k}:exact">Exact</button></div>`}
 const sig=meta.signature?`<button class="icon-btn" title="Signature item" data-signature="${p}">${state.signatures[p]?'💖':'♡'}</button>`:"";
 return `<article class="result-card ${state.locks[p]?'locked':''} ${state.signatures[p]?'signature':''} ${disabled?'disabled':''}"><div class="result-top"><div><div class="result-title">${LABEL[key]||key}</div><div class="result-value">${showValue(p,v)}</div></div><div class="card-actions">${sig}<button class="icon-btn" title="Lock" data-lock="${p}">${state.locks[p]?'🔒':'🔓'}</button><button class="icon-btn" title="Reroll only this" data-reroll="${p}" ${disabled?'disabled':''}>🎲</button></div></div>${extra}</article>`;
}
function renderType(type,target){
 const blocks=[];const hidden=[];
 for(const section of Object.keys(DATA[type])){
  const hp=`${type}.${section}`;if(state.hidden[hp]){hidden.push(`<button class="hidden-chip" data-show-section="${hp}">${LABEL[section]||section} ＋ show</button>`);continue}
  blocks.push(`<section class="category-section"><div class="category-head"><h3>${LABEL[section]||section}</h3><div class="category-head-actions"><button class="icon-btn" data-roll-section="${type}.${section}">🎲 section</button><button class="icon-btn" data-hide-section="${hp}">👁️</button></div></div><div class="category-grid">${Object.keys(DATA[type][section]).map(k=>resultCard(type,section,k)).join("")}</div></section>`)
 }
 target.innerHTML=blocks.join("")+(hidden.length?`<div class="hidden-bin"><p class="small">Hidden categories</p><div class="hidden-items">${hidden.join("")}</div></div>`:"")
}
function renderCore(){renderType("character",$("#characterSections"));renderType("outfit",$("#outfitSections"))}

function allConditions(){return Object.values(state.values.character?.conditions||{}).flat().filter(x=>x&&x!=="None")}
function relevantJobs(){const c=allConditions(),j=[];if(c.some(x=>/Epilepsy/i.test(x)))j.push("Seizure alert");if(c.some(x=>/Hearing impairment/i.test(x)))j.push("Hearing assistance");if(c.some(x=>/mobility|paralysis|limb missing/i.test(x)))j.push("Mobility assistance","Retrieval / fetching");if(c.some(x=>/allergy/i.test(x)))j.push("Allergy alert");if(c.some(x=>/ADHD|Autism|OCD|phobia|dysphoria/i.test(x)))j.push("Psychiatric assistance","Emotional support");if(c.some(x=>/Diabetes|Heart condition|Asthma/i.test(x)))j.push("Medical alert");return unique(j)}
function pet(){return{id:crypto.randomUUID?.()||Math.random().toString(36).slice(2),name:"",species:"",age:"",jobCount:0,jobs:[],traits:[],energy:"",social:"",likes:[],quirk:"",locks:{}}}
function petPickJobs(p,n,existing=[]){const rel=relevantJobs(),pool=[...DATA.pets.jobs,...rel,...rel];return many(pool,n,existing).filter(x=>x!=="None"||n===1)}
function rollPetField(p,key){if(p.locks[key])return;switch(key){case"species":p.species=pick(DATA.pets.species);break;case"age":p.age=pick(DATA.pets.age);break;case"jobs":p.jobs=petPickJobs(p,p.jobCount);break;case"traits":p.traits=many(DATA.pets.traits,3);break;case"energy":p.energy=pick(DATA.pets.energy);break;case"social":p.social=pick(DATA.pets.social);break;case"likes":p.likes=many(DATA.pets.likes,2);break;case"quirk":p.quirk=pick(DATA.pets.quirks);break}}
function rollPet(p){for(const k of ["species","age","jobs","traits","energy","social","likes","quirk"])rollPetField(p,k)}
function syncPets(){let n=Math.max(0,Number($("#petCount").value)||0);while(state.pets.length<n){const p=pet();rollPet(p);state.pets.push(p)}while(state.pets.length>n)state.pets.pop()}
function petField(i,key,label,value){return `<div class="pet-result"><div><span class="result-title">${label}</span><div class="result-value">${Array.isArray(value)?(value.length?value.join(" • "):"None"):(value||"—")}</div></div><div class="card-actions"><button class="icon-btn" data-pet-field-lock="${i}:${key}">${state.pets[i].locks[key]?'🔒':'🔓'}</button><button class="icon-btn" data-pet-field-roll="${i}:${key}">🎲</button></div></div>`}
function renderPets(){
 $("#petCount").value=state.pets.length;
 $("#petList").innerHTML=state.pets.length?state.pets.map((p,i)=>`<article class="pet-card"><div class="pet-card-head"><div><p class="eyebrow">PET #${i+1}</p><h3>${p.name||"Unnamed pet"}</h3></div><div class="row"><button class="icon-btn" data-pet-roll="${i}" title="Reroll all unlocked fields">🎲 all</button><button class="icon-btn" data-pet-delete="${i}">🗑️</button></div></div><div class="pet-name-row"><label>Name<input data-pet-name="${i}" value="${(p.name||"").replaceAll('"','&quot;')}"></label><label>Number of jobs<input type="number" min="0" data-pet-jobcount="${i}" value="${p.jobCount}"></label></div><div class="pet-result-grid">${petField(i,"species","Species",p.species)}${petField(i,"age","Age",p.age)}${petField(i,"jobs","Jobs / roles",p.jobs)}${petField(i,"traits","Personality traits",p.traits)}${petField(i,"energy","Energy",p.energy)}${petField(i,"social","Social style",p.social)}${petField(i,"likes","Likes",p.likes)}${petField(i,"quirk","Quirk",p.quirk)}</div></article>`).join(""):`<div class="empty">No pets for this character. 🐾</div>`
}

function snapshot(){return{name:state.name,characterId:state.characterId,values:clone(state.values),signatures:clone(state.signatures),pets:clone(state.pets)}}
function eraRules(){return Object.fromEntries($$("[data-era-rule]").map(x=>[x.dataset.eraRule,x.checked]))}
function healTreatableCondition(){
 const entries=[];for(const [cat,vals]of Object.entries(state.values.character?.conditions||{}))for(const v of (Array.isArray(vals)?vals:[vals]))if(CONDITION_META[v]==="treatable")entries.push([cat,v]);
 if(!entries.length)return;const [cat,v]=rand(entries),p=`character.conditions.${cat}`,a=get(p)||[];set(p,a.filter(x=>x!==v));state.counts[p]=Math.max(0,(state.counts[p]??a.length)-1)
}
function createEra(){
 const r=eraRules();if(r.hair)rollSection("character","hair");if(r.appearance){rollSection("character","body");rollSection("character","face");rollSection("character","fantasy")}if(r.gender)rollField("character","basics","gender");if(r.pronouns)rollField("character","basics","pronouns");if(r.genderExpression)rollField("character","basics","genderExpression");if(r.sexuality){rollField("character","identity","sexualTarget");rollField("character","identity","sexualPattern")}if(r.romantic){rollField("character","identity","romanticTarget");rollField("character","identity","romanticPattern")}if(r.outness)rollField("character","identity","outness");if(r.personality)rollSection("character","personality");if(r.outfit)for(const s of Object.keys(DATA.outfit))for(const k of Object.keys(DATA.outfit[s])){const p=`outfit.${s}.${k}`;if(state.signatures[p]&&!r.signature)continue;rollField("outfit",s,k)}if(r.healing&&Math.random()<.45)healTreatableCondition();if(r.pets)state.pets.forEach(rollPet);state.eras.push({id:state.eras.length+1,created:new Date().toLocaleString("de-DE"),rules:r,snapshot:snapshot()});render()
}
function renderEras(){$("#eraList").innerHTML=state.eras.length?state.eras.map((e,i)=>`<article class="archive-card"><p class="eyebrow">ERA ${e.id}</p><h3>${e.snapshot.name||`Character #${e.snapshot.characterId}`}</h3><p class="small">${e.created}</p><div class="archive-actions"><button class="btn" data-era-view="${i}">View</button><button class="btn" data-era-load="${i}">Load</button></div></article>`).join(""):`<div class="empty">No eras yet.</div>`}
function history(reason){state.history.unshift({reason,date:new Date().toLocaleString("de-DE"),snapshot:snapshot()});state.history=state.history.slice(0,100);persist();renderArchives()}
function renderArchives(){$("#historyList").innerHTML=state.history.length?state.history.map((x,i)=>`<article class="archive-card"><p class="eyebrow">${x.reason}</p><h3>${x.snapshot.name||`Character #${x.snapshot.characterId}`}</h3><p class="small">${x.date}</p><div class="archive-actions"><button class="btn" data-archive-view="${i}">View</button><button class="btn" data-archive-load="${i}">Load</button></div></article>`).join(""):`<div class="empty">No history yet.</div>`}
function loadSnap(s){state.name=s.name||"";state.characterId=s.characterId||state.characterId;state.values=clone(s.values||{});state.signatures=clone(s.signatures||{});state.pets=clone(s.pets||[]);render()}
function viewSnap(s,title){const rows=[];(function walk(o,p=""){for(const[k,v]of Object.entries(o||{})){const l=p?`${p} / ${LABEL[k]||k}`:(LABEL[k]||k);if(v&&typeof v==="object"&&!Array.isArray(v))walk(v,l);else rows.push([l,Array.isArray(v)?v.join(" • "):v])}})(s.values);$("#dialogTitle").textContent=title;$("#dialogBody").innerHTML=`<div class="detail-grid"><div class="detail"><b>Name</b><span>${s.name||"Unnamed"}</span></div>${rows.map(([k,v])=>`<div class="detail"><b>${k}</b><span>${v??"—"}</span></div>`).join("")}</div>`;$("#viewDialog").showModal()}
function render(){renderCore();renderPets();renderEras();renderArchives();$("#characterName").value=state.name;$("#characterIdLabel").textContent=`Character #${state.characterId}`;$("#ignoreOdds").checked=state.ignoreOdds;$("#speciesPreset").value=state.speciesPreset;persist()}

$("#eraRules").innerHTML=ERA_RULES.map(([k,l,c])=>`<label class="check-row"><input type="checkbox" data-era-rule="${k}" ${c?'checked':''}><span>${l}</span></label>`).join("");

document.addEventListener("click",e=>{
 const t=e.target.closest("[data-tab]");if(t){$$('.nav-btn').forEach(x=>x.classList.remove('active'));$$('.tab').forEach(x=>x.classList.remove('active'));t.classList.add('active');$(`#tab-${t.dataset.tab}`).classList.add('active');return}
 const r=e.target.closest("[data-reroll]");if(r){rollField(...r.dataset.reroll.split('.'));render();return}
 const l=e.target.closest("[data-lock]");if(l){state.locks[l.dataset.lock]=!state.locks[l.dataset.lock];render();return}
 const s=e.target.closest("[data-signature]");if(s){state.signatures[s.dataset.signature]=!state.signatures[s.dataset.signature];render();return}
 const rs=e.target.closest("[data-roll-section]");if(rs){rollSection(...rs.dataset.rollSection.split('.'));render();return}
 const h=e.target.closest("[data-hide-section]");if(h){state.hidden[h.dataset.hideSection]=true;render();return}
 const sh=e.target.closest("[data-show-section]");if(sh){state.hidden[sh.dataset.showSection]=false;render();return}
 const m=e.target.closest("[data-mode]");if(m){const[k,v]=m.dataset.mode.split(':');switchMode(k,v);render();return}
 const pr=e.target.closest("[data-pet-roll]");if(pr){rollPet(state.pets[+pr.dataset.petRoll]);render();return}
 const pfr=e.target.closest("[data-pet-field-roll]");if(pfr){const[i,k]=pfr.dataset.petFieldRoll.split(':');rollPetField(state.pets[+i],k);render();return}
 const pfl=e.target.closest("[data-pet-field-lock]");if(pfl){const[i,k]=pfl.dataset.petFieldLock.split(':');const p=state.pets[+i];p.locks[k]=!p.locks[k];render();return}
 const pd=e.target.closest("[data-pet-delete]");if(pd){state.pets.splice(+pd.dataset.petDelete,1);render();return}
 const ev=e.target.closest("[data-era-view]");if(ev){const x=state.eras[+ev.dataset.eraView];viewSnap(x.snapshot,`Era ${x.id}`);return}
 const el=e.target.closest("[data-era-load]");if(el){loadSnap(state.eras[+el.dataset.eraLoad].snapshot);return}
 const av=e.target.closest("[data-archive-view]");if(av){const x=state.history[+av.dataset.archiveView];viewSnap(x.snapshot,x.snapshot.name||"Character");return}
 const al=e.target.closest("[data-archive-load]");if(al){loadSnap(state.history[+al.dataset.archiveLoad].snapshot);return}
});

document.addEventListener("change",e=>{
 if(e.target.matches("[data-count]")){adjustCount(e.target.dataset.count,+e.target.value||0);render();return}
 if(e.target.matches("[data-pet-name]")){state.pets[+e.target.dataset.petName].name=e.target.value;persist();return}
 if(e.target.matches("[data-pet-jobcount]")){const p=state.pets[+e.target.dataset.petJobcount],n=Math.max(0,+e.target.value||0);p.jobCount=n;p.jobs=petPickJobs(p,n,p.jobs);render();return}
});

$("#rollCharacter").onclick=rollCharacter;
$("#rollOutfit").onclick=rollOutfit;
$("#newCharacter").onclick=newCharacter;
$("#rollPets").onclick=()=>{state.pets.forEach(rollPet);render();history("Pet roll")};
$("#addPet").onclick=()=>{const p=pet();rollPet(p);state.pets.push(p);render()};
$("#petCount").onchange=()=>{syncPets();render()};
$("#createEra").onclick=createEra;
$("#characterName").oninput=e=>{state.name=e.target.value;persist()};
$("#clearHistory").onclick=()=>{state.history=[];render()};
$("#closeDialog").onclick=()=>$("#viewDialog").close();
$("#speciesPreset").onchange=e=>{state.speciesPreset=e.target.value;persist()};
$("#ignoreOdds").onchange=e=>{state.ignoreOdds=e.target.checked;persist()};

if(!Object.keys(state.values||{}).length){for(const s of Object.keys(DATA.character))rollSection("character",s);for(const s of Object.keys(DATA.outfit))rollSection("outfit",s)}
render();
