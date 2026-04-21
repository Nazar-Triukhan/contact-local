let e=document.getElementById("firstName"),t=document.getElementById("lastName"),a=document.getElementById("phone"),n=document.getElementById("email"),l=document.getElementById("contactList"),i=document.getElementById("buttonAdd"),s=JSON.parse(localStorage.getItem("contacts"))||[];function c(){l.innerHTML="",s.forEach((e,t)=>{var a,n;let i;return a=e,n=t,i=`
    <li class="item" data-index="${n}">
      <p>${a.firstName} ${a.lastName}</p>
      <a href="tel:${a.phone}">${a.phone}</a><br>
      <a href="mailto:${a.email}">${a.email}</a>
      <button class="btn">x</button>
    </li>`,void(l.innerHTML+=i)})}c(),i.addEventListener("click",()=>{let l={firstName:e.value,lastName:t.value,phone:a.value,email:n.value};s.push(l),localStorage.setItem("contacts",JSON.stringify(s)),c()}),l.addEventListener("click",e=>{if(e.target.classList.contains("btn")){let t=Number(e.target.closest(".item").dataset.index);s.splice(t,1),localStorage.setItem("contacts",JSON.stringify(s)),c()}});
//# sourceMappingURL=contact-local.f9dfd547.js.map
