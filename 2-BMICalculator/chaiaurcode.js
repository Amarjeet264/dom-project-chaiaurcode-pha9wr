const form=document.querySelector('form')
form.addEventListener('submit',function(e){
  e.preventDefault()
  const height=parseInt(document.querySelector('#height').value);
  const weight=parseInt(document.querySelector('#weight').value);
  const results=document.querySelector('#results')
  if(height===''||height<0||isNaN(height)){
    results.innerHTML=`please give a valid height ${height}`;
  }
  else if(weight===''||weight<0||isNaN(weight)){
    results.innerHTML=`please give a valid weight ${weight}`;
  }
  else{
    const bmi=(weight/((height*height)/10000)).toFixed(2)
    results.innerHTML=`<span>${bmi}</span>`;
    if(bmi<18.6){
      const addtext=document.createTextNode(" Under Weight");
      results.appendChild(addtext);
    }
    else if(bmi>=18.6&&bmi<=24.9){
      const addtext=document.createTextNode(" Normal Range");
      results.appendChild(addtext);
    }
    else{
      const addtext=document.createTextNode(" Over Weight");
      results.appendChild(addtext);
    }
  }
})