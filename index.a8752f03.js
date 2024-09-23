for(var t=document.querySelector(".total-population"),e=document.querySelector(".average-population"),o=document.getElementsByClassName("population"),n=0,a=0,l=0;l<o.length;l++){var r=Number(o[l].textContent.replace(/,/g,""));isNaN(r)||(n+=r)}a=n/o.length,t.textContent=n.toLocaleString(),e.textContent=a.toLocaleString();
//# sourceMappingURL=index.a8752f03.js.map
