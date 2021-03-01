let $receipt = document.querySelector('.receipt')

    async function getReceipt() {
      let url = await "http://localhost:1717/pastry"
      let result = await fetch(url)
      let info = await result.json()
      return info
    }

    async function render() {
      let receipt = await getReceipt()

      $receipt.insertAdjacentHTML(
        "beforeend",
        `
          <table class = "receipt-table">
            <tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
            </tr>
            </table>
        `
      );


      let $table = document.querySelector('.receipt-table')


      receipt.forEach(({ name, ingredients, inStock }) => {
        $table.insertAdjacentHTML(
          "beforeend",

          `
    <tr>
        <td>${name}</td>
        <td>${ingredients.join(' | ')}</td>
        <td>${inStock}</td>
    </tr>

`
        );
      });

    }
    render()