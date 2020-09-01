 
#!/bin/bash

#Exercício 5

read -p "Informe o caminho até o arquivo: " ARQUIVO
echo ""

if [ -f $ARQUIVO ]
  then
  echo "Este é um arquivo comum."

elif [ -d $ARQUIVO ]
  then
  echo "Este é um diretório."

else
  echo "Este é um outro tipo de arquivo."
  fi

ls -l $ARQUIVO
