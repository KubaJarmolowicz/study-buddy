import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export enum Group {
	A,
	B,
	C,
}

export interface IGroup {
	id: typeof Group[0];
}

interface Groups {
	groups: IGroup[];
}

export const groupsApi = createApi({
	reducerPath: "groupsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "/",
	}),
	tagTypes: ["Groups"],
	endpoints: builder => ({
		getGroups: builder.query<Groups, void>({
			query: () => "groups",
			providesTags: ["Groups"],
		}),
	}),
});

export const { useGetGroupsQuery } = groupsApi;
