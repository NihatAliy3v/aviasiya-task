import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/services/api/axiosInstance";

export const useTeachers = () => {
  return useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      const res = await api.get("/teachers");
      return res.data;
    },
  });
};

export const useAddTeacher = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (teacher: any) => {
      const res = await api.post("/teachers", teacher);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teachers"] });
    },
  });
};

