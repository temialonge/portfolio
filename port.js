const parallax = document.getElementById("parallax");

window.addEventListener("scroll", () =>
{
    let offset = window.scrollY;
    // console.log('offset: ' + offset);
    // console.log('offset * 0.7' + offset * 0.7);
    parallax.style.backgroundPositionY = offset * 0.7 + 'px'
    parallaxx.style.backgroundPositionY = offset * 0.7 + 'px'
    parallaxxx.style.backgroundPositionY = offset * 0.7 + 'px'

   
})
// if ($(window).width() < 640) {
//  parallax.style.backgroundPositionY = `${offset}px`
   
// }


