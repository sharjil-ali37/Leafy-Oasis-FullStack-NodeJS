import './Search.css'
import * as ReactDOM from 'react-dom';
function Search(){
    return(
        <>
            <form>
                <input type="file" multiple class=" btn-4" />
                <button class="custom-btn btn-6" type="button" onClick={sendIdentification} ><span>OK</span></button>
                {/* <button type="button" onClick={sendIdentification}>OK</button> */}
            </form>
            <div id="isPlant"></div>


            {/* GRID */}

            <div class="message">
                Sorry, your browser does not support CSS Grid. 😅
            </div>
            {/* <div  id="wiki_des">
                               
                            </div> */}

            <section class="section">
                    <h1>Nom Nom Gallery</h1>
                    <div class="grid">
                        <div class="item item--full" id="isPlantImage">
                            <div class="item__details" id="isPlant1"></div>
                            <div class="item__details" id="plantName"></div>
                            <div  id="wiki_des" style={{z_index: 1}}></div> 
                        </div>

                        <div class="item" >                        
                            <div class="item__details" id="scientificName"></div>
                            <div class="item__details" id="genusName"></div>
                            <div class="item__details" id="speciesName"></div>

                        </div>

                        <div class="item item--large">
                            <div class="item__details" id="commonNames">
                                f
                            </div>
                        </div>

                        <div class="item item--medium" id="similarImage0">
                            <div class="item__details" >
                                Similar Image 0
                            </div>
                        </div>

                        <div class="item item--large">
                            <div class="item__details">
                                Oat cake
                            </div>
                        </div>

                        {/* <div class="item item--full">
                            <div class="item__details">
                                jujubes cheesecakeg
                            </div>
                        </div> */}

                        <div class="item item--medium">
                            <div class="item__details">
                                Taxonomy
                            </div>

                            <div class="item__details" id="taxonomy"></div>
                        </div>

                        {/* <div class="item item--large">
                            <div class="item__details">
                                Oat cake
                            </div>
                        </div> */}

                        <div class="item" id="similarImage1">
                            <div class="item__details" >
                               Similar Image 1
                            </div>
                        </div>
                    </div>
                </section>

{/* GRID */}
        </>
    )
}

function displayData(data){
    const isPlant = data.is_plant;
    const isPlantDiv1 = document.getElementById("isPlant1")
    const isPlantImage1 = document.getElementById("isPlantImage")
    const plantName = document.getElementById("plantName")

    const url = data.suggestions[0].similar_images[0].url;
    const url0 = data.suggestions[0].similar_images[0].url;
    const url1 = data.suggestions[0].similar_images[1].url;
    
    const sciName = data.suggestions[0].plant_details.plant_name;

    // var p = document.createElement('p');
    //         p ="edsfhjvwef" ;
    //         document.getElementById('isPlantImage').appendChild(p);

    isPlantDiv1.innerHTML = "We recozgnized your plant";
    if(isPlant == true){
        isPlantDiv1.innerHTML = "We recozgnized your plant";
        // plantName.innerHTML = "sdfgdsgdfg";
        isPlantImage1.style.backgroundImage = `url('${url}')`;
        document.getElementById("similarImage0").style.backgroundImage = `url('${url0}')`;
        document.getElementById("similarImage1").style.backgroundImage = `url('${url1}')`;
    }
    else{
        isPlantDiv1.innerHTML = "We could not find any plant in your image";
    }

    document.getElementById('wiki_des').innerHTML = data.suggestions[0].plant_details.wiki_description.value;
    document.getElementById('plantName').innerHTML = "Name:" + data.suggestions[0].plant_name;

    document.getElementById('scientificName').innerHTML = "Scientific Name:" + data.suggestions[0].plant_details.scientific_name;
    document.getElementById('genusName').innerHTML = "Genus Name:" + data.suggestions[0].plant_details.structured_name.genus;
    document.getElementById('speciesName').innerHTML = "Species Name:" + data.suggestions[0].plant_details.structured_name.species;
    
    // document.getElementById('commonNames').innerHTML = "Common Names: " + data.suggestions[0].plant_details.common_names;
    // document.getElementById('taxonomy').innerHTML = "Taxonomy:" + JSON.stringify(data.suggestions[0].plant_details.taxonomy);
    // document.getElementById('plantName').innerHTML = "Name:" + data.suggestions[0].plant_details.plant_name;
    // document.getElementById('plantName').innerHTML = "Name:" + data.suggestions[0].plant_details.plant_name;



//    printing the taxonomy in tabular form
    const obj = data.suggestions[0].plant_details.taxonomy;
    const rows = Object.entries(obj).map(([key, value]) => (
        <tr key={key}>
            <td>{key} : </td>
            <td>{value}</td>
        </tr>
        ));

    const table = (
        <table class="container">
            <tbody>
            {rows}
            </tbody>
        </table>
    );
    ReactDOM.render(table, document.getElementById('taxonomy'));
    

    // taxonomy finished

   
        const myArray = data.suggestions[0].plant_details.common_names;
        const div = (
                    <div>
                        {myArray.map((item, index) => (
                        <p key={index}>{item}</p>
                        ))}
                    </div>
                    );
        ReactDOM.render(div, document.getElementById('commonNames'));
      
    }


   


function sendIdentification() {
    const files = [...document.querySelector('input[type=file]').files];
    const promises = files.map((file) => {
      return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (event) => {
            const res = event.target.result;
            // document.innerHTML(res);
            console.log(res);
            resolve(res);
          }
          reader.readAsDataURL(file)
      })
    })
    
    Promise.all(promises).then((base64files) => {
      console.log(base64files)
            
      const data = {
        api_key: "CMkKR4yh2lieLNxsbbZtjTHj0g7jhq6ZmRcG8nPRfTQC9GdG0P",
        images: base64files,
        // modifiers docs: https://github.com/flowerchecker/Plant-id-API/wiki/Modifiers
        modifiers: ["crops_fast", "similar_images"],
        plant_language: "en",
        // plant details docs: https://github.com/flowerchecker/Plant-id-API/wiki/Plant-details
        plant_details: ["common_names",
                        "url",
                        "name_authority",
                        "wiki_description",
                        "taxonomy",
                        "synonyms"],
      };
      
      fetch('https://api.plant.id/v2/identify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        displayData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    })
  
};


export default Search;












{/* <div class="item item--medium">
                            <div class="item__details">
                                pudding cheesecake
                            </div>
                        </div>

                        <div class="item item--large">
                            <div class="item__details">
                                toffee bear claw 
                            </div>
                        </div> */}

                        {/* <div class="item">
                            <div class="item__details">
                                cake cookie croissant
                            </div>
                        </div>

                        <div class="item item--medium">
                            <div class="item__details">
                                liquorice sweet roll
                            </div>
                        </div>

                        <div class="item item--medium">
                            <div class="item__details">
                                chocolate marzipan
                            </div>
                        </div>

                        <div class="item item--large">
                            <div class="item__details">
                                danish dessert lollipop
                            </div>
                        </div>

                        <div class="item">
                            <div class="item__details">
                                sugar plum dragée
                            </div>
                    </div> */}