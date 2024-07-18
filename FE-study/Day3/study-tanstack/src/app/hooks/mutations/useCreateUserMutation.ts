import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useCreateUser } from "@/app/hooks";

export const useCreateUserMutation = () => {
  const router = useRouter();
  const { createUser } = useCreateUser();

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      alert("생성했습니다. Users List 페이지로 이동합니다.");
      router.push("/user");
    },
    onError: (error: Error) => {
      throw new Error(error.message);
    },
  });
};
