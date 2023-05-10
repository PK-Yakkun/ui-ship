import CodeBlock from "@/components/ui-ship/CodeBlock";
import Layout from "@/components/ui-ship/Layout";
import UiBlock from "@/components/ui-ship/UiBlock";
import { useRouter } from "next/router";
import React, { Suspense, useEffect, useState } from "react";

const Component = () => {
  const router = useRouter();
  const { name } = router.query;
  const [ui, setUi] = useState<React.ReactNode>(null);
  const [code, setCode] = useState<string>("");

  useEffect(() => {
    if (name) {
      import(`../../components/${name}`)
        .then((module) => {
          setUi(module.default);
          setCode(module.code);
        })
        .catch((error) => {
          console.error("Error loading component:", error);
          setUi(<div>Component not found</div>);
        });
    }
  }, [name]);

  return (
    <Layout>
      <div>
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <div className="mb-6">
          <Suspense fallback={<div>Loading...</div>}>
            <UiBlock ui={ui} />
          </Suspense>
        </div>
        <div className="mb-6">
          <Suspense fallback={<div>Loading...</div>}>
            <CodeBlock code={code} />
          </Suspense>
        </div>
      </div>
    </Layout>
  );
};

export default Component;
