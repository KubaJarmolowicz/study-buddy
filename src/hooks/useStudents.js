import { useCallback } from "react";
import axios from "axios";

const studentsApi = axios.create({});

studentsApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const useStudents = () => {
  const getGroups = useCallback(async () => {
    try {
      const result = await studentsApi.get("/groups");
      return result.data.groups.map(({ id }) => id);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStudentById = useCallback(async (studentId) => {
    try {
      const result = await studentsApi.get(`/students/${studentId}`);
      return result.data.students;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStudentsByGroup = useCallback(async (groupId) => {
    try {
      const result = await studentsApi.get(`/groups/${groupId}`);
      return result.data.students;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const findStudents = useCallback(async (searchPhrase) => {
    try {
      const { data } = await studentsApi.post(`/students/search`, {
        searchPhrase,
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  return {
    getStudentsByGroup,
    getStudentById,
    getGroups,
    findStudents,
  };
};
