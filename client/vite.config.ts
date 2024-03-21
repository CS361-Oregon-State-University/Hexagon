import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/test": {
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
      },
      "/username": {
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
      },
      "/updateUsername": {
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
      },
      "/loginInfo": {
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
      },
      "/getWorkouts": {
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
      },
      "/isUserWorkingOut": {
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
      },
      "/updateWorkoutProgress": {
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
      },
      "/finishedWorkout": {
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
      },
      "/addExerciseToWorkoutPlan": {
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
      },
      "/getWorkoutPlan": {
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
      },
      "/calculateWorkoutTime": {
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
      },
      "/updateWorkoutTime": {
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
      },

      "/getVideoLinks": {
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
      },

      "/calculateCaloriesBurned" : {
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
      },
      "/calculateTotalLoad" : {
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
      }, 
      "/email" : {
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
      },
    },
  },
});
