import React, { useEffect } from "react";
import DashboardSection from "app/components/DashboardSection";
import { useAuth } from "utils/auth";
import { useRouter } from "utils/router";
import "./styles.scss";

function DashboardPage(props: any) {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (auth.user === false) {
      router.push("/signin");
    }
  // eslint-disable-next-line
  }, [auth]);

  return (
    <DashboardSection
      color="white"
      size="large"
      title="Dashboard"
      subtitle="Description"
    />
  );
}

export default DashboardPage;
