import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({log:['info','query'],})

async function main() {
 await prisma.user.create({
    data:{
        email:"shoaib123@gmail.com",
        name:"Shoaib"
    }
 })
}

main()
  