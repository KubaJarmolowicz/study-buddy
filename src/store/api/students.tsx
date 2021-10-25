import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IStudent } from "components/molecules/StudentDetails/Student.Details";
interface Students {
	students: IStudent[];
}

interface ISearchQuery {
	searchPhrase: string;
}

export const studentsApi = createApi({
	reducerPath: "studentsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "/",
		prepareHeaders: headers => {
			const token = localStorage.getItem("token");

			if (token) {
				headers.set("authorization", `Bearer ${token}`);
			}

			return headers;
		},
	}),
	tagTypes: ["Students"],
	endpoints: builder => ({
		getStudentById: builder.query<IStudent, string>({
			query: id => ({
				url: `students/${id}`,
			}),
			providesTags: ["Students"],
		}),

		getStudentsByGroup: builder.query<Students, string>({
			query: groupId => ({
				url: `groups/${groupId}`,
			}),
			providesTags: ["Students"],
		}),
		findStudents: builder.query<Students, ISearchQuery>({
			query: body => ({
				url: "students/search",
				method: "POST",
				body,
			}),
		}),
	}),
});

export const {
	useGetStudentByIdQuery,
	useGetStudentsByGroupQuery,
	useFindStudentsQuery,
} = studentsApi;
