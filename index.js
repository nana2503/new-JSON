fetch("./stuff.json")
  .then((response) => response.json())
  .then((json) => {
    let content = "";
    json.forEach((element) => {
        content +=
      `<tr>
        <td>${element.name}</td>
        <td>${element.username}</td>
        <td>${element.email}</td>
        <td>${element.address.city}</td>
        <td>${element.company.name}</td>
        <td><button type="button" class="btn btn-danger">X</button></td>
      </tr>`
    });
    document.querySelector("tbody").innerHTML = content;
    let del = document.querySelectorAll(".btn-danger")
    del.forEach((clk) => {
        clk.addEventListener('click', () => {
            clk.parentElement.parentElement.remove();
        })
    })
  });
const userName = document.querySelector(".ip-userName")
const email = document.querySelector(".ip-email")
const city = document.querySelector(".ip-City")
const addButton = document.querySelector(".btn-primary")
addButton.addEventListener('click', () =>{ 
    if (userName.value === "" || email.value === "" || city.value === "") {
        alert("xin hãy nhập liệu những dòng còn thiếu")
        let show
    } else {
        let result="";
        let cu =document.querySelector('tbody').innerHTML;
        let moi =`<tr>
        <td></td>
        <td>${userName.value}</td>
        <td>${email.value}</td>
        <td>${city.value}</td>
        <td>Germany</td>
        <td><button type="button" class="btn btn-danger">X</button></td>
      </tr>`;
        result = moi + cu;
        document.querySelector('tbody').innerHTML = result;
    }
    let del = document.querySelectorAll(".btn-danger")
      del.forEach((clk) => {
        clk.addEventListener('click', () => {
            clk.parentElement.parentElement.remove();
        })
      })
})
