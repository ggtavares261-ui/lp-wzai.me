
Write-Host "`n╔════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║  BUILD DE PRODUCAO - WZAI WEBSITE     ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════╝`n" -ForegroundColor Cyan

# Passo 1: Parar processos Node.js
Write-Host "[1/8] Parando processos Node.js..." -ForegroundColor Yellow
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Seconds 2

# Passo 2: Limpar cache e builds anteriores
Write-Host "[2/8] Limpando cache e builds anteriores..." -ForegroundColor Yellow
Remove-Item .next -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item out -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item dist -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item node_modules\.cache -Recurse -Force -ErrorAction SilentlyContinue

# Passo 3: Verificar dependências
Write-Host "[3/8] Verificando dependencias..." -ForegroundColor Yellow
if (-not (Test-Path node_modules)) {
    Write-Host "Instalando dependencias..." -ForegroundColor Yellow
    npm install
} else {
    Write-Host "Dependencias ja instaladas!" -ForegroundColor Green
}

# Passo 4: Verificar arquivos de configuração
Write-Host "[4/8] Verificando arquivos de configuracao..." -ForegroundColor Yellow
$configFiles = @("next.config.ts", "tailwind.config.ts", "postcss.config.mjs", "tsconfig.json")
$allConfigsExist = $true

foreach ($file in $configFiles) {
    if (-not (Test-Path $file)) {
        Write-Host "ERRO: Arquivo $file nao encontrado!" -ForegroundColor Red
        $allConfigsExist = $false
    }
}

if (-not $allConfigsExist) {
    Write-Host "`nERRO: Alguns arquivos de configuracao estao faltando!" -ForegroundColor Red
    exit 1
}

Write-Host "Todos os arquivos de configuracao encontrados!" -ForegroundColor Green

# Passo 5: Executar build
Write-Host "[5/8] Executando build de producao..." -ForegroundColor Yellow
Write-Host "Isso pode levar alguns minutos...`n" -ForegroundColor Cyan

npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "`nERRO: Build falhou! Verifique os erros acima." -ForegroundColor Red
    exit 1
}

# Passo 6: Verificar se a pasta out foi gerada
Write-Host "`n[6/8] Verificando pasta de build..." -ForegroundColor Yellow

if (-not (Test-Path out)) {
    Write-Host "ERRO: Pasta 'out' nao foi gerada!" -ForegroundColor Red
    exit 1
}

Write-Host "Pasta 'out' gerada com sucesso!" -ForegroundColor Green

# Passo 7: Renomear out para dist
Write-Host "[7/8] Renomeando 'out' para 'dist'..." -ForegroundColor Yellow
Rename-Item out dist -Force

# Passo 8: Verificar conteúdo da pasta dist
Write-Host "[8/8] Verificando conteudo da pasta dist..." -ForegroundColor Yellow

$distFiles = Get-ChildItem dist -Recurse | Measure-Object
$distSize = (Get-ChildItem dist -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB

Write-Host "`n╔════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║  BUILD CONCLUIDO COM SUCESSO!         ║" -ForegroundColor Green
Write-Host "╚════════════════════════════════════════╝`n" -ForegroundColor Green

Write-Host "📁 Pasta: dist/" -ForegroundColor Cyan
Write-Host "📊 Total de arquivos: $($distFiles.Count)" -ForegroundColor Cyan
Write-Host "💾 Tamanho total: $([math]::Round($distSize, 2)) MB" -ForegroundColor Cyan

Write-Host "`n✅ Arquivos principais:" -ForegroundColor Yellow
if (Test-Path "dist/index.html") {
    Write-Host "   ✓ index.html" -ForegroundColor Green
} else {
    Write-Host "   ✗ index.html (NAO ENCONTRADO)" -ForegroundColor Red
}

if (Test-Path "dist/_next") {
    Write-Host "   ✓ _next/ (assets do Next.js)" -ForegroundColor Green
} else {
    Write-Host "   ✗ _next/ (NAO ENCONTRADO)" -ForegroundColor Red
}

Write-Host "`n📤 PROXIMOS PASSOS:" -ForegroundColor Cyan
Write-Host "   1. Acesse a pasta 'dist/'" -ForegroundColor White
Write-Host "   2. Faca upload de TODO o conteudo para o servidor" -ForegroundColor White
Write-Host "   3. Configure o servidor para servir arquivos estaticos" -ForegroundColor White
Write-Host "   4. Aponte o dominio para a pasta de upload`n" -ForegroundColor White

Write-Host "🌐 Para testar localmente:" -ForegroundColor Cyan
Write-Host "   npx serve dist`n" -ForegroundColor White

Write-Host "═══════════════════════════════════════════`n" -ForegroundColor Cyan
