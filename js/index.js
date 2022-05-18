window.addEventListener('load', function () {
  // banner部分轮播图 插件
  var swiper = new Swiper('.mySwiper', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  let arr_l = document.getElementById('mov-arr-left');
  let arr_r = document.getElementById('mov-arr-right');
  let movie_bd = document.querySelector('.movie-bd');
  // console.log(movie_bd);
  //1. 鼠标移入移出btn显示隐藏
  movie_bd.addEventListener('mouseenter', function () {
    arr_l.style.display = 'block';
    arr_r.style.display = 'block';
  });
  movie_bd.addEventListener('mouseleave', function () {
    arr_l.style.display = 'none';
    arr_r.style.display = 'none';
  });
  // 2.小三角形显示隐藏(鼠标移入正在热映或即将上映显示对应内容)
  let movieTab = document.getElementById('movie-tab');
  // console.log(movieTab);
  let movieTabLi = movieTab.getElementsByTagName('li');
  let movieShow = document.getElementsByClassName('movie-hot');
  let triangle_l = document.querySelector('.triangle-l');
  console.log(triangle_l);
  let triangle_r = document.querySelector('.triangle-r');
  console.log(triangle_r);
  movieTabLi[0].onmouseover = function () {
    movieShow[0].style.display = 'block';
    movieShow[1].style.display = 'none';
    triangle_l.style.display = 'block';
    triangle_r.style.display = 'none';
  };
  movieTabLi[1].onmouseover = function () {
    movieShow[1].style.display = 'block';
    movieShow[0].style.display = 'none';
    triangle_l.style.display = 'none';
    triangle_r.style.display = 'block';
  };
  // 3.点击左右图片滚动
  let num = 0;
  arr_l.onclick = function () {
    // 每次点一下向右走100
    num = num + 100;
    // 如果
    if (num <= -1300) {
      num = 0;
    }
    console.log(num);
    movieShow[0].style.left= num +'px';
  };
});
