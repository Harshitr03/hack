export async function imageData(baseImg) {
    const response=await fetch('http://localhost:8080/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: `${baseImg}`
        })
      })
      console.log(baseImg);
      const response1 = response.json();
      console.log(response1);
}