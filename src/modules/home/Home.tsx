import * as React from "react";
import { Card } from "@components/marketing/Card";
import { SimpleGrid } from "@components/marketing/SimpleGrid";
import { MainLayout } from "@layouts/default/MainLayout";
import {
  ModuleProperty
} from "@models/ModuleProperty"
interface HomeProperty extends ModuleProperty {
  background: string,
}

const Test: HomeProperty = {
  background: "",
  width: 0,
  height: 0,
  maxWidth: 0,
  maxHeight: 0
}

export const Home: React.FC<{}> = ({

}) => {
  return (
    <MainLayout>

      <SimpleGrid>
        <Card
          title="Documentation"
          body="Find in-depth information about Next.js features and API."
          href="https://nextjs.org/docs"
        />
        <Card
          title="Learn &rarr;"
          body="Learn about Next.js in an interactive course with quizzes!"
          href="https://nextjs.org/learn"
        />
        <Card
          title="Examples"
          body="Discover and deploy boilerplate example Next.js projects."
          href="https://github.com/vercel/next.js/tree/master/examples"
        />
        <Card
          title="Deploy &rarr;"
          body="Instantly deploy your Next.js site to a public URL with Vercel."
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        />
      </SimpleGrid>
    </MainLayout>
  );
};