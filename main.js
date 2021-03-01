let $receipt = document.querySelector('.receipt')

    async function getReceipt() {
      let url = await "http://localhost:1717/pastry"
      let result = await fetch(url)
      let info = await result.json()
      return info
    }