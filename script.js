const color=['#FF7F7F','#FFBF7F','#FFFF7F','#BFFF7F','#7FFF7F','#7FFFFF','#BF7FBF']
let count=0;

function createTier() {
  
   const tiercontainer= document.querySelector('.container')
   const tier=document.createElement('div')   
   tier.classList.add('tier')
   const tiername=document.createElement('div')   
   tiername.classList.add('tier-name')
   const tieritems=document.createElement('div')   
   tieritems.id='tier-items'
   
   const inputarea=document.createElement('input')
   const settings=document.createElement('button')
   settings.classList.add('settings')
   const icon= document.createElement('i')
   icon.classList.add('fa')
   icon.classList.add('fa-trash')
   icon.id='icon'
   count>color.length?count=0:count;
   inputarea.style.backgroundColor=color[count]

  
  count++; 
   tiername.append(inputarea)
   settings.append(icon)
   
   tier.append(tiername)
   tier.append(tieritems)
   tier.append(settings)

   tiercontainer.append(tier)
   

   tier.addEventListener('dragover',(e)=>{
    e.preventDefault()
    const draggedimg=document.querySelector('.dragging')
    tieritems.append(draggedimg)
   });
   tieritems.addEventListener('drop',handledrop)
   
   settings.addEventListener('click',(event)=>{
    event.target.parentElement.remove()
   })
  
}
//getting images
const previewPhoto = () => {
    const imgcont=document.querySelector('#img-container')
    const input = document.getElementById('file-upload');
    const file = input.files[0];
    const preview = document.createElement('img')
    preview.id='file-preview';
    preview.draggable='true'
    const fileReader = new FileReader();
    
    fileReader.onload = event => {
      preview.src = event.target.result;
    };
    imgcont.append(preview)
    fileReader.readAsDataURL(file);
    dragging()
};
document.getElementById('file-upload').addEventListener('change', previewPhoto);
  
//adding tier
const addtier=document.querySelector('#add-tier')
addtier.addEventListener('click',createTier)

//dragging images
const dragging=()=>{
  const img=document.querySelectorAll('img')
  img.forEach(element => {
    element.addEventListener('dragstart',()=>{
      element.classList.add('dragging')
    })
    element.addEventListener('dragend',()=>{
      element.classList.remove('dragging')
    })
  });
}

const handledrop= (e)=>{
  e.preventDefault()
  console.log('droped');
  
}


