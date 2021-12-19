
const bouton = document.getElementById("btn-search");
bouton.addEventListener("click", () => {
    var input = document.getElementById("add-ean");
    var ean = input.value;

    let url = `https://world.openfoodfacts.org/api/v0/product/${ean}.json`;


    let ProductEan = () => {
        axios.get(url).then(datas => {

            if (datas.data.status === 1) alert("produit trouvé");

            else {
                alert("produit non trouvé");
                return;
            }

            tbody = document.getElementById("ean");

            let product = datas.data.product;

            let ean_produit = `
            <div class="animate__animated animate__fadeInLeft">
                <div id="bloc" class="card" style="width: 20rem">
            
                    <style>
                        img{
                            width : 200px;
                            height : 200px;
                            object-fit: contain;
                            text-align: center;
                        }
                    </style>
                    <div class="card-body">
                        <img  id ="logo-img" src="${product.image_url}">
                    </div>

                    <ul id="ul-css" class="list-group list-group-flush">
                        <li class="list-group-item">Nutriscore : ${product.nutriscore_grade}</li>
                        <li class="list-group-item"> Marque du produit : ${product.brands}</li>
                        <li class="list-group-item"> Nom du produit : ${product.product_name_fr}</li>
                    </ul>

                    <div class="card-body">
                        <button id = "suppr" type="button" class="btn btn-danger">Supprimer</button>
                    </div>
                </div>
            </div>`

            tbody.innerHTML = ean_produit;
            boutonSuppr = document.getElementById("suppr");

            boutonSuppr.addEventListener("click", function () {
                tbody.innerHTML = ``;
                input.value = "";
                input.focus();
            });

        });
    };
    ProductEan();
});