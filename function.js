const colors=['black','green','red','magenta'];
let i=0;
const onClick = () => {
   const para = document.querySelector(".para");
   para.style.backgroundColor= colors[i];
   if(i<4)
   i++;
};

export {onClick};