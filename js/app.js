////////////////////////

const searchData2 = (searchText) =>{

    // document.getElementById('loader').style.display = 'block';

    
     fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    .then(res => res.json())
    .then(data => displayData(data.data));

    // inputField.value = '';
  

}

searchData2('n');


///////////////////////

const searchData = () =>{

    document.getElementById('loader').style.display = 'block';

    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;

    
     fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    .then(res => res.json())
    .then(data => displayData(data.data));
  

}



const displayData = phones =>{

    const detailDiv = document.getElementById('detail-card');
    detailDiv.innerHTML = '';

    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;

    // error handling  starts

    if(phones.length == 0){
        if(inputField.value != ''){
            document.getElementById('no-result-text').style.display = 'block';
            document.getElementById('please-type-text').style.display = 'none';
        }
        else if(phones.length == 0){
            document.getElementById('please-type-text').style.display = 'block';
            document.getElementById('no-result-text').style.display = 'none';
        }
    }
    else if(phones.length != 0){
    document.getElementById('no-result-text').style.display = 'none';
    document.getElementById('please-type-text').style.display = 'none';
    }

    // error handling  ends

    inputField.value = '';
    

    const cardDiv = document.getElementById('cards');
    
    // console.log(phones);
    cardDiv.innerHTML = '';
    if(phones.length > 20)
    {
        document.getElementById('see-more-btn').style.display='block';
    }
    else{
        document.getElementById('see-more-btn').style.display='none';
    }
    
    phones.slice(0,20).forEach(phone => {
        const div = document.createElement('div');
        // console.log(phone.phone_name);

        div.innerHTML = `
       
            
                <div class="col">
                    <div class="card card-design">
                      <img src="${phone.image}" class="card-img-top position-relative start-50 translate-middle-x img-fluid" alt="...">

                      <div class="card-body">
                        <h5 class="card-title card-title">${phone.phone_name}</h5>
                        <hr class=" shadow-lg">
                        <h6 class="card-title card-title">${phone.brand}</h6>

                        <a style="text-decoration:none ;color: gray "href="#top"> <button onclick="displayDetails('${phone.slug}')"  class="btn position-relative start-50 translate-middle-x"> DETAILS </button></a>
                      </div>
                    </div>
                </div>
            
        
        `;
        // console.log(phone.slug);
        cardDiv.appendChild(div);

    });
    document.getElementById('loader').style.display = 'none';
    
}





const displayDetails = phoneId =>{
    console.log(phoneId);
   
    fetch(`https://openapi.programming-hero.com/api/phone/${phoneId}`)
    .then(res => res.json())
    .then(data => displayPhoneDetails(data.data))
    
}

const displayPhoneDetails = phones => {

    const detailDiv = document.getElementById('detail-card');
    detailDiv.innerHTML = '';
    //or we can use : detailDiv.textContent = '';
    // console.log(phones);
    const div = document.createElement('div');

    div.innerHTML=`
    
    <div class="row g-0">
                <div class="col-md-4">
                    <img class="card-design detail-card-design me-5 position-relative start-50 translate-middle-x img-fluid" src="${phones.image}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body m-3">
                        <h5 class="card-title">${phones.name}</h5>
                        <p class="card-text"><small class="text-muted">Release Date: ${phones.releaseDate.length !=0 ? phones.releaseDate  :  phones.releaseDate ='No release date found' }</small></p>
                        <hr>
                        <h5 class="details-text">Brand: ${phones.brand}</h5>
                        <hr>
                        <h5 class="details-text">Chipset: ${phones.mainFeatures.chipSet}</h5>
                        <hr>
                        <h5 class="details-text">Display Size: ${phones.mainFeatures.displaySize}</h5>
                        <hr>
                        <h5 class="details-text">Memory: ${phones.mainFeatures.memory}</h5>
                        <hr>
                        <h5 class="details-text">Storage: ${phones.mainFeatures.storage}</h5>
                        <hr>

                        
                    </div>
                </div>
            </div>

            <div class="row g-0 card-design">
               
                <div class="col-md-12">
                    <div class="card-body m-3">
                        <h5 class="card-title">Others</h5>
                        <hr>
                        <h5 class="details-text">Sensors: ${phones.mainFeatures.sensors = [...phones.mainFeatures.sensors]}</h5>
                        <hr>
                        <h5 class="details-text">Bluetooth: ${phones?.others?.Bluetooth || '_'}</h5>
                        <hr>
                        <h5 class="details-text">GPS: ${phones?.others?.GPS || '_'}</h5>
                        <hr>
                        <h5 class="details-text">NFC: ${phones?.others?.NFC || '_'}</h5>
                        <hr>
                        <h5 class="details-text">Radio: ${phones?.others?.Radio || '_'}</h5>
                        <hr>
                        <h5 class="details-text">USB: ${phones?.others?.USB || '_'}</h5>
                        <hr>
                        <h5 class="details-text">WLAN: ${phones?.others?.WLAN || '_'}</h5>
                        <hr>
                        
                        
                    </div>
                </div>
            </div>

    `;

    detailDiv.appendChild(div);
}

/////////////////////////////////////////////////////////////////////////////////

const displayMoreItems = () =>{

    const searchData2 = (searchText) =>{
    
        
         fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(data => displayData(data.data));
    
    
      
    
    }
    
    searchData2('n');
    
    
    
   
    
    
    
    const displayData = phones =>{
    
        const detailDiv = document.getElementById('detail-card');
        detailDiv.innerHTML = '';
    
        const inputField = document.getElementById('input-field');
        const searchText = inputField.value;
    
        // error handling  starts
    
        if(phones.length == 0){
            if(inputField.value != ''){
                document.getElementById('no-result-text').style.display = 'block';
                document.getElementById('please-type-text').style.display = 'none';
            }
            else if(phones.length == 0){
                document.getElementById('please-type-text').style.display = 'block';
                document.getElementById('no-result-text').style.display = 'none';
            }
        }
        else if(phones.length != 0){
        document.getElementById('no-result-text').style.display = 'none';
        document.getElementById('please-type-text').style.display = 'none';
        }
    
        // error handling  ends
    
        inputField.value = '';
        
    
        const cardDiv = document.getElementById('cards');
        
        // console.log(phones);
        cardDiv.innerHTML = '';
    
        
        phones.forEach(phone => {
            const div = document.createElement('div');
            // console.log(phone.phone_name);
    
            div.innerHTML = `
           
                
                    <div class="col">
                        <div class="card card-design">
                          <img src="${phone.image}" class="card-img-top position-relative start-50 translate-middle-x img-fluid" alt="...">
    
                          <div class="card-body">
                            <h5 class="card-title card-title">${phone.phone_name}</h5>
                            <hr class=" shadow-lg">
                            <h6 class="card-title card-title">${phone.brand}</h6>
    
                            <a style="text-decoration:none ;color: gray "href="#top"> <button onclick="displayDetails('${phone.slug}')"  class="btn position-relative start-50 translate-middle-x"> DETAILS </button></a>
                          </div>
                        </div>
                    </div>
                
            
            `;
            // console.log(phone.slug);
            cardDiv.appendChild(div);
    
        });
        document.getElementById('loader').style.display = 'none';
        
    }
    
    
    
    
    
    document.getElementById('see-more-btn').style.display='none'
}



/////////////////////////////////////////////////////////////////////////////////


