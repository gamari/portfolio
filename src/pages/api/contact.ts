import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    success: boolean
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { method } = req;
    if (method != "POST") {
        res.status(400).json({ success: false })
        return;
    }

    const { name, email, subject, content } = JSON.parse(req.body)

    const data = {
        name,
        email,
        subject,
        content
    };

    await fetch(`https://${process.env.MICRO_API_DOMAIN}.microcms.io/api/v1/contact`, {
        method: "POST",
        headers: {
            "X-MICROCMS-API-KEY": process.env.MICRO_API_KEY || "",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    res.status(200).json({ success: true })
}
