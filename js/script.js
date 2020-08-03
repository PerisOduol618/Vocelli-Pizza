var deliveryCost = 200;

function Pizza(size, crust, toppings, number, total) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.total = total;
    this.number = number

}

Pizza.prototype.ordered = function () {
    return (
        "Your order is summary is " +
        this.size +
        " " +
        this.crust +
        " " +
        this.toppings +
        " " +
        this.number +
        " pizza"

    );
};

function PriceCalculate(priceOfSize, priceOfCrust, priceOfToppings, numberOfPizza) {
    this.priceOfSize = priceOfSize;
    this.priceOfCrust = priceOfCrust;
    this.priceOfToppings = priceOfToppings;
    this.numberOfPizza = numberOfPizza
}

PriceCalculate.prototype.totalCost = function () {
    return (
        "Your total order "
            ((this.priceOfSize + this.priceOfCrust + this.PriceOfToppings) * this.numberOfPizza)
    );
};

$(document).ready(function () {
    $("button#submit").click(function (event) {
        event.preventDefault();

        let pSize = $("#size option:selected").val();
        let pCrust = $("#crust option:selected").val();
        let pToppings = $("#top option:selected").val();
        let pNumber = $("#number option:selected").val();

        switch (pSize) {
            case "0":
                s_price = 0;
                break;
            case "small":
                s_price = 500;
                break;
            case "medium":
                s_price = 1000;
                break;
            case "large":
                s_price = 1500;
                break;
            default:
                console.log("Error!")
        }

        switch (pCrust) {
            case "0":
                c_price = 0;
                break;
            case "bagels":
                c_price = 200;
                break;
            case "sicilian":
                c_price = 250;
                break;
            case "neapolitan":
                c_price = 300;
                break;
            default:
                console.log("Error!");
        }

        switch (pToppings) {
            case "0":
                t_price = 0;
                break;
            case "mashroom":
                t_price = 100;
                break;
            case "meat":
                t_price = 250;
                break;
            case "cheese":
                t_price = 150;
                break;
            case "cream":
                t_price = 80;
                break;
            case "chicken":
                t_price = 400;
                break;
            default:
                console.log("Error!")
        }
        total = s_price + c_price + t_price;

        $(".list").append(
            "<h4>Your Oder Summary is:</h4><br>" +
            "<li>Size:" +
            pSize +
            "<li>" +
            "<li>Crust:" +
            pCrust +
            "<li>" +
            "<li>Topping(s):" +
            pToppings +
            "<li>"<br> +
            "<h5>Your total cost is:</h5>"

        )
        $("#delivery").toggle();
        $("#checkout").toggle();
    });

    $("button#delivery").click(function (event) {
        event.preventDefault();
        alert("Delivery cost is" + " " + deliveryCost);
        var name = prompt("Enter Your Name")
        var contacts = prompt("Enter your Phone number")
        var location = prompt("Enter your location")
        alert(
            "Hello" +
            " " +
            name +
            ",we recieved your order which will be delivered in the next 2 hours at" +
            " " +
            location +
            ".Thank you for shopping with us."
        );
    });
    $("button#checkout").click(function  (event){
        event.preventDefault();
        alert("Thank you for shoppong with us!!!!!")

    })

});
