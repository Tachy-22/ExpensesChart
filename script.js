fetch("./data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var index = 0; index < data.length; index++) {
      console.log(data[index].message);

      var ids = data[index].day; //gives the id of the day
      console.log(ids);
      var amounts = data[index].amount;
      var amountSpent = JSON.stringify(amounts * 4); //gives the amount spent that day and converts to string

      var days = document.getElementById(ids);
      //gives the day with that id value
      console.log(days);
      days.style.height = amountSpent + "px"; //sets the height using the amount value for that day
      //
      var messageAmountStr = data[index].message;
      var idsAmountStr = data[index].day;
      console.log(messageAmountStr, idsAmountStr);

      var monBar = document.getElementById(data[0].day);
      var tueBar = document.getElementById(data[1].day);
      var wedBar = document.getElementById(data[2].day);
      var thuBar = document.getElementById(data[3].day);
      var friBar = document.getElementById(data[4].day);
      var satBar = document.getElementById(data[5].day);
      var sunBar = document.getElementById(data[6].day);
      console.log(monBar);
      monBar.addEventListener("mouseover", showAmountMon);
      tueBar.addEventListener("mouseover", showAmountTue);
      wedBar.addEventListener("mouseover", showAmountWed);
      thuBar.addEventListener("mouseover", showAmountThu);
      friBar.addEventListener("mouseover", showAmountFri);
      satBar.addEventListener("mouseover", showAmountSat);
      sunBar.addEventListener("mouseover", showAmountSun);

      var messageAmountMon = document.getElementById(data[0].message);
      var messageAmountTue = document.getElementById(data[1].message);
      var messageAmountWed = document.getElementById(data[2].message);
      var messageAmountThu = document.getElementById(data[3].message);
      var messageAmountFri = document.getElementById(data[4].message);
      var messageAmountSat = document.getElementById(data[5].message);
      var messageAmountSun = document.getElementById(data[6].message);
      console.log(messageAmountMon);
      function showAmountMon() {
        messageAmountMon.style.display = "flex";
        monBar.style.filter = "opacity(1.6)";
        messageAmountMon.innerHTML = "$" + " " + data[0].amount;
      }
      function showAmountTue() {
        messageAmountTue.style.display = "flex";
        tueBar.style.filter = "opacity(1.6)";
        messageAmountTue.innerHTML = "$" + " " + data[1].amount;
      }
      function showAmountWed() {
        messageAmountWed.style.display = "flex";
        wedBar.style.filter = "opacity(1.6)";
        messageAmountWed.innerHTML = "$" + " " + data[2].amount;
      }
      function showAmountThu() {
        messageAmountThu.style.display = "flex";
        thuBar.style.filter = "opacity(1.6)";
        messageAmountThu.innerHTML = "$" + " " + data[3].amount;
      }
      function showAmountFri() {
        messageAmountFri.style.display = "flex";
        friBar.style.filter = "opacity(1.6)";
        messageAmountFri.innerHTML = "$" + " " + data[4].amount;
      }
      function showAmountSat() {
        messageAmountSat.style.display = "flex";
        satBar.style.filter = "opacity(1.6)";
        messageAmountSat.innerHTML = "$" + " " + data[5].amount;
      }
      function showAmountSun() {
        messageAmountSun.style.display = "flex";
        sunBar.style.filter = "opacity(1.6)";
        messageAmountSun.innerHTML = "$" +" "+ data[6].amount;
      }
      monBar.addEventListener("mouseout", closeAmountMon);
      tueBar.addEventListener("mouseout", closeAmountTue);
      wedBar.addEventListener("mouseout", closeAmountWed);
      thuBar.addEventListener("mouseout", closeAmountThu);
      friBar.addEventListener("mouseout", closeAmountFri);
      satBar.addEventListener("mouseout", closeAmountSat);
      sunBar.addEventListener("mouseout", closeAmountSun);

      function closeAmountMon() {
        messageAmountMon.style.display = "none";
        monBar.style.filter = "opacity(1)";
      }
      function closeAmountTue() {
        messageAmountTue.style.display = "none";
        tueBar.style.filter = "opacity(1)";
      }
      function closeAmountWed() {
        messageAmountWed.style.display = "none";
        wedBar.style.filter = "opacity(1)";
      }
      function closeAmountThu() {
        messageAmountThu.style.display = "none";
        thuBar.style.filter = "opacity(1)";
      }
      function closeAmountFri() {
        messageAmountFri.style.display = "none";
        friBar.style.filter = "opacity(1)";
      }
      function closeAmountSat() {
        messageAmountSat.style.display = "none";
        satBar.style.filter = "opacity(1)";
      }
      function closeAmountSun() {
        messageAmountSun.style.display = "none";
        sunBar.style.filter = "opacity(1)";
      }
    }
  });
//rough rubbish code
// var bar = document.getElementById("mon");
// var messageAmount = document.getElementById("monAmount");
// bar.addEventListener("mouseover", showAmount);
// function showAmount() {
//   messageAmount.style.display = "flex";
//   messageAmount.innerHTML = "$17.45";
// }
// bar.addEventListener("mouseout", showAmount2);
// function showAmount2() {
//   messageAmount.style.display = "none";
// }
// var bar2 = document.getElementById("tue");
// var messageAmount2 = document.getElementById("tueAmount");
// bar2.addEventListener("mouseover", showAmount3);
// function showAmount3() {
//   messageAmount2.style.display = "flex";
// }
// bar2.addEventListener("mouseout", showAmount4);
// function showAmount4() {
//   messageAmount2.style.display = "none";
//   messageAmount2.innerHTML = "$34.91";
// }
// var bar3 = document.getElementById("wed");
// var messageAmount3 = document.getElementById("wedAmount");
// bar3.addEventListener("mouseover", showAmount5);
// function showAmount5() {
//   messageAmount3.style.display = "flex";
//   messageAmount3.innerHTML = "$52.36";
// }
// bar3.addEventListener("mouseout", showAmount6);
// function showAmount6() {
//   messageAmount3.style.display = "none";
// }
