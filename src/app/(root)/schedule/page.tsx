"use client";
import LoaderUI from "@/components/LoaderUI";
import { useUserRole } from "@/hooks/useUserRole";
import { useRouter } from "next/navigation";
import React from "react";
import InterviewScheculeUI from "./InterviewScheculeUI";

function SchedulePage() {
  const router = useRouter();

  const { isInterviewer, isLoading } = useUserRole();

  if (isLoading) return <LoaderUI />;
  if (!isInterviewer) router.push("/");
  return <InterviewScheculeUI />;
}

export default SchedulePage;
