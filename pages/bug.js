import { useRouter } from "next/router";
import { useEffect } from "react";

export default () => {
    const router = useRouter();
    useEffect(() => {
      router.beforePopState((state) => false);
    },[])

    return <>
      <h1>The Bug</h1>
      <p>When you click "back" button on this page, the navigation is blocked correctly, but the URL still changes when it should not.</p>
    </>
}