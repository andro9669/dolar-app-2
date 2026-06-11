# Dolar App

Proyecto de prueba - Arquitectura frontend y backend con seguridad simulada.

## Stack

- Frontend: HTML + JS (sin frameworks)
- Backend: Node.js
- API externa: cot.yumsistemas.com/api

## Arquitectura

El browser nunca habla directo con dolarapi.
Toda request pasa por el backend, que valida una API Key antes de responder.

## Seguridad implementada

- API Key en header (`x-api-key`)

## Endpoints

## Forma de correrlo
