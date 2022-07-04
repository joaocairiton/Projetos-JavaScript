



const geraCor = () => {
  let num = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += num[Math.floor(Math.random() * 16)]

  }
  return color;
};
document.getElementById("btn-action").addEventListener("click", () => {

  for (let i = 0; i < 16; i++) {
    let color = geraCor();
    let div_cor = document.getElementById(`cor-${i+1}`)
    div_cor.style.backgroundColor = color
    let txt_nome = document.getElementById(`nome${i+1}`);
    txt_nome.textContent = `${color}`
   
    
  }

})



