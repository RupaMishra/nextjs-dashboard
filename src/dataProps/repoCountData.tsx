type Repo = {
  name: string;
  stargazers_count: number;
};
export const getServerSideProps = (async () => {
  // Fetch data from external API
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo: Repo = await res.json();
  // Pass data to the page via props
  return { props: { repo } };
}) satisfies import("next").GetServerSideProps<{ repo: Repo }>;
