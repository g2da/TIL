import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useDeleteUser } from "@/app/hooks";

export const useDeleteUserMutation = () => {
  const router = useRouter();
  const { deleteUser } = useDeleteUser();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      alert("삭제했습니다. 목록 페이지로 이동합니다.");
      router.push(`/user`);
    },
    onError: (error: Error) => {
      throw new Error(error.message);
    },
  });
};
