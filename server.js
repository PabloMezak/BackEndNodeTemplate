import { fastify } from 'fastify'
import { databaseMemori } from './dataBaseMemori.js'
const server = fastify()


server.listen({ port: 3000 })
