#!/bin/bash

#Exercício 7

if [ -d $1 ] 
  then
  CONTAGEM=`ls $1 | wc -l`
 
  echo "O $1 tem $CONTAGEM arquivos." 

else
  echo "O argumento $1 não é um diretório!"
  fi
