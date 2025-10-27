
# 🚀 Guia de Build e Deploy - WZAI Website

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm ou pnpm instalado
- PowerShell (Windows) ou Terminal (Mac/Linux)

---

## 🔨 Como Gerar o Build de Produção

### Opção 1: Script Automático (Recomendado)

Execute o script PowerShell que automatiza todo o processo:

```powershell
.\build-production.ps1
```

Este script irá:
1. ✅ Parar processos Node.js em execução
2. ✅ Limpar cache e builds anteriores
3. ✅ Verificar dependências
4. ✅ Validar arquivos de configuração
5. ✅ Executar o build
6. ✅ Renomear `out/` para `dist/`
7. ✅ Exibir estatísticas do build

### Opção 2: Comandos Manuais

```bash
# 1. Limpar builds anteriores
rm -rf .next out dist

# 2. Instalar dependências (se necessário)
npm install

# 3. Executar build
npm run build

# 4. Renomear pasta
mv out dist
```

---

## 📁 Estrutura da Pasta `dist/`

Após o build, a pasta `dist/` conterá:

```
dist/
├── index.html                    # Página inicial
├── 404/
│   └── index.html               # Página de erro 404
├── politica-de-privacidade/
│   └── index.html
├── politica-de-cookies/
│   └── index.html
├── termos-de-uso/
│   └── index.html
├── politica-de-cancelamento-e-reembolso/
│   └── index.html
├── _next/
│   ├── static/                  # Assets estáticos (CSS, JS, imagens)
│   └── ...
└── .htaccess                    # Configuração do servidor
```

---

## 🌐 Deploy na Hostinger

### Passo 1: Acessar o Painel da Hostinger

1. Faça login no painel da Hostinger
2. Acesse **Arquivos** → **Gerenciador de Arquivos**
3. Navegue até a pasta `public_html/`

### Passo 2: Limpar Pasta Atual (Opcional)

Se houver arquivos antigos, delete-os antes de fazer upload.

### Passo 3: Upload dos Arquivos

**Opção A: Via FTP (Recomendado para muitos arquivos)**

1. Use um cliente FTP (FileZilla, WinSCP, etc.)
2. Conecte-se ao servidor FTP da Hostinger
3. Faça upload de **TODO** o conteúdo da pasta `dist/` para `public_html/`

**Opção B: Via Gerenciador de Arquivos**

1. No gerenciador de arquivos, clique em **Upload**
2. Selecione todos os arquivos da pasta `dist/`
3. Aguarde o upload completar

### Passo 4: Verificar Permissões

Certifique-se de que:
- Arquivos: `644` (rw-r--r--)
- Pastas: `755` (rwxr-xr-x)

### Passo 5: Configurar Domínio

1. Acesse **Domínios** no painel da Hostinger
2. Aponte o domínio para a pasta `public_html/`
3. Aguarde a propagação DNS (pode levar até 24h)

---

## ✅ Checklist de Verificação

Antes de fazer deploy, verifique:

- [ ] Build executado sem erros
- [ ] Pasta `dist/` foi gerada
- [ ] Arquivo `dist/index.html` existe
- [ ] Pasta `dist/_next/` existe
- [ ] Arquivo `.htaccess` está na raiz de `dist/`
- [ ] Todas as páginas estáticas foram geradas
- [ ] Imagens e assets estão presentes

---

## 🧪 Testar Localmente

Antes de fazer deploy, teste o build localmente:

```bash
# Instalar servidor estático
npm install -g serve

# Servir a pasta dist
npx serve dist

# Acessar no navegador
# http://localhost:3000
```

---

## 🔧 Solução de Problemas

### Erro: "Pasta `out` não foi gerada"

**Causa:** Configuração incorreta no `next.config.ts`

**Solução:**
```typescript
// next.config.ts deve ter:
const nextConfig: NextConfig = {
  output: 'export',  // ← Essencial para gerar build estático
  // ...
};
```

### Erro: "404 ao acessar rotas"

**Causa:** Servidor não está configurado para servir arquivos estáticos corretamente

**Solução:**
- Certifique-se de que o arquivo `.htaccess` está na raiz
- Verifique se o módulo `mod_rewrite` está habilitado no servidor

### Erro: "Imagens não carregam"

**Causa:** Caminhos de imagem incorretos ou CORS

**Solução:**
- Verifique se `images.unoptimized: true` está no `next.config.ts`
- Certifique-se de que as imagens estão na pasta `public/` ou use URLs absolutas

### Erro: "CSS não está sendo aplicado"

**Causa:** Cache do navegador ou build incompleto

**Solução:**
```bash
# Limpar tudo e rebuildar
rm -rf .next out dist node_modules/.cache
npm run build
```

---

## 📊 Otimizações Aplicadas

O build inclui automaticamente:

- ✅ **Minificação** de HTML, CSS e JavaScript
- ✅ **Compressão GZIP** via `.htaccess`
- ✅ **Cache de assets** (1 ano para imagens, CSS, JS)
- ✅ **Lazy loading** de imagens
- ✅ **Code splitting** automático
- ✅ **Otimização de fontes** (Google Fonts)

---

## 🔄 Atualizações Futuras

Para atualizar o site:

1. Faça as alterações no código
2. Execute `.\build-production.ps1` novamente
3. Faça upload apenas dos arquivos modificados
4. Limpe o cache do navegador (Ctrl + F5)

---

## 📞 Suporte

Se encontrar problemas:

1. Verifique os logs de erro no console do navegador
2. Verifique os logs do servidor na Hostinger
3. Consulte a documentação do Next.js: https://nextjs.org/docs

---

## 📝 Notas Importantes

- ⚠️ **Não modifique** arquivos diretamente no servidor
- ⚠️ **Sempre faça backup** antes de atualizar
- ⚠️ **Teste localmente** antes de fazer deploy
- ⚠️ **Mantenha** o arquivo `.htaccess` na raiz

---

**Última atualização:** 2024
**Versão do Next.js:** 15.2.4
**Tipo de build:** Static Export
