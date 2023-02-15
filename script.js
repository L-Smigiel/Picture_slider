let counter = 1;
      console.log(counter);
      const interval = 6000;
      let sliderInterval = () => {
        setInterval(() => {
          counter++;
          if (counter > 8) {
            counter = 1;
          }
          console.log(counter);
          document.getElementById("radio" + counter).checked = true;
        }, interval);
      };
      sliderInterval();
      let moveImgLeft = () => {
        clearInterval(sliderInterval);
        if (counter <= 1) {
          counter = 8;
        } else {
          counter--;
        }
        console.log(counter);
        document.getElementById("radio" + counter).checked = true;
      };
      let moveImgRight = () => {
        clearInterval(sliderInterval);
        if (counter >= 8) {
          counter = 1;
        } else {
          counter++;
        }
        console.log(counter);
        document.getElementById("radio" + counter).checked = true;
      };
      console.log(interval);