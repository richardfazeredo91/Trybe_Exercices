#!/bin/bash

#Exercício 4

if [ -e $1 ]
  then
  echo "O caminho está habilitado!"
  if [ -w $1 ]
  then
    echo "Você tem permissão para editar $1"
  else 
    echo "Você NÃO foi autorizado a editar $1"
  fi
fi
