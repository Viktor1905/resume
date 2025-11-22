import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Project {
  id: string;
  name: string;
  video: string;
  photoUrl: string[];
  stack: string;
  role: string;
  url: string;
}

interface ProjectsState {
  list: Project[];
  currentId: string | null;
}

const initialState: ProjectsState = {
  list: [
    {
      id: "Rest",
      name: "Rest Api",
      video: "link",
      photoUrl: ["link"],
      stack: "stack",
      role: "role",
      url: "url",
    },
    {
      id: "zoo",
      name: "Zoo shop",
      video: "link",
      photoUrl: ["link"],
      stack: "stack",
      role: "role",
      url: "url",
    },
    {
      id: "api",
      name: "API queries",
      video: "link",
      photoUrl: ["link"],
      stack: "stack",
      role: "role",
      url: "url",
    },
    {
      id: "nonograms",
      name: "Nonograms",
      video: "link",
      photoUrl: ["link"],
      stack: "stack",
      role: "role",
      url: "url",
    },
    {
      id: "checkers",
      name: "Checkers",
      video: "link",
      photoUrl: ["link"],
      stack: "stack",
      role: "role",
      url: "url",
    },
  ],
  currentId: null,
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
