# 🚀 Como Publicar seu APP no Easypanel e Play Store

## PASSO 1: Preparar o arquivo

1. **Baixe o arquivo** `app-treino-completo.html`
2. **Renomeie para** `index.html`
3. Pronto! Arquivo único, autocontido.

---

## PASSO 2: Publicar no Easypanel

O projeto já está preparado para implantação pelo GitHub: o arquivo `Dockerfile` usa Nginx e publica automaticamente o `index.html`, o `manifest.json` e as imagens locais.

### Via GitHub (recomendado)

1. No EasyPanel, crie um novo **App**.
2. Escolha **GitHub** como fonte e selecione este repositório.
3. Selecione a branch principal.
4. No campo de build, mantenha o **Dockerfile** detectado automaticamente.
5. Configure a porta pública como `80`.
6. Faça o deploy e associe seu domínio em **Domains**.
7. Abra o domínio e confirme o carregamento do `Projeto Shape - Jeann`.

O EasyPanel deve detectar o `Dockerfile` na raiz. Não use a opção Node.js, pois este é um app estático.

### Via File Manager do Easypanel:

1. Acesse seu **Easypanel**
2. Vá para **File Manager** ou **Files**
3. Crie uma pasta chamada `/app-treino` ou similar
4. **Upload** do arquivo `index.html` para essa pasta
5. Pronto! Acesse via: `seu-dominio.com/app-treino/`

### Via SSH (se preferir):

```bash
ssh seu-usuario@seu-servidor.com
cd /path/para/public_html
mkdir app-treino
cd app-treino
# Copie o index.html aqui
```

---

## PASSO 3: Transformar em PWA (Web App instalável)

O app já é um PWA! Funciona assim:

### No Chrome/Android:
1. Abra o app: `seu-dominio.com/app-treino/`
2. Clique no menu ⋮ (3 pontinhos)
3. **"Instalar aplicativo"** ou **"Adicionar à tela inicial"**
4. Pronto! Funciona como app nativo

### No Safari/iPhone:
1. Abra em Safari
2. Clique em **Compartilhar**
3. **"Adicionar à Tela de Início"**
4. Nome: "Meu Treino"
5. Pronto!

---

## PASSO 4: Publicar na Play Store (Android)

Para publicar como app nativo na Play Store, você tem 2 opções:

### Opção A: Usar Capacitor (Recomendado - R$500-1500)

Você vai precisar contratar um desenvolvedor que:

1. Instale **Capacitor** (converte web em app nativo)
2. Configure o projeto:
```bash
npm install -g @capacitor/cli
capacitor create
# Coloque seu HTML/CSS/JS
capacitor add android
capacitor build android
```

3. **Cria a APK** (arquivo instalável)
4. Publica na Play Store com sua conta

### Opção B: Usar Apache Cordova (Mais barato - R$300-800)

Mesma ideia, mais simples:
```bash
cordova create .
cordova platform add android
cordova build android
```

### Opção C: Usar PWA2APK (Gratuito mas limitado)

1. Acesse: https://www.pwabuilder.com/
2. Cole sua URL: `seu-dominio.com/app-treino/`
3. Gera APK automaticamente
4. Publica na Play Store

---

## PASSO 5: Conta na Play Store

1. Crie conta em: https://play.google.com/console
2. **Pague R$25** (taxa única)
3. Vá em **Criar aplicativo**
4. Preencha:
   - **Nome**: "Meu Treino"
   - **Descrição**: "App com 5 programas de treino, progressão automática e dicas inteligentes"
   - **Categoria**: Health & Fitness
   - **Avaliação**: 16+

5. **Upload da APK** na seção **Release**
6. **Aguarde revisão** (24-48 horas)
7. **Publicado!** 🎉

---

## RECURSOS DO APP

✅ **5 Programas prontos:**
- Full Body
- Push/Pull/Legs
- Upper/Lower
- Hipertrofia Máxima
- Definição

✅ **Funcionalidades:**
- Rastreamento de séries/repetições/peso
- Histórico completo
- Progressão automática
- Dicas baseadas em fase
- Funciona offline
- PWA (instalável)
- Sincroniza automaticamente

---

## CUSTOMIZAÇÕES POSSÍVEIS

Quer modificar o app? Abra o `index.html` em um editor (VS Code, Notepad++) e:

### Adicionar programa:
```javascript
{
    id: 'novo_programa',
    name: 'Nome',
    desc: 'Descrição',
    days: 4,
    difficulty: 'Intermediário',
    exercises: [
        { name: 'Exercício', sets: 4, reps: '8-12' }
    ]
}
```

### Mudar cores:
```css
:root {
    --primary: #seu-cor;
    --accent: #sua-cor;
}
```

### Adicionar exercício:
Na lista `exercises` do programa desejado.

---

## SUPORTE TÉCNICO

Se tiver problemas:

1. **App não carrega**: Verifique permissões de arquivo no Easypanel
2. **Dados não salvam**: Limpe cache (Ctrl+Shift+Del)
3. **PWA não instala**: Use Chrome/Samsung Internet (melhor suporte)
4. **Play Store rejeita**: Adicione screenshot, ícone 192x192

---

## PRÓXIMOS PASSOS

1. ✅ Baixe o arquivo
2. ✅ Coloque no Easypanel
3. ✅ Teste no seu celular
4. ✅ Customize conforme desejar
5. ✅ Publique na Play Store (opcional)

**Sucesso!** 🚀
