import { prismaClient } from "db/client";

export default async function home() {
  const users = await prismaClient.user.findMany();

  return (
    <div>
    {JSON.stringify(users)}
    </div>
  )
}


//due to ssg 
export const revalidate = 60 // revalidate every 60 seconds
// or
// export const dynamic = 'force-dynamic'