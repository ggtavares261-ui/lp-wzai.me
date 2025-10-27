
Write-Host "`n=== WZAI - GERACAO DE BUILD PARA PRODUCAO ===" -ForegroundColor Cyan

# 1. Verificar Node.js
Write-Host "`n[1/7] Verificando Node.js..." -ForegroundColor Yellow
$nodeVersion = node --version
Write-Host "Node.js: $nodeVersion" -ForegroundColor Green

# 2. Limpar builds anteriores
Write-Host "`n[2/7] Limpando builds anteriores..." -ForegroundColor Yellow
Remove-Item .next -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item out -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item dist -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item node_modules\.cache -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "Limpeza concluida!" -ForegroundColor Green

# 3. Verificar dependências
Write-Host "`n[3/7] Verificando dependencias..." -ForegroundColor Yellow
if (-not (Test-Path node_modules)) {
    Write-Host "Instalando dependencias..." -ForegroundColor Yellow
    npm install
} else {
    Write-Host "Dependencias OK!" -ForegroundColor Green
}

# 4. Verificar arquivos de configuração
Write-Host "`n[4/7] Verificando configuracoes..." -ForegroundColor Yellow
$configFiles = @("next.config.ts", "postcss.config.mjs", "tailwind.config.ts", "tsconfig.json")
$allConfigsExist = $true
foreach ($file in $configFiles) {
    if (-not (Test-Path $file)) {
        Write-Host "ERRO: $file nao encontrado!" -ForegroundColor Red
        $allConfigsExist = $false
    }
}
if ($allConfigsExist) {
    Write-Host "Configuracoes OK!" -ForegroundColor Green
}

# 5. Executar build
Write-Host "`n[5/7] Gerando build de producao..." -ForegroundColor Yellow
Write-Host "Isso pode levar alguns minutos..." -ForegroundColor Cyan
npm run build

# 6. Verificar resultado
Write-Host "`n[6/7] Verificando resultado..." -ForegroundColor Yellow
if (Test-Path out) {
    Write-Host "Build gerado com sucesso!" -ForegroundColor Green
    
    # Renomear out para dist
    Write-Host "`n[7/7] Renomeando 'out' para 'dist'..." -ForegroundColor Yellow
    Rename-Item out dist
    
    Write-Host "`n=== BUILD CONCLUIDO COM SUCESSO! ===" -ForegroundColor Green
    Write-Host "`nPasta 'dist' criada e pronta para upload!" -ForegroundColor Cyan
    Write-Host "`nConteudo da pasta dist:" -ForegroundColor Yellow
    Get-ChildItem dist -Recurse | Select-Object FullName -First 30
    
    Write-Host "`n=== PROXIMOS PASSOS ===" -ForegroundColor Cyan
    Write-Host "1. Faca upload de TODO o conteudo da pasta 'dist' para o diretorio 'public_html' da Hostinger" -ForegroundColor White
    Write-Host "2. Configure o dominio para apontar para o diretorio correto" -ForegroundColor White
    Write-Host "3. Verifique se o arquivo 'dist/index.html' existe" -ForegroundColor White
    
} elseif (Test-Path .next) {
    Write-Host "`nERRO: Build gerou pasta '.next' ao inves de 'out'" -ForegroundColor Red
    Write-Host "Verifique se 'output: export' esta configurado no next.config.ts" -ForegroundColor Yellow
} else {
    Write-Host "`nERRO: Build falhou!" -ForegroundColor Red
    Write-Host "Verifique os erros acima e tente novamente." -ForegroundColor Yellow
}

Write-Host "`n=== PROCESSO FINALIZADO ===" -ForegroundColor Cyan
