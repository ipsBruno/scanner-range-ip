
# scanner-range-ip
Scan IP ranges to find servers online

## O que é
Este projeto feito em NodeJS escaneia todos IPs de uma determinada faixa colocando em um arquivo o resultado dos endereços que foram encontrados on-line

Pode ser usado como forma de scannear a rede atrás de roteadores vulneráveis ou desatualizados, endereços de câmeras, ips direto para website entre outros dispositivos IoT

Usando as faixas de IP do Brasil temos um total de 75 milhões de faixas de endereços pra ser escaneada!

## Formas de uso
A variável: **maxThread** definirá quantos IPs podemos escanear no **timeout de 3 segundos**, isso significa que pra escanear 75 milhões de IPs vamos levar aproximadamente 100 dias! Você pode aumentar o valor de maxThread pra melhorar sua velocidade de buscas dependendo do quanto seu servidor aguenta.

Todos resultados serão armazenados em "**logs.txt**" e as faixas de IP para serem escaneadas devem ficar em "**rages.txt**"

Pra saber os IPs Ranges de um determinado país utilize este site:
https://lite.ip2location.com/ip-address-ranges-by-country


Ao abrir o projeto você deverá ver uma tela parecida com esta:
![Imagem do programa rodando](https://i.imgur.com/wR0gblp.png)

**PS:** Ele não vai escanear as faixas de forma aleatória, mas sim de forma sequencial, todas ELAS



## Contato

Caso tiver dúvidas meu e-mail para contato é email@brunodasilva.com

