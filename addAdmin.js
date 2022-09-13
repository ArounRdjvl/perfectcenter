const prompt = require('prompt-sync')()
const bcrypt = require('bcrypt')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function createAdmin() {
  console.log('adding an admin to database')
  const email = prompt('admin email : ')
  const firstname = prompt('admin firstname : ')
  const lastname = prompt('admin lastname : ')
  const password = prompt('admin password : ')

  const hash = await bcrypt.hash(password, 10)

  const admin = await prisma.user.create({
    data: {
      email,
      firstname,
      lastname,
      isAdmin: true,
      isVerified: true,
      password: hash,
    },
  })

  console.log('user created', {
    email,
    firstname,
    lastname,
    password: hash,
  })
}

createAdmin()
