import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/services/api/axiosInstance";
import type { Teacher } from "@/types/teacher";

export const useTeachers = () => {
  return useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      const res = await api.get("/teachers");
      return res.data;
    },
  });
};

export const useGetTeacherById = (teacherId: string) => {
  return useQuery({
    queryKey: ["teacher", teacherId],
    queryFn: async () => {
      const res = await api.get(`/teachers/${teacherId}`);
      return res.data as Teacher;
    },
    enabled: !!teacherId, 
  });
};

export const useAddTeacher = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (teacher: Teacher) => {
      const res = await api.post("/teachers", teacher);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teachers"] });
    },
  });
};

export const useDeleteTeacher = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id:string) => {
      await api.delete(`/teachers/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teachers"] });
    },
  });
};

export const useUpdateTeacher = (teacherId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: Teacher) => {
      const { data } = await api.put(`/teachers/${teacherId}`, payload);
      return data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teachers"] });
    },
  });
};
