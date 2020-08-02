function Pizza(size, crust, toppings, total) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.total = total;
}

Pizza.prototype.ordered = function () {
    return (
        "Your order is summary is " +
        this.size +
        " " +
        this.crust +
        " " +
        this.toppings +
        " pizza"

    );
};

function PriceCalculate(priceOfSize, priceOfCrust, priceOfToppings) {
    this.priceOfSize = priceOfSize;
    this.priceOfCrust = priceOfCrust;
    this.priceOfToppings = priceOfToppings;
}

// PriceCalculate.prototype.totalCost = function () {
//     return (
//         "Your total order "
//             (this.priceOfSize + this.priceOfCrust + this.PriceOfToppings)
//     );
// };

// $(document).ready(function () {
//     $("button#submit").click(function () {
//         event.preventDefault.prototype();

//         let pSize = $("#size option:selected").val();
//         let pCrust = $("#crust option:selected").val();
//         let pToppings = $("#top option:selected").val();

//         switch (pSize) {
//             case "0":
//                 s_price = 0;
//                 break;
//             case "small":
//                 s_price = 500;
//                 break;
//             case "medium":
//                 s_price = 1000;
//                 break;
//             case "large":
//                 s_price = 1500;
//                 break;
//             default:
//                 console.log("Error")
//         }
//         switch (pCrust) {
//             case "0":
//                 t_price = 0;
//                 break;
//             case "Bagels":
//                 t_price = 2000;
//                 break;
//             case "Sicilian":
//                 t_price = 250;
//                 break;
//             case "Neapolitan":
//                 t_price = 300;
//                 break;

//         }
//     })

// });