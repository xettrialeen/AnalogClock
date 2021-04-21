const clock = new Vue({
  el: "#clock",
  data: {
    message: "hello world",
  },
  mounted: function () {
    setInterval(setClock, 1000);
    const hourHand = document.querySelector("[data-hour]");
    const minuteHand = document.querySelector("[data-minute]");
    const secondHand = document.querySelector("[data-second]");
    function setClock() {
      const currentDate = new Date();
      const secondRatio = currentDate.getSeconds() / 60;
      const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
      const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
      setRotation(secondHand, secondRatio);
      setRotation(minuteHand, minuteRatio);
      setRotation(hourHand, hourRatio);
    }
    function setRotation(element, rotationRatio) {
      element.style.setProperty("--rotation", rotationRatio * 360);
    }
  },
});
