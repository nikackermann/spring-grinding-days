import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
    const token = request.headers.get('Authorization')

    if (token !== process.env.BASIC_AUTH_PASSWORD) {
        return new NextResponse('Unauthorized', { status: 401 })
    }

    try {
        const result = await sql`SELECT * FROM registrations`
        return new NextResponse(JSON.stringify({ data: result.rows }), {
            status: 200,
            headers: {
                'content-type': 'application/json'
            }
        })
    } catch (error) {
        console.error(error)
        return NextResponse.error()
    }
}
