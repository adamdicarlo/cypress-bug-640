const url = '/static/some-data.json'

if (window.fetch) {
  fetch(url)
    .then(response => response.json())
    .then(json => setContent(json.payload, 'fetch'))
} else {
  const request = new XMLHttpRequest()
  request.onreadystatechange = () => {
    if (request.readyState === XMLHttpRequest.DONE) {
      const json = JSON.parse(request.responseText)
      setContent(json.payload, 'XMLHttpRequest')
    }
  }
  request.open('GET', url)
  request.send()
}

function setContent (data, source) {
  document.body.innerText = `data: ${data} source: ${source}`
}
