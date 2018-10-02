// See original by emre here https://codepen.io/emredenx/pen/ojcxl
const resizeFix = () => {
  var mediasize = 768;
  console.log(window.innerWidth);
  if (window.innerWidth > mediasize) {
    document.querySelector('ul').style.display = 'block';
    document.getElementById('logo').style.display = 'block';
    document.getElementById('shoppingCartIcon').style.display = 'flex';
  }
  if (window.innerWidth <= mediasize) {
    document.querySelector('ul').style.display = 'none';
    document.getElementById('logo').style.display = 'block';
    document.getElementById('shoppingCartIcon').style.display = 'flex';
    document.getElementById('mobile-toggle').classList.remove('menu-opened');
    clickBtn();
      // flexmenu.find('ul').hide().removeClass('open');
  }
};

const clickBtn = () => {
  const btn = document.getElementById('mobile-toggle');
  btn.onclick = (e) => {
    e.preventDefault();
    console.log(e);
    btn.classList.toggle('menu-opened');
    const mainmenu = document.querySelector('ul');
    if (mainmenu.classList.contains('open')) {
        mainmenu.classList.remove('open');
        document.getElementById('logo').style.display = 'block';
        document.getElementById('shoppingCartIcon').style.display = 'flex';
        document.querySelector('ul').style.display = 'none';
    } else {
        mainmenu.classList.add('open');
        document.getElementById('logo').style.display = 'none';
        document.getElementById('shoppingCartIcon').style.display = 'none';
        document.querySelector('ul').style.display = 'block';
        // slideshow(0,300);
      }
  };
}
resizeFix();
window.onresize = function(){
  resizeFix();
}

/* function slideshow (from, to) {
  document.querySelector('ul').style.height = 0 +'px';
  for(var i = from; i<to ;i++) {
    setTimeout (() => {
      console.log(document.querySelector('ul').style.height)
      document.querySelector('ul').style.height = i + 'px';
    }, 1000)
  }
} */