function getDresses() {
    let xhr = new XMLHttpRequest();
    let url = 'http://192.168.29.240:5000/dresses';
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let result = JSON.parse(this.responseText);
            showDresses(result);
        }
    }

    xhr.send();
}

function showDresses(data) {
    let content = ``;

    for (const dress of data) {
        content += `<div class="col-md-6 col-lg-3">
        <div class="rounded dress-box">
            <img src="img/${dress.image}" class="rounded-top mb-3 my-image" alt="...">
            <div class="p-3 dress-content">
                <div class="row">
                    <div class="col-8">
                        <h5>${dress.brand}</h5>
                    </div>
                    <div class="col-2">
                        <i onclick="addToWhishList(this)" class="fa-regular fa-heart"></i>
                    </div>
                    <div class="col-2">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
                <p>${dress.name}</p>
                <p class="price">₹${dress.current_price} <s>MRP ${dress.actual_price}</s></p>
            </div>
        </div>
    </div>`;
    }

    document.getElementById("dress-row").innerHTML = content;
}

function addToWhishList(element) {
    if(element.classList.contains("fa-regular")) {
        element.classList.remove("fa-regular");
        element.classList.add("fa-solid");
    } else if (element.classList.contains("fa-solid")) {
        element.classList.remove("fa-solid");
        element.classList.add("fa-regular");
    }
}

getDresses();
