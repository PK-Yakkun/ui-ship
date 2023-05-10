import Layout from "@/components/ui-ship/Layout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="w-full">
        <p className="mb-4">
          UIのビジュアルとソースコードをストックしています。
        </p>
        <p>
          個人用に作ったサイトですが、今後も更新していく予定ですのでご自由にご活用ください。
        </p>
      </section>
    </Layout>
  );
};

export default Home;
