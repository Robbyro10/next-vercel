import Link from "next/link";
import { ReactElement } from "react";
import { LightLayout } from "../components/layouts/LightLayout";
import { MainLayout } from "../components/layouts/MainLayout";

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/about.tsx</code>
      </p>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <LightLayout>{page}</LightLayout>
    </MainLayout>
  );
};
