fetch('modals/cad_tarefas.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('container-modal-tarefas').innerHTML = html;
    });

function importIcons(){ // Importar Icones
    const fontAwesome = document.createElement("link");
    fontAwesome.rel = "stylesheet";
    fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";
    document.head.appendChild(fontAwesome);
}
function defIcons(){ // Associa a classe com o chamado em HTML
    customElements.define('icone-senha', iconeSenha);
    customElements.define('icone-email', iconeEmail);
    customElements.define('icone-excluir', iconeExcluir);
    customElements.define('icone-editar', iconeEditar);
    //customElements.define('input-status', inputStatus);
    customElements.define('icone-tempo', iconeTempo);
    customElements.define('icone-visualizar', iconeVisualizar);
    customElements.define('icone-renomear', iconeRenomear);
    customElements.define('icone-adicionar', iconeAdicionar);
    customElements.define('icone-divisao', iconeDivisao);
    customElements.define('icone-multiplicacao', iconeMultiplicacao);
    customElements.define('icone-soma', iconeSoma);
    customElements.define('icone-subtracao', iconeSubtracao);
}
function mudarCorPost(cor) { // Mudar cor do Post-It
    const postIt =
    document.getElementById('postIt');
        postIt.style.backgroundColor = cor;
}
class iconeEditar extends HTMLElement { // COMPONENTE ATALHO PARA ICONE DE EDITAR
    connectedCallback() {
        this.innerHTML = `
            <i class="fa fa-pencil" aria-hidden="true"></i>
            `;
        this.style.cursor = "pointer";
    }
}
class iconeRenomear extends HTMLElement { // COMPONENTE ATALHO PARA ICONE DE EDITAR
    connectedCallback() {
        this.innerHTML = `
            <i class="fa fa-pencil" aria-hidden="true"></i>
            <label>Renomear Box</label>
            `;
        this.style.cursor = "pointer";
    }
}
class iconeExcluir extends HTMLElement { // COMPONENTE ATALHO PARA ICONE DE EXCLUIR
    connectedCallback() {
        this.innerHTML = `
            <i class="fa fa-trash"></i>
            `;
        this.style.cursor = "pointer";
    }
}
class iconeEmail extends HTMLElement { // COMPONENTE ATALHO PARA ICONE DE EMAIL
    connectedCallback() {
        this.innerHTML = `
            <i class="fa fa-envelope"></i>
            `;
        this.style.cursor = "pointer";
    }
}
class iconeSenha extends HTMLElement { // COMPONENTE ATALHO PARA ICONE DE SENHA
    connectedCallback() {
        this.innerHTML = `
            <i class="fa fa-key"></i>
            `;
        this.style.cursor = "pointer";
    }
}
class iconeSoma extends HTMLElement { // COMPONENTE ATALHO PARA ICONE DE SOMA
    connectedCallback() {
        this.innerHTML = `
            <i class="fa fa-plus"></i>
            `;
        this.style.cursor = "pointer";
    }
}
class iconeSubtracao extends HTMLElement { // COMPONENTE ATALHO PARA ICONE DE SUBTRAÇÃO
    connectedCallback() {
        this.innerHTML = `
            <i class="fa fa-minus"></i>
            `;
        this.style.cursor = "pointer";
    }
}
class iconeDivisao extends HTMLElement { // COMPONENTE ATALHO PARA ICONE DE DIVISÃO
    connectedCallback() {
        this.innerHTML = `
            <i class="fa fa-divide"></i>
            `;
        this.style.cursor = "pointer";
    }
}
class iconeMultiplicacao extends HTMLElement { // COMPONENTE ATALHO PARA ICONE DE MULTIPLICAÇÃO
    connectedCallback() {
        this.innerHTML = `
            <i class="fa fa-remove"></i>
            `;
        this.style.cursor = "pointer";
    }
}
class inputStatus extends HTMLElement { // COMPONENTE DE STATUS (ATUALIZAR POSTERIORMENTE PARA DEIXAR SUBLINHADO QUANDO PRESSIONADO)
    connectedCallback() {
        this.innerHTML = `
            <input type="checkbox" name="status_tarefa"><label>Status</label>
        `
    }
}
class iconeTempo extends HTMLElement { // COMPONENTE DE STATUS (ATUALIZAR POSTERIORMENTE PARA DEIXAR SUBLINHADO QUANDO PRESSIONADO)
    connectedCallback() {
        this.innerHTML = `
            <i class="fa fa-clock"></i>
            <label>00h00</label>
        `;
        this.style.cursor = "pointer";
    }
}
class iconeVisualizar extends HTMLElement { // COMPONENTE DE STATUS (ATUALIZAR POSTERIORMENTE PARA DEIXAR SUBLINHADO QUANDO PRESSIONADO)
    connectedCallback() {
        this.innerHTML = `
            <i class="fa fa-eye"></i>
            <label>Visualizar</label>
        `;
        this.style.cursor = "pointer";
    }
}
class iconeAdicionar extends HTMLElement { // COMPONENTE DE STATUS (ATUALIZAR POSTERIORMENTE PARA DEIXAR SUBLINHADO QUANDO PRESSIONADO)
    connectedCallback() {
        this.innerHTML = `
            <i class="fa fa-plus-square"></i>
            <label>Adicionar</label>
        `;
        this.style.cursor = "pointer";
    }
}


function apagarLabels(){
    const container = 
    document.getElementById('container-01');
    container.innerHTML = '';
}

function renomearBox(h1Element) {
    h1Element.contentEditable = true;
    h1Element.focus();

    h1Element.addEventListener('blur', () => {
        h1Element.contentEditable = false;
    });
}

function editarLabels(h3Element) {
    h3Element.contentEditable = true;
    h3Element.focus();

    h3Element.addEventListener('blur', () => {
        h3Element.contentEditable = false;
    });
}

function toggleSubmenu() {
    const submenu = document.getElementById('submenu-dashboard');
    submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
}

importIcons();
defIcons();