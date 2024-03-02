const divEle = document.querySelector('.card-container');

  function getDetails(id){
    const req = new XMLHttpRequest();
    req.open('GET', `https://dummyjson.com/users/${id}`);
    req.send();
  
    req.addEventListener('load', function () {
       const data=JSON.parse(req.responseText);
       displayUser(data,"beforeend",className='');
    
       const req2 =new XMLHttpRequest();
       req2.open('GET', `https://dummyjson.com/users/${id-1}`);
       req2.send();
     
       req2.addEventListener('load', function () {
          const data=JSON.parse(req2.responseText);
          displayUser(data,"afterbegin",className='other');
          const req3 = new XMLHttpRequest();
          req3.open('GET', `https://dummyjson.com/users/${id+1}`);
          req3.send();
        
          req3.addEventListener('load', function () {
             const data=JSON.parse(req3.responseText);
             displayUser(data,"beforeend",className='other');
        })
   
     })
     
  })

}
  function displayUser(data,pos){
    const card=`
    <div class="user-card ${className}">
    <img src=${data.image}alt="Profile Image" />
    <h3>${data.firstName}</h3>
    <h3>${data.lastName}</h3>
    <p class="email">${data.email}</p>
    <button class="btn">View Profile</button>
    </div>
    ` ;
    divEle.insertAdjacentHTML(pos,card);
    
      };

  
  getDetails(3);
   
