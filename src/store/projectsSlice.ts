import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Project {
  id: string;
  name: string;
  media: string[];
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
      id: "rest client",
      name: "Rest Client",
      media: ["rest.mp4", "restApi.jpg", "restApi2.jpg", "restApi3.jpg", "restApi4.jpg"],
      stack: "stack",
      role: "role",
      url: "https://rest-client-app-zeta.vercel.app/",
      githubUrl: "https://github.com/Viktor1905/rest-client-app",
    },
    {
      id: "zoo shop",
      name: "Zoo shop",
      media: ["shop.mp4", "zooShop.jpg", "zooShop1.jpg", "zooShop2.jpg"],
      stack: "stack",
      role: "role",
      url: "https://friendlycoding.netlify.app/",
      githubUrl: "https://github.com/Viktor1905/eCommerce",
    },
    {
      id: "api queries",
      name: "API queries",
      media: ["queries.mp4", "querie.jpg", "querie2.jpg"],
      stack: "stack",
      role: "role",
      url: "https://viktor1905-api-queries.netlify.app/",
      githubUrl: "https://github.com/Viktor1905/React_RS/tree/api-queries",
    },
    {
      id: "nonograms",
      name: "Nonograms",
      media: ["nonograms.mp4", "nonograms.jpg", "nonograms1.jpg", "nonograms2.jpg"],
      stack: "stack",
      role: "role",
      url: "https://viktor1905.github.io/Nonograms/",
      githubUrl: "https://github.com/Viktor1905/Nonograms/",
    },
    {
      id: "checkers",
      name: "Checkers",
      media: ["checkers.mp4", "checkers.jpg", "checkers1.jpg"],
      stack: "stack",
      role: "role",
      url: "https://viktor-checkers.netlify.app/",
      githubUrl: "https://github.com/Viktor1905/checkers",
    },
  ],
  currentId: "rest client",
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
