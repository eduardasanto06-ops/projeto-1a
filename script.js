// script.js

// 1. Dados sobre a Tecnologia no Campo
const tecnologiasAgro = [
    {
        titulo: "Drones e Mapeamento",
        descricao: "Utilizados para monitorar a saúde da lavoura, identificar pragas e mapear a área plantada com precisão milimétrica."
    },
    {
        titulo: "Maquinário Autônomo",
        descricao: "Tratores e colheitadeiras guiados por GPS que otimizam as rotas, reduzem o compactamento do solo e economizam combustível."
    },
    {
        titulo: "Sensores IoT",
        descricao: "Dispositivos espalhados pelo solo que medem a umidade, temperatura e nutrientes em tempo real, otimizando a irrigação."
    },
    {
        titulo: "Inteligência Artificial",
        descricao: "Algoritmos que cruzam dados climáticos e históricos para prever a melhor época de plantio e estimar o volume da colheita."
    }
];

// 2. Inicialização do Conteúdo Dinâmico
document.addEventListener("DOMContentLoaded", () => {
    carregarTecnologias();
    configurarFormulario();
    animarDados();
});

// 3. Função para Renderizar as Tecnologias na Tela
function carregarTecnologias() {
    const container = document.getElementById("tech-container");
    if (!container) return;

    tecnologiasAgro.forEach(tech => {
        const card = document.createElement("div");
        card.className = "tech-card";
        
        card.innerHTML = `
            <h3>${tech.titulo}</h3>
            <p>${tech.descricao}</p>
        `;
        
        container.appendChild(card);
    });
}

// 4. Interatividade: Formulário de Contato/Newsletter
function configurarFormulario() {
    const form = document.getElementById("agro-form");
    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede o envio padrão da página
        
        const emailInput = document.getElementById("agro-email");
        
        if (emailInput && emailInput.value) {
            alert(`Obrigado! O e-mail ${emailInput.value} foi cadastrado para receber novidades sobre o Agrotech.`);
            form.reset();
        } else {
            alert("Por favor, insira um e-mail válido.");
        }
    });
}

// 5. Efeito Visual Simples para Gráficos ou Dados
function animarDados() {
    const barras = document.querySelectorAll(".barra-grafico");
    
    // Simula uma animação de crescimento das barras de produtividade ao carregar a página
    barras.forEach(barra => {
        const valorFinal = barra.getAttribute("data-valor");
        setTimeout(() => {
            barra.style.width = `${valorFinal}%`;
