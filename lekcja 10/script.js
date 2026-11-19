"use strict";

let avatar = document.getElementById("avatar");
let name = document.getElementById("name");
let description = document.getElementById("description");
let toggleBtn = document.getElementById("toggle-btn");


toggleBtn.addEventListener("click", function(){

   let isHero = document.body.classList.contains("hero");

 if(isHero){
    document.body.classList.replace("hero", "villain");
    name.textContent = "⛓️ 𝕽𝖚𝖉𝖆 ⛓️ ";
    description.textContent = "Ma swój horror ꒰ঌ 🥀😈🩸 ໒꒱🖤⛧༺♱༻⛧🖤૮₍ ˃ ⤙ ˂ ₎ა 🔪🖤† 666 † 👿🔥⛓️🕸️🦇😈🥀🖤";
    avatar.src = "https://api.dicebear.com/9.x/adventurer/svg?seed=Blond";
    avatar.style.borderColor = '#fd803d';
    toggleBtn.textContent = " Blondyna"
 }else{
    document.body.classList.replace("villain", "hero");
    name.textContent = "₊˚⊹♡ 𝔹𝕝𝕠𝕟𝕕𝕪𝕟𝕒 ♡⊹˚₊૮₍ ˶ᵔ ᵕ ᵔ˶ ₎ა 🍓";
    description.textContent = "Jest mądra🩷 かわいい 🩷୨୧・｡ﾟ🌷・｡ﾟ୨୧૮₍ ˶ᵔ ᵕ ᵔ˶ ₎ა₊˚⊹♡ 🧸 🍓 🫧 ♡⊹˚₊🌸✨🎀🐰💗💕 ";
    avatar.src = "https://api.dicebear.com/9.x/adventurer/svg?seed=Rud";
    avatar.style.borderColor = '#00eeff';
     toggleBtn.textContent = " Ruda"
  }
  
});
