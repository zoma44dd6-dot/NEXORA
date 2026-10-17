import { NextResponse } from "next/server";
import { z } from "zod";
const schema=z.object({name:z.string().trim().min(2).max(100),email:z.string().email().max(200),subject:z.string().trim().min(2).max(150),message:z.string().trim().min(10).max(3000)});
export async function POST(request:Request){
 try{const payload=schema.safeParse(await request.json());if(!payload.success)return NextResponse.json({error:"راجع البيانات المدخلة وحاول مرة أخرى."},{status:400});
 // This endpoint validates input only. Connect a mail provider or database before production use.
 return NextResponse.json({ok:true,notice:"Contact form is validated; configure delivery before launch."});
 }catch{return NextResponse.json({error:"تعذر معالجة الطلب."},{status:400});}
}
