var deliveryCost = 200;

function Pizza(size, crust, toppings, topping2, number, total) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.topping2 =topping2 
    this.number = number
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
        " " +
        this.topping2 +
        " " +
        this.number +
        " pizza"

    );
};

function PriceCalculate(priceOfSize, priceOfCrust, priceOfToppings, priceOfToppings2, numberOfPizza) {
    this.priceOfSize = priceOfSize;
    this.priceOfCrust = priceOfCrust;
    this.priceOfToppings = priceOfToppings;
    this.priceOfToppings2 = priceOfToppings2
    this.numberOfPizza = numberOfPizza
}

PriceCalculate.prototype.totalCost = function () {
    return (
        "Your total order "
            // ((this.priceOfSize + this.priceOfCrust + this.PriceOfToppings) * this.numberOfPizza)
            ((this.priceOfSize + this.priceOfCrust + this.PriceOfToppings + priceOfToppings2) * this.numberOfPizza)
    );
};

$(document).ready(function () {
    $("button#submit").click(function (event) {
        // console.log('Hurray!!!!!!!!!')
        event.preventDefault();

        let pSize = $("#size option:selected").val();
        let pCrust = $("#crust option:selected").val();
        let pToppings = $("#top option:selected").val();
        let pToppings2 = $("#top2 option:selected").val();
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

        switch (pToppings2) {
            case "0":
                t2_price = 0;
                break;
            case "olives":
                t2_price =50;
                break;
            case "sausage":
                t2_price = 100;
                break;
            case "Peppers":
                t2_price = 40;
                break;
            default:
                console.log("Error!")
        }

        total = s_price + c_price + t_price + t2_price;
        console.log(total)
        console.log(t2_price)

        $(".list").append(
            "<h4>Your Oder Summary is:</h4><br>" +
            "<li>Size: " +
            pSize + " " + "(" + "Ksh." + s_price + ")" +
            "<li>" +
            "<li>Crust: " +
            pCrust + " " + "(" + "Ksh." + c_price + ")" +
            "<li>" +
            "<li>Topping: " +
            pToppings + " " + "(" + "Ksh." + t_price + ")" +
            "<li>" +
            "<li>Topping 2: " +
            pToppings2 + " " + "(" + "Ksh." + t2_price + ")" +
            "<li><br>" +

            "<h5>Your total cost is: </h5>"+ "Ksh." + total

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
