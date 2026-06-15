import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(req: NextRequest) {
  const jwtToken = await getToken({ req });
  console.log("token from middleware", jwtToken);

  if (jwtToken == null) {
return NextResponse.redirect("https://project-e-commerce-master-ahmed-ramadan-s-projects.vercel.app/Login");
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/cart","/allorders","/checkout"],
};
