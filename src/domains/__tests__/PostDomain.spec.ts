import { PostDomain } from "../PostDomain"

const samplePost = {
    "id": "imgy-5558x",
    "createdAt": "2022-06-28T05:49:50.003Z",
    "updatedAt": "2022-06-28T07:36:51.124Z",
    "publishedAt": "2022-06-28T05:49:50.003Z",
    "revisedAt": "2022-06-28T07:36:51.124Z",
    "title": "Reactの設計思想を学んでみた",
    "content": "１日１個。\n課題を設定して解決する習慣を身に着けようと思い、ちょうどいいのでブログに記録を残していこうと思います。\n\n# 今思う課題・知りたいこと\n\n- Reactの設計戦略。\n- Functionalコンポーネントの書き方。\n- Reactのディレクトリ戦略。\n- Reacのステート管理戦略。\n- Reactにおける命名規則。\n- Reactにおけるclassの使い方。\n\n# 今回解決すること\n\n- Reactの設計戦略を一つ学ぶ。\n\n# 解決\n\n今回はReactにおける設計戦略に関して解決していきます。\n完全な設計の戦略は難しいですが、おおよその方向性は見つけたいところです。\n\n## コンポーネント関数\n\n参考\nhttps://qiita.com/erukiti/items/fb7bcbd9d79696579d06\n\n参考記事によると、コンポーネント関数には「軽量」という意味合いがあると描かれています。\nよって以下の性質を持つべきだと。\n\n- 重い処理を書かない。\n- 副作用を記述しない。\n- コールバック関数に複雑な処理は任せる。\n\nコンポーネント関数は何度も呼ばれることを前提にしているため、こういった性質をもたせるべきだと。\n\nなるほど。\n言われてみれば確かにそうかもしれませんね。\n\n\n## ビジネスロジックとビューを分離する\n\n参考\nhttps://qiita.com/teradonburi/items/6828635d2e70dba6637d\n\nこれは従来で言うところのMVCパターン的な考え方ですね。\n近年でのフロント側の処理能力向上により、フロント側でも強く考慮されるようになってきたのはヒシヒシと感じます。\nというか、個人的に作っていて痛く感じておりますね。\n\n参考記事によると、ATOMICデザインを挙げられていますが、相当大きなシステムじゃないと、ああいった粒度のレベルが多い設計思想は「逆に辛い」と感じることが多そうに思えます。\n\n＞componentのprops渡し\n\nその中でもこれは面白いなと感じました。\n\nロジックを詰め込んだコンポーネントに「component」propsをもたせ、そこに表示用のコンポーネントを持たせる。\n確かにロジックと表示の分離ができているように感じられます。\n\n## Hooksで分離する\n\nhttps://sairys.medium.com/react-separating-responsibilities-using-hooks-b9c90dbb3ab9\n\n上記のサイトを参考にすると、主に以下のものはHooksで外側に出す設計を行っている。\n\n- state\n- handler\n\nさらに外側に出したロジック内でもstateなどが全くない部分に関しては、関数として取り出していた。\n\n今まで見た中では、一番好きなパターンかもしれない。\n\n## 結局どうするべきか\n\nざっと調べてみた感じ、表示とロジックを分ける意識は持つ必要がある。\n\n中でもHooksの力は強いと感じた。\n\nとにかく、ステート、ロジックはHooksで外側に出していこうと思う。\n",
    "category": {
        "id": "c5av89_png6h",
        "createdAt": "2022-06-28T07:02:48.029Z",
        "updatedAt": "2022-06-28T07:02:48.029Z",
        "publishedAt": "2022-06-28T07:02:48.029Z",
        "revisedAt": "2022-06-28T07:02:48.029Z",
        "name": "React"
    },
    "description": "Reactの設計思想を一つ学びます。"
}

describe("Domainテスト", () => {
    test("category nameが取得できること。", () => {
        const target = new PostDomain(samplePost);
        expect(target?.category?.name).toBe("React")
    });

    test("日付の文字列が取得できること。", () => {
        const target = new PostDomain(samplePost);
        expect(target?.publishedAtStr).toBe("2022年6月28日")
    })
})