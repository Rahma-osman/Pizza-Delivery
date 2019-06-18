$(document).ready(function() {
 $(".tablehead").click(function() {
   $(this).next("div").slideToggle("slow");
 });
});

function invoice() {

 // Setting size and sizePrice based on selection
 var size = document.querySelector('input[name="size"]:checked').value;
 console.log("size=" + size);
 var sizePrice = 0;
 if (size === "Small") {
   sizePrice = 750;
 };
 if (size === "Medium") {
   sizePrice = 900;
 };
 if (size === "Large") {
   sizePrice = 1100;
 };
 if (size === "Extra-Large") {
   sizePrice = 1400;
 };
 console.log("sizePrice=" + sizePrice);


 var delivery = document.querySelector('input[name="delivery"]:checked').value;
 console.log("delivery=" + delivery);
 var deliveryPrice = 0;
 if (size === "Personal") {
   deliveryPrice = 150;
 } else if (size === "Medium") {
   deliveryPrice = 150;
 } else if (size === "Large") {
   deliveryPrice = 150;
 } else {
   deliveryPrice = 0;
 };

 console.log("deliveryPrice=" + deliveryPrice);

 var crust = document.querySelector('input[name="crust"]:checked').value;
 console.log("crust=" + crust);
 var crustPrice = 300;
 if (crust = "Cheese-Stuffed") {
   crustPrice = 250;
 };
 console.log("crustPrice=" + crustPrice);


 var sauce = document.querySelector('input[name="sauce"]:checked').value;
 console.log("sauce=" + sauce);

 var meatPrice = 0
 var meat = document.getElementsByName("meat");
 var meatSelect = [];
 var meatDisplay = "";
 for (var i = 0; i < meat.length; i++) {
   if (meat[i].checked) {
     meatSelect.push(meat[i].value);
   };
 };
 console.log("meatSelect=" + meatSelect);
 if (meatSelect.length === 1) {
   meatDisplay = meatSelect[0];
 } else if (meatSelect.length > 1) {
   for (i = 0; i < meatSelect.length; i++) {
     meatDisplay += meatSelect[i];
     if (i < (meatSelect.length - 1)) {
       meatDisplay += ", ";
     };
   };
 };
 meatPrice = meatSelect.length * 10;
 console.log("meatPrice=" + meatPrice);
 if (meatSelect.length === 0) {
   meatDisplay = "No Meats";
 }


 var totalPrice = (meatPrice + crustPrice + deliveryPrice + sizePrice);
 console.log("totalPrice=" + totalPrice);

 $("#size").html(size + " Pizza");
 $("#sizeprice").html(" ksh" + sizePrice + ".00");
 $("#crust").html(crust + " Crust");
 $("#crustprice").html("+" + crustPrice + ".00");
 $("#cheese").html(delivery + " delivery");
 $("#cheeseprice").html("+" + deliveryPrice + ".00");
 $("#sauce").html(sauce + " Sauce");
 $("#sauceprice").html("+0.00");
 $("#meat").html(meatDisplay);
 $("#meatprice").html("+" + meatPrice + ".00");
 $("#totalprice").html(" ksh" + totalPrice + ".00");



};

function onclick(event) {
 openForm()
}

function openForm() {
 document.getElementById("myForm").style.display = "block";
}

function closeForm() {
 document.getElementById("myForm").style.display = "none";
}
$("#form").submit(function () {
  event.preventDefault();
  var name = $("#location").val()
  $(".result").append("Thank you your pizza will be delivered to " + name );
});
