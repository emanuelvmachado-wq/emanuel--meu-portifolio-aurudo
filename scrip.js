// =============================
// BOTÃO TEMA CLARO / ESCURO
// =============================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});


// =============================
// ANIMAÇÃO AO ENTRAR NA TELA
// =============================

const elements = document.querySelectorAll(
    ".section, .project, .tech-card, .about-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);

elements.forEach(element => {

    observer.observe(element);

});


// =============================
// BOTÕES DOS PROJETOS
// =============================

const projectButtons = document.querySelectorAll(
    ".project-button"
);

projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (button.textContent.includes("Em breve")) {

            alert(
                "🚀 Este projeto ainda está em desenvolvimento!"
            );

        } else {

            alert(
                "🎮 Aqui você poderá colocar o link do seu projeto."
            );

        }

    });

});


// =============================
// EFEITO DE DIGITAÇÃO
// =============================

const title = document.querySelector(".hero h2");

const text = "Desenvolvedor em formação";

let index = 0;

title.textContent = "";

function typeWriter() {

    if (index < text.length) {

        title.textContent += text.charAt(index);

        index++;

        setTimeout(typeWriter, 70);

    }

}

typeWriter();