import type { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'

type Data = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { id, password } = JSON.parse(req.body);

    if (!id || !password) {
        res.status(400).json({ message: "fail" })
        return;
    }

    if (id != process.env.BLOG_ID || password != process.env.BLOG_PASSWORD) {
        res.status(400).json({ message: "fail" })
        return;
    }

    setCookie({ res }, 'id', process.env.BLOG_ID || "", {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
    });

    setCookie({ res }, 'password', process.env.BLOG_PASSWORD || "", {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
    });

    res.status(201).json({ message: 'success' })
}
