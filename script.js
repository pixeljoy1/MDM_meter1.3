/* Play an animation on each click */
    let iconSkipForward = document.querySelector('.joyMDM');

    let animationSkipForward = bodymovin.loadAnimation({
            container: iconSkipForward,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: "https://raw.githubusercontent.com/pixeljoy1/meter/master/MDM_1.3.json"
    });

      iconSkipForward.addEventListener('click', function() {
      animationSkipForward.playSegments([0,21], true);
    });


//https://raw.githubusercontent.com/pixeljoy1/meter/master/data.json
//https://raw.githubusercontent.com/thesvbd/Lottie-examples/master/assets/animations/skip-forward.json
