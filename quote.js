let container = document.getElementById('container');


const key = `dCC6gptxr44sCoMjwu/pEg==1b0x0DcFNPdFu7qW`;
const url = `https://api.api-ninjas.com/v1/quotes`

fetch(url,{
    method:'GET',
    headers :{
        'X-Api-Key' : key
    }
}

).then(res =>res.json().then(data => {
    container.innerHTML = `
    <blockquote id="quote"> ${data[0].quote}</blockquote>
    <cite id="author">${data[0].author}</cite>
    `
}
))
