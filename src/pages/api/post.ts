import type { NextApiRequest, NextApiResponse } from 'next'
import { parseCookies } from 'nookies'
import { microCmsApi } from '../../apis/MicrocmsApi'
import { PostType } from '../../types/PostType'

type Data = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { title, content, description } = JSON.parse(req.body);
    const post: PostType = {
        title,
        content,
        description
    }

    const parsedCookies = parseCookies({ req });
    const { id, password } = parsedCookies;

    if (!id || !password) {
        res.status(400).json({ message: "fail" })
        return;
    }

    if (id != process.env.BLOG_ID || password != process.env.BLOG_PASSWORD) {
        res.status(400).json({ message: "fail" })
        return;
    }

    const response = await microCmsApi.createPost(post);

    if (response.status != 201) {
        res.status(400).json({ message: 'ポスト作成できませんでした。' })
        return;
    }

    res.status(201).json({ message: '投稿が完了しました。' })
}
