# Izabel Viana Podóloga — V6 Fine Ajustes

Base visual: **V6 Signature Experience**, preservando o design aprovado e aplicando apenas ajustes direcionados.

## Objetivo do projeto
Landing page/site institucional preparado para receber tráfego do Google Ads, apresentar a Izabel e os tratamentos com clareza, gerar confiança e converter visitantes em contatos pelo WhatsApp.

Prioridades definidas no levantamento:
- carregamento leve;
- excelente experiência no celular;
- WhatsApp sempre acessível;
- endereço/localização claros;
- serviços e diferenciais fáceis de entender;
- estrutura preparada para SEO local e rastreamento do Google Ads;
- integração posterior dos códigos da Delma.

## O que mudou nesta rodada
- Hero preservado no estilo V6, agora usando **somente fotos reais da clínica** do arquivo `podol`.
- Mantidos os destaques: `+40 mil pés atendidos`, `8 anos` e `Podoreflexo`.
- Toda fotografia usada no site foi substituída por material do arquivo `podol`.
- A seção “Unha encravada” agora mostra a Izabel em atendimento, e não apenas a cadeira do consultório.
- Seletor de necessidades continua interativo e troca imagem/texto conforme a opção escolhida.
- Seção de resultados reorganizada para mostrar os casos inteiros, sem recortes confusos de screenshots.
- Criada galeria horizontal de casos reais, com swipe no celular e lightbox no desktop/mobile.
- Avaliações mantêm o **mesmo design da V6**, mas foram preenchidas com avaliações reais fornecidas nas capturas do Google.
- Nota/quantidade exibida nesta versão: **5,0 e 63 avaliações**, conforme captura fornecida. Antes de publicar, conferir se o total mudou.
- Galeria da clínica continua no formato editorial da V6.
- Adicionada faixa discreta de detalhes (produtos, conforto e formação) com movimento automático e pausa ao passar o mouse.
- Área de Instagram/vídeo reorganizada para integrar vídeo + casos do feed sem deixar um celular isolado na página.
- Mantidas animações, menu mobile, FAQ, mapa, WhatsApp fixo e eventos `dataLayer`.

## Imagens
Todas as 16 imagens extraídas do `podol(2).zip` foram utilizadas em algum ponto da página e convertidas para WebP.

## Visualizar
Não precisa de npm/Node.

Abra `index.html` diretamente ou, se houver Python:

```bash
python -m http.server 8080
```

Depois abra `http://localhost:8080`.

## Backend / avaliações automáticas
Esta versão continua **sem backend**, porque o objetivo principal da landing page não exige backend.

Um backend/serverless só passa a ser útil se quisermos, por exemplo:
- buscar avaliações do Google automaticamente;
- manter nota e quantidade de avaliações atualizadas;
- adicionar painel administrativo;
- armazenar formulários ou leads no próprio sistema.

Para Google Ads/WhatsApp/Maps/Instagram e a landing page em si, não é necessário backend tradicional.

## Antes de publicar
1. Confirmar os textos clínicos com a Izabel.
2. Confirmar o horário de sábado.
3. Confirmar se `+40 mil`, `8 anos` e `Podoreflexo` continuam sendo as mensagens oficiais que ela quer destacar.
4. Conferir quantidade atual de avaliações no Google.
5. Registrar domínio no CPF/CNPJ da cliente.
6. Inserir GTM/GA4/Google Ads quando a Delma fornecer os códigos.
7. Testar conversões e mobile antes de iniciar campanhas.
