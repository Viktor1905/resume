import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Project {
  id: string;
  name: string;
  video: string;
  photoUrl: string[];
  stack: string;
  role: string;
  url: string;
  githubUrl: string;
}

interface ProjectsState {
  list: Project[];
  currentId: string | null;
}

const initialState: ProjectsState = {
  list: [
    {
      id: "rest",
      name: "Rest Client",
      video: "link",
      photoUrl: ["link"],
      stack: "stack",
      role: "role",
      url: "https://rest-client-app-zeta.vercel.app/",
      githubUrl: "https://github.com/Viktor1905/rest-client-app",
    },
    {
      id: "zoo",
      name: "Zoo shop",
      video: "link",
      photoUrl: ["link"],
      stack: "stack",
      role: "role",
      url: "https://friendlycoding.netlify.app/",
      githubUrl: "https://github.com/Viktor1905/eCommerce",
    },
    {
      id: "api",
      name: "API queries",
      video: "link",
      photoUrl: ["link"],
      stack: "stack",
      role: "role",
      url: "https://viktor1905-api-queries.netlify.app/",
      githubUrl: "https://github.com/Viktor1905/React_RS/tree/api-queries",
    },
    {
      id: "nonograms",
      name: "Nonograms",
      video: "link",
      photoUrl: ["link"],
      stack: "stack",
      role: "role",
      url: "https://viktor1905.github.io/Nonograms/",
      githubUrl: "https://github.com/Viktor1905/Nonograms/",
    },
    {
      id: "checkers",
      name: "Checkers",
      video: "link",
      photoUrl: ["link"],
      stack: "stack",
      role: "role",
      url: "https://viktor-checkers.netlify.app/",
      githubUrl: "https://github.com/Viktor1905/checkers",
    },
  ],
  currentId: "rest",
};
const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<Project[]>) => {
      state.list = action.payload;
      if (!state.currentId && action.payload.length) {
        state.currentId = action.payload[0].id;
      }
    },
    setCurrentProject: (state, action: PayloadAction<string>) => {
      state.currentId = action.payload;
    },
  },
});

export const { setProjects, setCurrentProject } = projectsSlice.actions;
export default projectsSlice.reducer;
