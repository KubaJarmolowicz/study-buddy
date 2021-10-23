const { createApi, fetchBaseQuery } = require("@reduxjs/toolkit/dist/query");

export const groupsApi = createApi({
	reducerPath: "groupsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "/",
	}),
	tagTypes: ["Groups"],
	endpoints: builder => ({
		getGroups: builder.query({
			query: () => "groups",
			providesTags: ["Groups"],
		}),
	}),
});

export const { useGetGroupsQuery } = groupsApi;
