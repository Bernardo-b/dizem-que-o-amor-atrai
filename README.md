# niver lala 💝

Site de aniversário interativo e emocional para a Lalá.

## 🎨 Sobre o Projeto

Um site artesanal e delicado que conta uma história através de:
- Tela de abertura personalizada
- Piada interna das bochechas
- Galeria de fotos estilo polaroid
- Estatísticas do relacionamento
- Puzzle Sudoku interativo
- Carta pessoal
- Mensagem final especial

## 🚀 Configuração Inicial

### 1. Instalar Dependências

```bash
npm install
```

### 2. Adicionar Conteúdo Personalizado

#### Fotos
- Adicione 15-25 fotos na pasta `/public/assets/images/`
- Nomeie como: `foto1.jpg`, `foto2.jpg`, etc
- Atualize os caminhos em `/src/data/photos.js`
- Edite as legendas no mesmo arquivo

#### Música
- Adicione sua música em `/public/assets/music/background.mp3`
- Formatos suportados: mp3, ogg, wav
- O arquivo será carregado automaticamente

#### Carta
- Edite o texto da carta em `/src/data/letter.js`
- Mantenha a estrutura de seções para melhor organização
- Use suas próprias palavras

#### Estatísticas
- Atualize os dados em `/src/data/stats.js`
- Ajuste a data de início do namoro
- Personalize os números e descrições

## 💻 Desenvolvimento

Para rodar o projeto localmente:

```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`

## 📦 Build

Para criar a versão de produção:

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`

## 🌐 Deploy no GitHub Pages

### Configuração do Repositório

1. Crie um repositório no GitHub chamado `niver-lala`
2. Inicialize o Git local:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/niver-lala.git
   git push -u origin main
   ```

3. No GitHub, vá em Settings → Pages
4. Em "Source", selecione "GitHub Actions"
5. O deploy acontecerá automaticamente a cada push na branch `main`

### URL do Site

Após o deploy, o site estará disponível em:
```
https://SEU_USUARIO.github.io/niver-lala/
```

## 📁 Estrutura do Projeto

```
niver-lala/
├── public/
│   └── assets/
│       ├── images/      # Suas fotos aqui
│       ├── music/       # Sua música aqui
│       └── textures/    # Texturas decorativas
├── src/
│   ├── components/      # Componentes React
│   ├── styles/          # Estilos CSS
│   ├── utils/           # Funções utilitárias
│   └── data/            # Dados personalizáveis
│       ├── photos.js    # ← Edite aqui
│       ├── stats.js     # ← Edite aqui
│       └── letter.js    # ← Edite aqui
├── index.html
├── package.json
└── vite.config.js
```

## ✨ Tecnologias

- **React 18** - Interface de usuário
- **Vite** - Build tool rápido
- **Framer Motion** - Animações suaves
- **Howler.js** - Player de música
- **CSS personalizado** - Estilo artesanal

## 🎯 Checklist Final

Antes de fazer deploy, certifique-se de:

- [ ] Adicionar todas as fotos em `/public/assets/images/`
- [ ] Atualizar caminhos e legendas em `/src/data/photos.js`
- [ ] Adicionar música em `/public/assets/music/background.mp3`
- [ ] Personalizar a carta em `/src/data/letter.js`
- [ ] Atualizar estatísticas em `/src/data/stats.js`
- [ ] Ajustar a data de início do namoro
- [ ] Testar localmente com `npm run dev`
- [ ] Fazer build e verificar se tudo funciona
- [ ] Fazer push para o GitHub
- [ ] Verificar se o deploy automático funcionou

## 💡 Dicas

- Use fotos em formato JPG ou PNG
- Recomendado: fotos com resolução máxima de 1920x1920px
- A música deve ter volume moderado (o player já ajusta para 50%)
- Teste em diferentes dispositivos (desktop, tablet, celular)

## 📝 Observações

Este é um projeto pessoal e único. Aproveite cada momento da criação! ❤️

---

Feito com ♥ para a Lalá
