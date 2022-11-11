import React from "react";
import Image from "next/image";

import {
  BellIcon,
  BookmarkIcon,
  DotsCircleHorizontalIcon,
  HashtagIcon,
  HomeIcon,
  MailIcon,
  CollectionIcon,
  UserIcon,
} from "@heroicons/react/outline";

import Row from "./Row";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center col-span-2 px-4 md:items-start">
      <div className="w-8 h-8">
        <Image
          src={"/twitter.png"}
          width={1000}
          height={1000}
          objectFit="contain"
        />
      </div>

      <Row Icon={HomeIcon} title="ホーム" />
      <Row Icon={HashtagIcon} title="話題を検索" />
      <Row Icon={BellIcon} title="通知" />
      <Row Icon={MailIcon} title="メッセージ" />
      <Row Icon={BookmarkIcon} title="ブックマーク" />
      <Row Icon={CollectionIcon} title="Lists" />
      <Row Icon={UserIcon} title="プロフィール" />
      <Row Icon={DotsCircleHorizontalIcon} title="もっと見る" />
    </div>
  );
};

export default Sidebar;
