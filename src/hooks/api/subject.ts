import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/services/api/axiosInstance";

export const useSubjects = () => {
  return useQuery({
    queryKey: ["subjects"],
    queryFn: async () => {
      const res = await api.get("/subjects");
      return res.data;
    },
  });
};
export const useAddSubjects = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (subject) => {
      const res = await api.post("/subjects", subject);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subjects"] });
    },
  });
};
