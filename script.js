
document.onmousemove = function(){
    var x = event.offsetX;
    var y = event.offsetY;
    document.body.style.backgroundPositionX = -x + "px";
    document.body.style.backgroundPositionY = -y + "px";
}


VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 25,
  });
  
  
  (function () {
  
      const link = document.querySelectorAll('nav > .hover-this');
      const cursor = document.querySelector('.cursor');
      
      const animateit = function (e) {
            const span = this.querySelector('span');
            const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this,
      
            move = 25,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;
      
            span.style.transform = `translate(${xMove}px, ${yMove}px)`;
      
            if (e.type === 'mouseleave') span.style.transform = '';
      };
      
      const editCursor = e => {
            const { clientX: x, clientY: y } = e;
            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
      };
      
      link.forEach(b => b.addEventListener('mousemove', animateit));
      link.forEach(b => b.addEventListener('mouseleave', animateit));
      window.addEventListener('mousemove', editCursor);
      
      })();
  
      document.addEventListener(
        "keydown",
        (e) => {
          if (e.key === "Enter") {
            toggleFullScreen();
          }
        },
        false,
        );
        function toggleFullScreen() {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else if (document.exitFullscreen) {
          document.exitFullscreen();
        }
        }

        document.addEventListener('visibilitychange',
        function () {
            if (document.visibilityState === "visible") {
                document.title = "Press Enter"; }
            else {
                document.title = "Adidas collab fightklub.in";}
        });