import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';

const contactSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    message: z.string().min(1),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = contactSchema.parse(body);

        const submission = await prisma.contactSubmission.create({
            data: {
                name,
                email,
                message,
            },
        });

        return NextResponse.json(submission);
    } catch (error) {
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
}
