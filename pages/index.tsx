import { ReactElement } from "react";
import { MainLayout } from "../layouts";

export default function Page(): ReactElement {
  return <div>Todo list will be here</div>;
}

Page.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};
