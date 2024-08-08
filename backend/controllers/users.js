const { Pool } = require('pg')
// const pool = new Pool()

const { PrismaPg } = require('@prisma/adapter-pg')
const { PrismaClient } = require("@prisma/client")
// const prisma = new PrismaClient()

// import { Pool } from 'pg'
// import { PrismaPg } from '@prisma/adapter-pg'
// import { PrismaClient } from '@prisma/client'

const connectionString = `${process.env.DATABASE_URL}`
console.log('connectionString ', connectionString)

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

const add = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "введите имя" });

  const sat = await prisma.sat.create({
    data: {
      name,
    },
  });
  if (sat) {
    res.status(200).json({
      name: sat.name,
    });
  } else {
    return res.status(400).json({ message: "ошибка записи в БД" });
  }
};


// const add = async (req, res) => {
//   const { firstName } = req.body;
//   if (!firstName) return res.status(400).json({ message: "введите имя" });
//
//   const user = await prisma.user.create({
//     data: {
//       firstName,
//     },
//   });
//   if (user) {
//     res.status(200).json({
//       firstName: user.firstName,
//     });
//   } else {
//     return res.status(400).json({ message: "ошибка записи в БД" });
//   }
// };

// const getAllUsers = async (req, res) => {
//   try {
//     const users = await prisma.user.findMany()
//     res.status(200).json(users)
//   } catch {
//     res.status(400).json({ message: 'ошибка в получении сотрудников' })
//   }
// };
//
const getAllUsers = async (req, res) => {
  try {
    const sat = await prisma.sat.findMany()
    res.status(200).json(sat)
  } catch {
    res.status(400).json({ message: 'ошибка в получении сотрудников' })
  }
};

// const remove = async (req, res) => {
//   try {
//     const { id } = req.body
//     console.log('remove id ', id)
//     // const { id } = req.body
//     await prisma.user.delete({
//       where: {
//         id
//       }
//     })
//     res.status(204).json({ message: 'пользователь успешно удален' })
//   } catch {
//     res.status(500).json({ message: 'не удалось удалить сотрудника' })
//   }
// }
//
const remove = async (req, res) => {
  try {
    // const { id } = req.body
    // console.log('params ', req.params)
    // const { id } = req.params
    // console.log('remove id from sat table ', id)
    // const { id } = req.body
    const { id } = req.params
    console.log('remove id from sat table ', id)
    await prisma.sat.delete({
      where: {
        id: +id
      }
    })
    res.status(204).json({ message: 'пользователь успешно удален' })
  } catch {
    res.status(500).json({ message: 'не удалось удалить сотрудника' })
  }
}

// const edit = async (req, res) => {
//   try {
//     const data = req.body
//     const id = data.id
//     console.log('edit data ', data)
//     console.log('edit id ', id)
//     await prisma.user.update({
//       where: { id }, data
//     })
//     res.status(204).json('OK')
//   } catch {
//     res.status(400).json({ message: 'не удалось изменить сотрудника' })
//   }
// }
//
//
const edit = async (req, res) => {
  try {

    const data = req.body
    // const id = data.id
    const { id } = req.params

    console.log('edit id ', id)
    const editId = +id

    console.log('edit data ', data)

    await prisma.sat.update({
      where: { id: editId },
      // data: { ...data }
      data: { name: data.name, position: data.position }
      // name: data.name
    })
    res.status(204).json('OK')
  } catch {
    res.status(400).json({ message: 'не удалось изменить сотрудника' })
  }
}

const getUserByName = async (req, res) => {
  try {
    const { id } = req.params
    console.log('id', id)
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    })
    res.status(200).json(user)
  } catch {
    res.status(400).json({ message: 'ошибка получения пользователя' })
  }
}

module.exports = {
  add,
  getAllUsers,
  remove,
  edit,
  getUserByName
};
