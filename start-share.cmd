@echo off
set "PATH=C:\Program Files\nodejs;%PATH%"
cd /d "%~dp0"

rem Telefon ve Cloudflare tüneli için production çıktısını hazırlar.
"C:\Program Files\nodejs\npm.cmd" run build
if errorlevel 1 exit /b %errorlevel%

rem Sunucuyu yerel ağdaki cihazların erişebileceği şekilde 3000 portunda başlatır.
"C:\Program Files\nodejs\npm.cmd" run share
pause
