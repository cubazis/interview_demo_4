export function PostData(type, userData) {
    let BaseURL = 'http://localhost:8001';

    return new Promise((resolve, reject) =>{
    
         
        fetch(BaseURL+type, {
            method: 'POST',
/*	        headers: {
		        'Accept': 'application/json',
		        'Content-Type': 'application/json',
	        },*/
            body: JSON.stringify(userData)
          })
          //.then((response) => response.json())
          .then((response) => response)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });

      });
}