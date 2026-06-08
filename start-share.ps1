$env:Path = "C:\Program Files\nodejs;" + $env:Path
Set-Location $PSScriptRoot

# Telefon ve Cloudflare tüneli için kararlı production çıktısını hazırlar.
& "C:\Program Files\nodejs\npm.cmd" run build
if ($LASTEXITCODE -ne 0) {
  exit $LASTEXITCODE
}

# Sunucuyu yerel ağdaki cihazların erişebileceği şekilde 3000 portunda başlatır.
& "C:\Program Files\nodejs\npm.cmd" run share
