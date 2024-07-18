import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEditUser } from "@/app/hooks";

export const useEditUserMutation = (id?: string) => {
  const router = useRouter();
  const { editUser } = useEditUser();

  return useMutation({
    mutationFn: editUser,
    onSuccess: () => {
      alert("수정했습니다. 상세 페이지로 이동합니다.");
      router.push(`/user/${id}`);
    },
    onError: (error: Error) => {
      throw new Error(error.message);
    },
  });
};
