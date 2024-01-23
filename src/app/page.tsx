import { getServerSideProps } from "@/dataProps/repoCountData";
import { InferGetServerSidePropsType } from "next";
import { ReactNode } from "react";

type Repo = {
  login: string;
  stargazers_count: number;
};
async function getData() {
  const res = await fetch("https://api.github.com/users");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data: Array<any> = await getData();

  return (
    <main>
      {data.map((item: Repo, index: number) => {
        return <p key={index}>{item.login}</p>;
      })}
    </main>
  );
}
