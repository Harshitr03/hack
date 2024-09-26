export async function imageData(baseImg,lat,lon) {
    const response = await fetch('http://localhost:8080/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: `${baseImg}`,
          lat:lat,
          lon:lon
        })
      })
      const response1 = await response.json();
      console.log(response1)
      return(response1.content); 
}

// export async function mapData(lat,lon) {
//       if(!lat||!lon)
//         return;
//       const response = await fetch(`http://localhost:8080/lat=${lat}&lon=${lon}`)
//       const response1 = await response.json()
//       console.log(response1);
// }