#!/bin/bash
#Eu sou Tryber e...
#Exercício 6


if [ -f $1 ]
  then
  echo "Este é um arquivo comum."

elif [ -d $1 ]
  then
  echo "Este é um diretório."

else
  echo "Este é um outro tipo de arquivo."
  fi

ls -l $1
