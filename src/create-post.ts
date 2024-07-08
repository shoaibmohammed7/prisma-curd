import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
 await prisma.post.create({
    data:{
        title:"Title of the Post",
        content:"My name is shoaib",
        published:true,
        authorId:1
        
    }
 })
}

main()
  