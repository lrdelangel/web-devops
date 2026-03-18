#!/bin/bash

# 🚀 Script de Deploy para Netlify
# Uso: ./deploy.sh

echo "🚀 Iniciando deploy..."

# Verificar si existe la carpeta dist
if [ ! -d "dist" ]; then
    echo "❌ Error: No existe la carpeta dist/"
    echo "💡 Ejecuta primero: npm run build"
    exit 1
fi

# Verificar si Netlify CLI está instalado
if ! command -v netlify &> /dev/null; then
    echo "📦 Instalando Netlify CLI..."
    npm install -g netlify-cli
fi

# Login a Netlify (solo primera vez)
echo "🔐 Verificando login de Netlify..."
netlify status || netlify login

# Deploy
echo "📤 Subiendo a Netlify..."
netlify deploy --prod --dir=dist

echo "✅ Deploy completado!"
echo "🌐 Tu sitio está en: https://app.netlify.com/sites"
