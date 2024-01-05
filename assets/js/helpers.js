
export default async function fetchData(apiURL) {
    try {
      const response = await fetch(apiURL);
      
      if (!response.ok) {
        throw new Error(`Couldn't retrieve data. Status: ${response.status}`);
      }
  
      var data = await response.json();
      return data;
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
async function fetchNumbers(filePath){

  return fetch(filePath)
  .then(res=>{
    if(!res.ok){
      throw new Error("COULDNT RETRIEVE JSON FILE!", res.status)
    }
    return res.json();
  }).then(jsonData => {
    if(Array.isArray(jsonData)){
      return jsonData.length;
    }else if(typeof jsonData == 'object'){
      return Object.keys(jsonData).length;
    }else{
      return 0;
    }
  }).catch(error=>{
    console.error('COULDNT LOAD JSON FILE: ', error.message)
    return -1;
  })
}

function queryString(url){
  const urlArr = url.split("?")
  return urlArr[urlArr.length-1]
}

export {fetchData, fetchNumbers, queryString}

