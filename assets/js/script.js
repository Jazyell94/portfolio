$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
            
        }, 500, 'linear')
    });

});

// Efeito do texto digitando start //
var typed = new Typed(".typing-text", {
    strings: ["frontend developer", "backend developer", "web designer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// Efeito do texto digitando ends //

// Efeito mudar cor da navbar ao rolar start //
const navbar = document.querySelector('.header');

// Adicione um evento de rolagem à janela
window.addEventListener('scroll', () => {
  
  // Verifique se a página foi rolada para baixo
  if (window.scrollY > 0) {
    // Mude a cor da navbar para uma cor escura
    navbar.classList.add('navbar-dark');
  } else {
    // Mude a cor da navbar para uma cor clara
    navbar.classList.remove('navbar-dark');
  }
});


function mudarCorLinkMenu() {
  var links = document.querySelectorAll('.menu-link');
  var scrolled = window.scrollY > 0; // ajuste o valor de acordo com a sua necessidade

  links.forEach(function(link) {
    if (scrolled) {
      link.classList.add('scrolled');
    } else {
      link.classList.remove('scrolled');
    }
  });
}

window.addEventListener('scroll', mudarCorLinkMenu);

// Efeito no mouse sobre a image start //
VanillaTilt.init(document.querySelector(".image"), {
    max: 10,
    speed: 400
});

VanillaTilt.init(document.querySelectorAll(".skill"), {
    max: 20,
    speed: 400
});
// Efeito no mouse sobre a image end //

// Conteiner das skills //

// Obtém o arquivo JSON
fetch('skills.json')
  .then(response => response.json())
  .then(dados => {
    // Obtém o elemento HTML onde os dados serão adicionados
    const container = document.getElementById('skillsContainer');

    // Cria uma string com o HTML que será adicionado
    let html = '';

    // Loop nos dados do JSON
    dados.forEach(dado => {
      // Cria um elemento HTML para cada dado
      html += `
        <div class="skill">
            <img src=${dado.icon} alt="skill" />
            <h2>${dado.name}</h2>
        </div>
      `;
    });

    // Adiciona o HTML ao container
    container.innerHTML = html;
  })
  .catch(erro => console.error('Erro ao carregar dados:', erro));



  