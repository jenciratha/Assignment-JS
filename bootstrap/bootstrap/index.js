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

function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
  }
  
  function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
  }

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

        (function() {
            const buttons = document.querySelectorAll('.nav-link')
            const storeImages = document.querySelectorAll('.grid-item')

            buttons.forEach((button) => {
                button.addEventListener('click', (e) => {
                    e.preventDefault()
                    const filter = e.target.dataset.filter

                    storeImages.forEach((item) => {
                        if (filter === 'all'){
                            item.style.display = 'block'
                        } else {
                            if (item.classList.contains(filter)) {
                                item.style.display = 'block'

                            } else {
                                item.style.display = 'none'
                            }
                        }
                    })
                })
            })
        })();
        
        //  function myFunction(){
        //     alert ('404 error');
        // }


        function openPopup(){
            newwin = window.open('page.html');
        }