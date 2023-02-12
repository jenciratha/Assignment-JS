// const box = document.getElementById('box');

// const textDiv = document.getElementById('text');

// // 👇️ Change text color on mouseover
// box.addEventListener('mouseover', function handleMouseOver() {
//   textDiv.style.color = 'red';
// });

// // 👇️ Change text color back on mouseout
// box.addEventListener('mouseout', function handleMouseOut() {
//   textDiv.style.color = 'black';
// });

$(document).ready(function(){
    $('.nav-link').click(function(){
      $('.nav-link').removeClass('active');
      $(this).addClass('active');
    });
  });

//   var slidePosition = 0;
//   SlideShow();
  
//   function SlideShow() {
//     var i;
//     var slides = document.getElementsByClassName("Containers");
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     slidePosition++;
//     if (slidePosition > slides.length) {slidePosition = 1}
//     slides[slidePosition-1].style.display = "block";
//     setTimeout(SlideShow, 2000); // Change image every 2 seconds
//   } 

  const imageNodes = document.querySelectorAll('.img-stack img');
        const imageStack = document.querySelector('.img-stack');
        imageNodes.forEach(btn => {
            btn.onclick =   function() {
                let image = document.querySelector('img:last-child');
                imageStack.prepend(image);  
            }
        });

        $(document).ready(function(){
            // Activate Carousel
            $("#myCarousel").carousel();
              
            // Enable Carousel Indicators
            $(".item1").click(function(){
              $("#myCarousel").carousel(0);
            });
            $(".item2").click(function(){
              $("#myCarousel").carousel(1);
            });
            $(".item3").click(function(){
              $("#myCarousel").carousel(2);
            });
            $(".item4").click(function(){
              $("#myCarousel").carousel(3);
            });
              
            // Enable Carousel Controls
            $(".left").click(function(){
              $("#myCarousel").carousel("prev");
            });
            $(".right").click(function(){
              $("#myCarousel").carousel("next");
            });
          });